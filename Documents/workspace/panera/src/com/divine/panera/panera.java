package com.divine.panera;

import java.io.BufferedInputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintStream;
import java.io.UnsupportedEncodingException;
import java.net.Socket;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

//for encrypt and decrypt
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;



public class panera
{
	private static Socket sock;
	private static PrintStream os;
	
	private String serverIP;
	private String serverPort;
	private String agentIP;
	private String agentPort;
	private String logPath;
	private String cachePath;
	private String workdir;
	
	public static final String DEFAULT_ENCODING = "UTF-8"; 
    static BASE64Encoder enc = new BASE64Encoder();
    static BASE64Decoder dec = new BASE64Decoder();
    public static final String DELIMITER = "#";
    public static final String SRT_SEND = "1";
    public static final String SRT_RECV = "2";
    public static final String SRT_SRVINF = "3";
    public static final String SRT_SAVEINF = "4";
    public static final String SRT_RCVINF = "5";
    
	public panera() throws Exception {
		
		// initialize the class : read configuration.
		readConfig();
		
		// ask file server info to agent server.
		askFileServers();
		
		System.out.println("panera.constructor.");
		
	}
	
	public static boolean isWindows( String str ) {

		return (str.indexOf("win") >= 0);

	}

	public static boolean isMac( String str ) {

		return (str.indexOf("mac") >= 0);

	}

	public static boolean isUnix( String str ) {

		return (str.indexOf("nix") >= 0 || str.indexOf("nux") >= 0 || str.indexOf("aix") > 0 );
		
	}

	public static boolean isSolaris( String str ) {

		return (str.indexOf("sunos") >= 0);

	}
	
	public int readConfig() throws IOException {
		
		System.out.println("readConfig begin.");
		
		Properties prop = new Properties();
		InputStream input = null;

		try {
			
			String strOS = System.getProperty("os.name").toLowerCase();
			
			String pconfig = "";
			
			if( isWindows(strOS) ) {
				pconfig = "C:/sbmsLib/conf/panera.config";
			} 
			else {
				pconfig = "/Users/water4063/Documents/secure_sw/panera/panera.config";
			}
			
			System.out.println( strOS + " : " + pconfig );
					
			input = new FileInputStream( pconfig );

			// load a properties file
			prop.load( input );

			// get the property value and print it out
			agentIP = prop.getProperty("agentip") ;
			agentPort = prop.getProperty("agentport") ;
			workdir = prop.getProperty("workdir");
			logPath = workdir + prop.getProperty("logpath") ;
			cachePath = workdir + prop.getProperty("cachepath") ;
			
			System.out.println( "agent serverip = " + agentIP );
			System.out.println( "agent serverport = " + agentPort );
			System.out.println( "workdir = " + workdir );
			System.out.println( "logpath = " + logPath );
			System.out.println( "cachepath = " + cachePath );

		} 
		catch( IOException ex ) {
			ex.printStackTrace();
		} 
		finally {
			if( input != null ) {
				try {
					input.close();
				} 
				catch( IOException e ) {
					e.printStackTrace();
				}
				
				return 0;
			}
			
		}
		
		System.out.println("readConfig end.");
		return 1;
	}
	
	public String encryptFileName(String str) {
		
		System.out.println("endcryptFileName begin.");
		
		String encrypted = ""; 
		
		try{
			
			MessageDigest sh = MessageDigest.getInstance("SHA-256"); 
			
			sh.update(str.getBytes()); 
			
			byte byteData[] = sh.digest();
			
			StringBuffer sb = new StringBuffer(); 
			
			for(int i = 0 ; i < byteData.length ; i++){
				sb.append(Integer.toString((byteData[i]&0xff) + 0x100, 16).substring(1));
			}
			
			encrypted = sb.toString();
			
		}
		catch(NoSuchAlgorithmException e){
			e.printStackTrace(); 
			encrypted = null; 
		}
		
		System.out.println("encryptFileName end.");
		
		return encrypted;
	}

    public static String base64encode(String text) {
        try {
            return enc.encode(text.getBytes(DEFAULT_ENCODING));
        } 
        catch (UnsupportedEncodingException e) {
        	return null;
        }
    }

    public static String base64decode(String text) {
        try {
            return new String(dec.decodeBuffer(text), DEFAULT_ENCODING);
        } 
        catch (IOException e) {
            return null;
        }
    }
	
	public String checkCache( String fileName, String encryptedFileName, String createDate ) {
		
		System.out.println("checkCache begin.");
		
		String[] arr;
		
		String name = base64encode( serverIP + DELIMITER + serverPort + DELIMITER + fileName + DELIMITER + encryptedFileName + DELIMITER + createDate);
		
		File file = new File( cachePath + name );
		if( file.exists() && !file.isDirectory() ) { 
		 
		    arr = base64decode( name ).split( DELIMITER );
		    
		    for(int i = 0; i < arr.length; i++ ) {
		    	System.out.println(arr[i]);
		    }
		    
		}
		else {
			System.out.println("Faile to find the file = [" + cachePath + name+ "]");
			name = "";
		}
		
		System.out.println("checkCache end.");
		
		return name;
	}
	
