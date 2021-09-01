// change css stylesheet for different themes
function change_theme(theme){

    var theme_css_sheet = document.getElementById("theme-sheet");
    // var theme_icon = document.getElementById(theme);
    const light_theme = "css/default/default_light_theme.css";
    const dark_theme = "css/dark_themes/default_dark/default_dark.css";
    const dim_theme = "css/dark_themes/dim_dark/dim_dark.css";
    const dark_red_theme = "css/dark_themes/red_dark/red_dark.css";
    const light_green_theme = "css/green_light_theme/theme.css"
    

    if (theme === 'light'){
        theme_css_sheet.href = light_theme;
    } else if (theme === 'dark'){
        theme_css_sheet.href = dark_theme;
    } else if (theme === 'dim'){
        theme_css_sheet.href = dim_theme;
    } else if (theme === 'red'){
        theme_css_sheet.href = dark_red_theme;
    } else if (theme === 'light-green'){
        theme_css_sheet.href = light_green_theme;
    };
    
};


// copy mailID
function copy_mail(){
    const mail = "aabhaskrjha@gmail.com";
    navigator.clipboard.writeText(mail);

    var copy_btn = document.getElementById('copy_mail_btn');
    copy_btn.innerText = "Copied";
};