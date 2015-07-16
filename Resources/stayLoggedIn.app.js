
// this sets the background color of the master UIView (when there are no windows/tab groups on it)  
var tabGroup = Titanium.UI.createTabGroup();

var landing = Titanium.UI.createWindow({  
    navBarHidden:true,
    tabBarHidden:true,
    backgroundImage: 'images/background.png',
    url:'main_windows/landing.js'  
});  
 
var landingTab = Titanium.UI.createTab({
    window:landing  
});  



// This code is for main.js and is used after login 
var main = Titanium.UI.createWindow();
var launch = Titanium.UI.createWindow();
var retrieve = Titanium.UI.createWindow();


var mainTab = Titanium.UI.createTab({
	title:"ME",
	window:main
});
var launchTab = Titanium.UI.createTab({
	title:"Launch",
	window:launch
});
var retrieveTab = Titanium.UI.createTab({
	title:"Retrieve",
	window:retrieve
});

var windowFade = Titanium.UI.createAnimation({
        curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
        opacity:1,
        duration:3000
});



Ti.App.addEventListener('grantEntrance', function(event)  
{  
    main.title      	 = 'Rockets';
    main.url        	 = 'main_windows/main.js';
    main.name       	 = event.name;
    main.id         	 = event.id;
    main.username   	 = event.username;
    main.email      	 = event.email;
    mainTab.window  	 = main;
    main.barColor   	 = '#86c4cc';
    main.backgroundImage = 'images/page-bg.png';
    
    launch.title = 'Rockets';
    launch.url        = 'main_windows/launch.js';
  	launch.backgroundImage = 'images/page-bg.png';
    launch.barColor   = '#86c4cc';
  	
  	retrieve.title = 'Rockets';
  	retrieve.url        = 'main_windows/retrieve.js';
  	retrieve.backgroundImage = 'images/page-bg.png';
    retrieve.barColor   = '#86c4cc';
    
  	tabGroup.addTab(launchTab);
  	tabGroup.addTab(retrieveTab);
    tabGroup.addTab(mainTab);
    
    tabGroup.removeTab(landingTab);
});

var storedId = Titanium.App.Properties.getString("id");
var storedUsername = Titanium.App.Properties.getString("username");
var storedName = Titanium.App.Properties.getString("name");
var storedEmail = Titanium.App.Properties.getString("email");
var storedPassword = Titanium.App.Properties.getString("password");
var storedLogInStatus = Titanium.App.Properties.getString("loggedIn");

if (storedLogInStatus == 'no'){
	alert('loggedout');
}

if (storedLogInStatus == 'no') { 
    tabGroup.addTab(landingTab);  
	tabGroup.open();
} else {
 	Ti.App.fireEvent('grantEntrance', { 
        	id:storedId,
        	username:storedUsername,
        	name:storedName,
        	email:storedEmail,
        	password:storedPassword
        });
        tabGroup.open(windowFade);
		
}



Ti.App.addEventListener('logoutNow', function(event){
	Ti.App.Properties.setString('loggedIn', {
		loggedIn:"no"
	});
	tabGroup.addTab(landingTab);  
	tabGroup.open();
	
	tabGroup.removeTab(mainTab);
	tabGroup.removeTab(launchTab);
	tabGroup.removeTab(retrieveTab);
});