	public void saveCache( String fileName, String encryptedFileName, String createDate ) {
		
		System.out.println("saveCache begin.");
		
		String name = base64encode( serverIP + DELIMITER + serverPort + DELIMITER + fileName + DELIMITER + encryptedFileName + DELIMITER + createDate);
		
		try {

	        File file = new File( name );
	        
	        System.out.println("cache info = [" + file.getAbsolutePath() + "]");
	
	        if( file.createNewFile() ) {
	        	System.out.println("File is created!");
	        }
	        else {
	        	System.out.println("File already exists");
	        }
	        
	        // move to the cache directory
	        if( file.renameTo( new File( cachePath + name ) ) ) {
     		    System.out.println("File is moved successful!! [" + name + "]");
     	    }
     	    else {
     	 	    System.out.println("File is failed to move! [" + name + "]");
     	    }
		
	    } 
		catch (IOException e) {
	      e.printStackTrace();
		}
		
		System.out.println("saveCache end.");
	}
	
public String receiveFileInfo(String fileName, String createDate ) throws IOException {
		
		System.out.println("receiveFileInfo begin.");
		
		String result = "";
		
		// establish connection to server
		try {
			sock = new Socket( agentIP, Integer.parseInt( agentPort ) );
		}
		catch(Exception e) {
			System.err.println("Can not connect to agent server, try again later.");
			System.exit(1);
		}
		
		os = new PrintStream( sock.getOutputStream() );
		
		String fileInfo = fileName + DELIMITER + createDate;
		
		os.println(SRT_RCVINF);
		os.println(fileInfo);
        
		// read the result
		try {
        	
            InputStream in = sock.getInputStream();

            DataInputStream clientData = new DataInputStream( in );
            
            result = clientData.readUTF();
            
            in.close();
            
            System.out.println("ReceiveInfo result = [" + result + "] received from Agent Server.");
        } 
        catch( IOException ex ) {
            Logger.getLogger("PaneraClient").log( Level.SEVERE, null, ex ) ;
        }
		
		sock.close();
		
		System.out.println("receiveFileInfo end.");
		
		return result;
	}

	
	public void sendFileInfo(String fileName, String encryptedFileName, String createDate ) throws IOException {
		
		System.out.println("sendFileInfo begin.");
		
		// establish connection to server
		try {
			sock = new Socket( agentIP, Integer.parseInt( agentPort ) );
		}
		catch(Exception e) {
			System.err.println("Can not connect to agent server, try again later.");
			System.exit(1);
		}
		
		os = new PrintStream( sock.getOutputStream() );
		
		String fileInfo = serverIP + DELIMITER + serverPort + DELIMITER + fileName + DELIMITER + encryptedFileName + DELIMITER + createDate;
		
		os.println(SRT_SAVEINF);
		os.println(fileInfo);
        
		// read the result
		try {
        	
            InputStream in = sock.getInputStream();

            DataInputStream clientData = new DataInputStream( in );
            
            String result = clientData.readUTF();
            
            in.close();

            System.out.println("SaveInfo result = [" + result + "] received from Agent Server.");
        } 
        catch( IOException ex ) {
            Logger.getLogger("PaneraClient").log( Level.SEVERE, null, ex ) ;
        }
		
		sock.close();
		
		System.out.println("sendFileInfo end.");
	}
	
	public void sendFile(String fileName) throws Exception {
		
		System.out.println("sendFile begin.");
		
		// establish connection to server
		try {
			sock = new Socket( serverIP, Integer.parseInt( serverPort ) );
		}
		catch(Exception e) {
			System.err.println("Can not connect to server, try again later.");
			System.exit(1);
		}
		
		os = new PrintStream( sock.getOutputStream() );
		os.println(SRT_SEND);
		
        try {
        	
        	// encrypt file name by SHA256
            int index = fileName.lastIndexOf("/");
            String name = fileName.substring(index + 1);
        	String encryptedFileName = encryptFileName( name );
        	
        	System.out.println("encrypted file name = " + name + "[" + encryptedFileName + "]" );
        	System.out.println(fileName);
        	
            File filePath = new File( fileName );
            byte[] buffers = new byte[(int) filePath.length()];
            
            InputStream fis = panera.class.getResourceAsStream(fileName);
            BufferedInputStream bis = new BufferedInputStream( fis );
            
            DataInputStream dis = new DataInputStream( bis );
            dis.readFully( buffers, 0, buffers.length );
            dis.close();
            
            OutputStream os = sock.getOutputStream();

            // Sending file name and file size to the server
            DataOutputStream dos = new DataOutputStream( os );
            
            dos.writeUTF( filePath.getName() );
            dos.writeLong( buffers.length );
            dos.write( buffers, 0, buffers.length );
            dos.flush();
            
            System.out.println("File " + fileName + " sent to Server.");
            
            // Save the file info to cache
            String createDate = new SimpleDateFormat("yyyyMMdd/").format(System.currentTimeMillis( ));
            saveCache( fileName, encryptedFileName, createDate );
            
        } 
        catch( Exception e ) {
            System.err.println("Error on sendFile " + e.getMessage() );
        }
        
        sock.close();
        
        System.out.println("sendFile end.");
    }

