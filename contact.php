<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Contact Me</title>


<link href="styles/jcvanv_styles.css" rel="stylesheet" type="text/css" />


</head>

<body style="background:FFF none">

<div id="mainGallerySlide" style="height: 500px">
  <script type="text/javascript">
 var RecaptchaOptions = {
    theme : 'white'
 };
 </script>
  <form id="contact" name="BruceContact" method="post" action="contact_verify.php">
    
    
    <div class="contact_label">
      <p class="contactLabelText">  Name:  </p>
      <p class="contactLabelText">  E-mail:</p>
      <p class="contactLabelText">  Message:</p></div>
    
    
    
    <div class="contact_field">
      
      <input name="name" type="text" id="name" style="margin:0 0 15px 0" size="57" />
      
      <input name="email" type="text" id="email" style="margin:0 0 15px 0" size="57" />
      
      <textarea name="message" cols="57" rows="15" id="message" style="margin:0"></textarea>
      <p style="margin:0 0 10px 0">
        <?php
   require_once('recaptchalib.php');
  $publickey = "6Lem8cwSAAAAABeka6Mzwd-Ru_SPOfafnY9tWAAd"; // you got this from the signup page
  echo recaptcha_get_html($publickey);
  ?>
        </p>
      
      <input name="send" type="submit" value="Send" class="send_button"/>
      </div>
    
    </form>
</div>
 <div id="footers">
   <a href="contact.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('contact','','images/index/contact_btn-over.png',1)"><img src="images/index/contact_btn.png" alt="Contact" name="contact" width="99" height="27" border="0" id="contact" /></a>
   <a href="about.html" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('about','','images/index/about_me_btn-over.png',1)"><img src="images/index/about_me_btn.png" alt="About Me" name="about" width="122" height="27" border="0" id="about" /></a></div>
  </div>
<!-- end #container --></div>
</body>
</html>
