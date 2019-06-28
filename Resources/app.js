// this sets the background color of the master UIView (when there are no windows/tab groups on it)  
Ti.UI.setBackgroundColor('#00b4ff');
var path = Titanium.Filesystem.resourcesDirectory + 
   Titanium.Filesystem.separator;

var storedId = Titanium.App.Properties.getString("id");
var storedEmail = Titanium.App.Properties.getString("email");
var storedFirstName = Titanium.App.Properties.getString("first_name");
var storedLastName = Titanium.App.Properties.getString("last_name");
var storedUsername = Titanium.App.Properties.getString("username");
var storedPassword = Titanium.App.Properties.getString("password");
var storedLogInStatus = Titanium.App.Properties.getString("loggedIn");
//Delete
//asdfa dfa adsfasd fasdfasdfasdfadsfa
//End Delete
Ti.App.addEventListener('grantEntrance', function(event)  
{  
	var storedFirstName = Titanium.App.Properties.getString("first_name");
	
	var tabGroup = Titanium.UI.createTabGroup({
		width: Ti.UI.FILL,
    	height: Ti.UI.FILL,
    	tabsBackgroundColor: '#f9f6f7'
	});
	// This code is for main.js and is used after login 
	var main = Titanium.UI.createWindow({
		width: Ti.UI.FILL,
        height: Ti.UI.FILL
	});
	var launch = Titanium.UI.createWindow({
		width: Ti.UI.FILL,
        height: Ti.UI.FILL
	});
	var retrieve = Titanium.UI.createWindow({
		width: Ti.UI.FILL,
        height: Ti.UI.FILL
	});
	
	var launchTab = Titanium.UI.createTab({
		title:"Launch",
		icon:'images/tabs/tab-launch.png',
		window:launch
	});
	var retrieveTab = Titanium.UI.createTab({
		title:"Retrieve",
		icon:'images/tabs/tab-retrieve.png',
		window:retrieve
	});
	var mainTab = Titanium.UI.createTab({
		title:storedFirstName,
		icon:'images/tabs/tab-profile.png',
		window:main
	});

	tabGroup.removeTab(landingTab);
	
	launch.title = 'Rockets';
    launch.url        = 'main_windows/launch/launch-home.js';
  	launch.backgroundColor = '#fff';
    launch.barColor   = '#00b4ff';
  	
  	retrieve.title = 'Rockets';
  	retrieve.url        = 'main_windows/retrieve/retrieve.js';
  	retrieve.backgroundColor = '#fff';
    retrieve.barColor   = '#00b4ff';
    
    main.title      	 = 'Rockets';
    main.url        	 = 'main_windows/profile/main.js';
    main.barColor   	 = '#00b4ff';
    main.backgroundColor = '#fff';
    
    tabGroup.addTab(launchTab);
    tabGroup.addTab(retrieveTab);
    tabGroup.addTab(mainTab);
    tabGroup.open();
});

if (storedLogInStatus == 'no' | storedLogInStatus == null) { 
	var tabGroup = Titanium.UI.createTabGroup();
	var landing = Titanium.UI.createWindow({  
	    navBarHidden:true,
	    tabBarHidden:true,
	    backgroundColor: '#00b4ff',
	    url:'main_windows/landing.js'
	});  
	var landingTab = Titanium.UI.createTab({
	    window:landing  
	});  
	tabGroup.addTab(landingTab);
	tabGroup.open();

} else {
 	Ti.App.fireEvent('grantEntrance');
}

Ti.App.addEventListener('logoutNow', function(event){
	
	Ti.App.Properties.setString('loggedIn', "no");
	
	var tabGroup = Titanium.UI.createTabGroup();
	var landing = Titanium.UI.createWindow({  
	    navBarHidden:true,
	    tabBarHidden:true,
	    backgroundColor: '#00b4ff',
	    url:'main_windows/landing.js'
	});  
	var landingTab = Titanium.UI.createTab({
	    window:landing  
	});  
	tabGroup.addTab(landingTab);
	tabGroup.open(); 
});