    public void receiveFile(String fileName) throws Exception {
    	
    	System.out.println("receiveFile begin");
    	
    	try {
    		sock = new Socket( serverIP, Integer.parseInt( serverPort ) );
		}
		catch( Exception e ) {
			System.err.println("Can not connect to server, try again later.");
			System.exit(1);
		}
		
		os = new PrintStream( sock.getOutputStream() );
		
		os.println(SRT_RECV);
		os.println( fileName );
    	
		System.out.println("receiveFile 1");
		
        try {
        	
            int bytesRead;
            
            InputStream in = sock.getInputStream();

            DataInputStream clientData = new DataInputStream( in );
            
            System.out.println("receiveFile 3");

            fileName = clientData.readUTF();
            OutputStream output = new FileOutputStream( fileName );
            
            long size = clientData.readLong();
            byte[] buffer = new byte[1024];
            
            while( size > 0 && ( bytesRead = clientData.read( buffer, 0, (int) Math.min( buffer.length, size ) ) ) != -1 ) {
                output.write( buffer, 0, bytesRead );
                size -= bytesRead;
            }
            
            System.out.println("receiveFile 4");

            output.close();
            in.close();

            System.out.println("File " + fileName + " received from Server.");
        } 
        catch( IOException ex ) {
            Logger.getLogger("PaneraClient").log( Level.SEVERE, null, ex );
        }
        
        sock.close();
        
        System.out.println("receiveFile end.");
    }
    
    public void askFileServers() throws Exception {
    	
    	System.out.println("askFileServers begin.");
    	
    	try {
    		sock = new Socket( agentIP, Integer.parseInt( agentPort ) );
		}
		catch( Exception e ) {
			System.err.println("Can not connect to server, try again later.");
			System.exit(1);
		}
		
    	String fileName = "fileserver.config";
    	System.out.println("askFileServers 1.");
    	
		os = new PrintStream( sock.getOutputStream() );
		
		os.println(SRT_SRVINF);
		os.println( fileName );
    	
		try {
        	
            int bytesRead;
            
            InputStream in = sock.getInputStream();

            DataInputStream clientData = new DataInputStream( in );
            
            System.out.println("askFileServers 2.");

            fileName = clientData.readUTF();
            OutputStream output = new FileOutputStream( fileName );
            
            long size = clientData.readLong();
            byte[] buffer = new byte[1024];
            
            System.out.println("askFileServers 3.");
            
            while( size > 0 && ( bytesRead = clientData.read( buffer, 0, (int) Math.min( buffer.length, size ) ) ) != -1 ) {
                output.write( buffer, 0, bytesRead );
                size -= bytesRead;
            }
            
            System.out.println("askFileServers 4.");

            output.close();
            in.close();

            System.out.println("File " + fileName + " received from Server.");
        } 
        catch( IOException ex ) {
            Logger.getLogger("PaneraClient").log( Level.SEVERE, null, ex ) ;
        }
        
        sock.close();
        
        // move the file to the client directory
        File file = new File( fileName );
        File fileToMove = new File( workdir + fileName );

        boolean isMoved = file .renameTo( fileToMove );
        if( isMoved )
        	setFileServers();
        
		System.out.println("askFileServers end.");
			
    }
    
    public int setFileServers() throws IOException {
		
		System.out.println("setFileServers begin.");
		
		Properties prop = new Properties();
		InputStream input = null;

		try {
			
			String strOS = System.getProperty("os.name").toLowerCase();
			
			String pconfig = "";
			
			if( isWindows(strOS) ) {
				pconfig = workdir + "fileserver.config";
			} 
			else {
				pconfig = workdir + "fileserver.config";
			}
			
			System.out.println( strOS + " : " + pconfig );
					
			input = new FileInputStream( pconfig );

			// load a properties file
			prop.load( input );

			// get the property value and print it out
			int fileServerCnt = Integer.parseInt( prop.getProperty("fileservercnt") );
						
			if( fileServerCnt > 0 ) {

				String[] fileServerIP   = new String[fileServerCnt];
				String[] fileServerPort = new String[fileServerCnt];
				
				for( int i = 0; i < fileServerCnt; i++ ) {
					fileServerIP[i] = prop.getProperty( "fileserverip" + (i + 1) );
					fileServerPort[i] = prop.getProperty( "fileserverport" + (i + 1) );
				}
				
				serverIP = fileServerIP[0];
				serverPort = fileServerPort[0];
				
				System.out.println("serverIP : " + serverIP );
				System.out.println("serverPort : " + serverPort );
			}

		} 
		catch( IOException ex ) {
			ex.printStackTrace();
		} 
		finally {
			if( input != null ) {
				try {
					input.close();
				} 
				catch( IOException e ) {
					e.printStackTrace();
				}
				
				return 0;
			}
			
		}
		
		System.out.println("setFileServer end.");
		return 1;
	}
    
} // class panera