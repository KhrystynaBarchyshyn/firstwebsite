function replaceHeader() {
    var bodyCode = document.body.innerHTML;

    var headerCode = String.raw `<header>
    <div class="row">
            <div class="header_content">
                <a id="logo" href="index.html"><img src="images/logo.png" width="30" alt="List Picture"></a>

                <ul class="social">
                    <li>
                        <a href="https://facebook.com/profile.php?id=100011195025192&ref=bookmarks" target="_blank"><img src="images/facebook.png" width="30" alt="List Picture"></a>
                    </li>
                    <li>
                        <a href="https://github.com/KhrystynaBarchyshyn" target="_blank"><img src="images/github.png" width="30" alt="List Picture"></a>
                    </li>
                    <li>
                        <a href="#" target="_blank"><img src="images/linkedin.png" width="30" alt="List Picture"></a>
                    </li>
                </ul>

                <nav>
                    <ul>
                        <li><a href="index.html">home</a>
                        <li><a href="about.html">about</a></li>
                        <li><a href="professionalskills.html">professional skills</a></li>
                        <li><a href="contact.html">contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>`

    document.body.innerHTML = bodyCode.replace(/{{header}}/g, headerCode);

}

function replaceFooter() {
    var body_Code = document.body.innerHTML;
    var footerCode = String.raw
`<footer>
        <nav>
            <ul>
                <li><a href="index.html">home</a>
                <li><a href="about.html">about</a></li>
                <li><a href="professionalskills.html">professional skills</a></li>
                <li><a href="contact.html">contact</a></li>
            </ul>
            <p id="copyright"><small>2016 Khrystyna Barchyshyn</small></p>
        </nav>
   </footer>`
   document.body.innerHTML = body_Code.replace(/{{footer}}/g, footerCode);
}

$(document).ready(function() {
    replaceHeader();
    replaceFooter();
    $( "header" ).effect( "slide",  { direction: 'up'}, 600, function (){});
        
});