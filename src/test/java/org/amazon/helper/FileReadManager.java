package org.amazon.helper;



public class FileReadManager {
	
	public static FileReadManager fr = new FileReadManager();

	public static ConfigReader cr;
	
	public ConfigReader getConfigReader() throws Throwable {
		if (cr==null) {
			cr = new ConfigReader();
		}
		return cr;
	}
	
	public static FileReadManager getInstance() {
		return fr;
	}
	
	private FileReadManager() {
		
	}
}



