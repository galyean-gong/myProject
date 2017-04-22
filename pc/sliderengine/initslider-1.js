jQuery(document).ready(function(){

    var scripts = document.getElementsByTagName("script");

    var jsFolder = "";

    for (var i= 0; i< scripts.length; i++)

    {

        if( scripts[i].src && scripts[i].src.match(/initslider-1\.js/i))

            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);

    }

    jQuery("#amazingslider-1").amazingslider({

        sliderid:1,

        jsfolder:jsFolder,

        width:765,

        height:300,

        skinsfoldername:"",

        loadimageondemand:false,

        videohidecontrols:false,

        donotresize:false,

        enabletouchswipe:true,

        fullscreen:false,

        autoplayvideo:false,

        addmargin:true,

        transitiononfirstslide:false,

        forceflash:false,

        isresponsive:true,

        forceflashonie11:true,

        forceflashonie10:true,

        pauseonmouseover:false,

        playvideoonclickthumb:true,

        slideinterval:5000,

        fullwidth:false,

        randomplay:false,

        scalemode:"fill",

        loop:0,

        autoplay:true,

        navplayvideoimage:"play-32-32-0.png",

        navpreviewheight:60,

        timerheight:2,

        descriptioncssresponsive:"font-size:12px;",

        shownumbering:false,

        skin:"Stylish",

        addgooglefonts:true,

        navshowplaypause:true,

        navshowplayvideo:false,

        navshowplaypausestandalonemarginx:8,

        navshowplaypausestandalonemarginy:8,

        navbuttonradius:2,

        navthumbnavigationarrowimageheight:32,

        navmarginy:16,

        lightboxshownavigation:false,

        showshadow:false,

        navfeaturedarrowimagewidth:16,

        navpreviewwidth:120,

        googlefonts:"Inder",

        navborderhighlightcolor:"",

        navcolor:"#333333",

        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",

        lightboxthumbwidth:80,

        navthumbnavigationarrowimagewidth:32,

        navthumbtitlehovercss:"text-decoration:underline;",

        navthumbmediumheight:64,

        texteffectresponsivesize:600,

        arrowwidth:32,

        texteffecteasing:"easeOutCubic",

        texteffect:"slide",

        lightboxthumbheight:60,

        navspacing:4,

        navarrowimage:"navarrows-20-20-1.png",

        bordercolor:"#ffffff",

        ribbonimage:"ribbon_topleft-0.png",

        navwidth:20,

        navheight:20,

        arrowimage:"arrows-32-32-0.png",

        timeropacity:0.6,

        arrowhideonmouseleave:1000,

        navthumbnavigationarrowimage:"carouselarrows-32-32-0.png",

        navshowplaypausestandalone:false,

        texteffect1:"slide",

        navpreviewbordercolor:"#ffffff",

        texteffect2:"slide",

        customcss:"",

        ribbonposition:"topleft",

        navthumbdescriptioncss:"display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",

        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",

        arrowstyle:"none",

        navthumbmediumsize:800,

        navthumbtitleheight:20,

        textpositionmargintop:24,

        buttoncssresponsive:"",

        navswitchonmouseover:false,

        playvideoimage:"playvideo-64-64-0.png",

        arrowtop:50,

        textstyle:"dynamic",

        playvideoimageheight:64,

        navfonthighlightcolor:"#ffffff",

        showbackgroundimage:false,

        navpreviewborder:4,

        navshowplaypausestandaloneheight:28,

        navdirection:"horizontal",

        navbuttonshowbgimage:false,

        navbuttonbgimage:"navbuttonbgimage-28-28-0.png",

        textbgcss:"display:none;",

        textpositiondynamic:"bottomleft",

        playvideoimagewidth:64,

        buttoncss:"display:block; position:relative; margin-top:10px;",

        navborder:4,

        navshowpreviewontouch:false,

        bottomshadowimagewidth:110,

        showtimer:true,

        navradius:2,

        navmultirows:false,

        navshowpreview:false,

        navpreviewarrowheight:8,

        navmarginx:16,

        navfeaturedarrowimage:"featuredarrow-16-8-0.png",

        navthumbsmallsize:480,

        showribbon:false,

        navstyle:"numbering",

        textpositionmarginleft:24,

        // descriptioncss:"display:block; position:relative; font:14px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#e04000;  background-color:#fff; margin-top:10px; padding:10px; ",

        navplaypauseimage:"navplaypause-20-20-1.png",

        backgroundimagetop:-10,

        timercolor:"#ffffff",

        numberingformat:"%NUM/%TOTAL ",

        navthumbmediumwidth:64,

        navfontsize:12,

        navhighlightcolor:"#ff4629",

        texteffectdelay1:1000,

        navimage:"bullet-24-24-0.png",

        texteffectdelay2:1500,

        texteffectduration1:800,

        navshowplaypausestandaloneautohide:false,

        texteffectduration2:800,

        navbuttoncolor:"#333333",

        navshowarrow:true,

        texteffectslidedirection:"bottom",

        navshowfeaturedarrow:false,

        lightboxbarheight:64,

        // titlecss:"display:table; position:relative; font:16px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#fff; white-space:nowrap; background-color:#e04000; padding:10px;",

        ribbonimagey:0,

        ribbonimagex:0,

        navthumbsmallheight:48,

        texteffectslidedistance1:10,

        texteffectslidedistance2:10,

        navrowspacing:8,

        navshowplaypausestandaloneposition:"bottomright",

        shadowsize:5,

        lightboxthumbtopmargin:12,

        titlecssresponsive:"font-size:12px;",

        navshowplaypausestandalonewidth:28,

        navthumbresponsive:false,

        navfeaturedarrowimageheight:8,

        navopacity:0.8,

        textpositionmarginright:24,

        backgroundimagewidth:120,

        textautohide:true,

        navthumbtitlewidth:120,

        navpreviewposition:"top",

        texteffectseparate:true,

        arrowheight:32,

        shadowcolor:"#aaaaaa",

        arrowmargin:8,

        texteffectduration:600,

        bottomshadowimage:"bottomshadow-110-95-0.png",

        border:0,

        lightboxshowdescription:false,

        timerposition:"bottom",

        navfontcolor:"#ffffff",

        navthumbnavigationstyle:"arrow",

        borderradius:0,

        navbuttonhighlightcolor:"#ff4629",

        textpositionstatic:"bottom",

        texteffecteasing2:"easeOutCubic",

        navthumbstyle:"imageonly",

        texteffecteasing1:"easeOutCubic",

        textcss:"display:block; padding:8px 16px; text-align:left;",

        navthumbsmallwidth:48,

        navbordercolor:"#ffffff",

        navpreviewarrowimage:"previewarrow-16-8-0.png",

        navthumbtitlecss:"display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",

        showbottomshadow:true,

        texteffectslidedistance:10,

        texteffectdelay:800,

        textpositionmarginstatic:0,

        backgroundimage:"",

        navposition:"topright",

        texteffectslidedirection1:"bottom",

        navpreviewarrowwidth:16,

        textformat:"Red box",

        texteffectslidedirection2:"bottom",

        bottomshadowimagetop:95,

        texteffectresponsive:true,

        navshowbuttons:true,

        lightboxthumbbottommargin:8,

        textpositionmarginbottom:24,

        lightboxshowtitle:true,

        slide: {

            duration:1000,

            easing:"easeOutCubic",

            checked:true,

            effectdirection:0

        },

        transition:"slide",

        scalemode:"fill",

        isfullscreen:false,

        textformat: {



        }

    });

});