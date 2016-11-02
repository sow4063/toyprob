import java.io.IOException;
import java.text.SimpleDateFormat;

import com.divine.panera.panera;

public class paneracli
{
	
	public static void main(String args[]) throws IOException {
		
		try {
			
			panera pan = new panera();
			
			for( int i = 1; i <= 1; i++ ) {
				
				System.out.println("===================================================================");
				System.out.println( i + "th running begin." );
				System.out.println("===================================================================");
				
				// sending a file to the server.
				String fileName = "/Users/water4063/Documents/secure_sw/panera/test.txt";
				pan.sendFile( fileName );
				
				// fileName, encryptedFilename, date
				int index = fileName.lastIndexOf("/");
	            String name = fileName.substring(index + 1);
	        	String encryptedFileName = pan.encryptFileName( name );
	        	
	        	String createDate = new SimpleDateFormat("yyyyMMdd/").format(System.currentTimeMillis( ));
            	
	        	System.out.println("target file info = " + name + ", [" + encryptedFileName + "], date = [" + createDate + "]" );
	        	
	        	// Save the file info to database.
	            pan.sendFileInfo( name, encryptedFileName, createDate );
	            
	        	// check cache
	        	String searched = pan.checkCache( fileName, encryptedFileName, createDate );
	        	if( searched.length() > 0 ) {
	        		System.out.println("File info is in the cache = [" + name + "]");
	        	}
	        	else {
	        		System.out.println("Not Found the file info in the cache = [" + name + "]");
	        		
	        		// receiving a file from the server.
		            String fileInfo = pan.receiveFileInfo(name, createDate);
		            String[] arr;
					arr = fileInfo.split( panera.DELIMITER );
					
					String encFileName = arr[0];
					String fileServerIP = arr[1];
					String fileServerPort = arr[2];
					
					System.out.println("FileName = [" + name + "]");
		            System.out.println("encFileName = [" + encFileName + "]");
		            System.out.println("encFileName = [" + fileServerIP + "]");
		            System.out.println("encFileName = [" + fileServerPort + "]");
		            System.out.println("createDate  = [" + createDate + "]");
	        	}
	        	
	        	
	        	
				// receiving a file from the server.
	            //fileName = "test.txt";
	            //System.out.println("before receiveFile" + fileName );
	            //pan.receiveFile(fileName);
	            
	            System.out.println("===================================================================");
	            System.out.println( i + "th running end.");
	            System.out.println("===================================================================");
	          
			}
			
		}
		catch( Exception e ) {
			System.err.println("erro on client : " + e.getLocalizedMessage());
		}
	}
	
	
}