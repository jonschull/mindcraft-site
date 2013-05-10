<?php
if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["msg"])){
  $message = $_POST["name"] . " is interested in Mindcraft. You can reach them at ". $_POST["email"] . "
  
  Here's what they had to say:". $_POST["msg"];
  mail('jon.schull@rit.edu', 'New Message | Learning Landscape', $message);
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Learning Landscape</title>
  <meta name="description" content="Learning Landscape developed by the students of Innovation and Invention in Spring 2013">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2"/>
  <link rel="stylesheet" href="http://kazooroo.net/knowledgecraftprojects/learninglandscape/style/style.css"/>
</head>
<body id="home">
<a href="#main" class="assistive-text">Skip to main content</a>
<div class="container">
  <header>
    <div class="wrapper">
      <div class="branding">
        <h1 title="Learning Landscape"><a href="#top">Learning Landscape</a></h1>
        <p>Better education through interactive technology</p>
      </div>      
      <nav>
        <ul class="nav">
          <li><a href="#intro" class="here">Home</a></li>
          <li><a href="#get_involved">Get Involved</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="http://kazooroo.net/knowledgecraftprojects/learninglandscape/resources">Resources</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section id="main">
    <!-- I | The Intro-->
    <!-- =================================== -->
    <section id="intro" class="buffer">
      <div class="content wrapper">
        <h2>A virtual world that encourages kids to explore</h2>
        <section class="with_sidebar">
          <article>
            <p>The goal of Learning Landscape is to create and develop an interactive multiplayer learning environment that will not only educate our users, but will also satisfy their entertainment needs.</p>
            <p>We've turned Khan Academy's knowledge map into a 3D landscape that users can explore and enjoy.</p>
            <p>To learn more about Learning Landscape, how it came into existence, and who made it happen just <a href="#about">click here</a>.</p>
            <blockquote>
              "Education is not preparation for life;<br>education is life itself"<br><small>- John Dewey</small>
            </blockquote>
          </article>
          <aside>
            <!-- "won't someone please think of the children?!" -->
            <div class="for_the_kids">
              <div>
                <p>Already know how to play Minecraft? Go ahead and jump right in!</p>
                <a href="http://kazooroo.net/knowledgecraftprojects/learninglandscape/play.html" id="play_game">Play the game!</a>
              </div>
              <div>
                <p>Click here if you've never played Minecraft before.</p>
                <a href="http://kazooroo.net/knowledgecraftprojects/learninglandscape/play.html" id="tutorial_mtn" title="Tutorial Mountain">Tutorial Mountain</a>
              </div>
            </div>
          </aside>          
        </section>
      </div>
    </section>      

    <!-- II | Get Involved -->
    <!-- =================================== -->
    <section id="get_involved" class="buffer">
      <div class="content wrapper">
        <section>
          <h2>Get Involved</h2>
          <article>
            <p>We are currently basing our "lessons" off of the <a href="https://www.khanacademy.org/">Khan Academy</a> knowledge map, but are always looking to accept new lessons.</p>
            <a href="http://kazooroo.net/knowledgecraftprojects/learninglandscape/resources/#teachers">Learn how to submit content</a>
            <ul class="inline">
              <li>
                <h3>Developers</h3>
                <p>Do you know how to code? Are you familiar with Java or C++?</p>
                <p><a href="http://kazooroo.net/knowledgecraftprojects/learninglandscape/resources/#developers">How to contribute to this project</a></p>
                <i class="icon-github icon-large"></i><a href="https://github.com/Sintheros/learninglandscape-codebase">Check out the Github repo</a>
              </li>
              <li>
                <h3>Teachers</h3>
                <p>Teachers all across the country have been experimenting with Learning Landscape in the class.</p>
                <a href="http://kazooroo.net/knowledgecraftprojects/learninglandscape/resources/#teachers">Learn how to use it in your class</a>
              </li>
              <li>
                <h3>Administrators</h3>
                <p>For strategic discussions contact <a href="#contact">jon.schull@rit.edu</a></p>
              </li>                
            </ul>
          </article>
          <h3><a href="http://kazooroo.net/knowledgecraftprojects/learninglandscape/resources/">Go to the Resources page.</a></h3>
        </section>
      </div>
    </section>

    <!-- III | About -->
    <!-- =================================== -->
    <section id="about" class="buffer">
      <div class="content wrapper">
        <section>
          <h2>About Learning Landscape</h2>
          <!-- stuff -->
          <article>
            <a href="http://kazooroo.net/knowledgecraftprojects/learninglandscape/images/screenshot.png" class="lightbox right"><img src="http://kazooroo.net/knowledgecraftprojects/learninglandscape/images/screenshot.png" alt="An image showing a Minecraft landscape with a Google Hangout window on top to show the end goal of the project" width="431" height="322"></a> 
            <p>Gamers can play by themselves or with groups of friends and get real-time coaching from tutors, mentors and peers, in-game and via video.</p>
            <p>We are developing an interactive multiplayer learning environment that entertains as well as educates. A 3D learning landscape marries the knowledge map and resources of Khan Academy to the runaway bestselling video game, Minecraft.</p>
            <p>Khan Academy knowledge map is a 3D landscape over which swarms of users can roam: learning, collaborating and playing.</p>
            <p>Users can</p>
            <ul>
              <li>explore and create rich and imaginative environments that teach and challenge</li>
              <li>educate themselves by solving exciting challenges that require learning</li>
              <li>navigate toward career paths on distant horizons traversing requisite curricula</li>
              <li>add knowledge and content to the world of Mindcraft</li>
            </ul>
          </article>          
        </section>
        <hr>
        <!-- IV | Class Info -->
        <section id="class">
          <p>This project was made by the Innovation &amp; Invention class of Spring 2013 at <abbr title="Rochester Institute of Technology">RIT</abbr> with Professor Jon Schull</p>
          <!-- class list (w/ role) -->
          <ul class="team">
            <li class="profile">
              <hgroup>
                <img src="http://nova.innovation.rit.edu/csi2/default/thumb/75/75/node.picFile.82b3cb0aa34da190.566563746f7246616365322e6a7067.jpg?square=True" alt="profile" width="50" height="50">
                <h4>Wilson Bell</h4>
                <h5><abbr title="New Media Interactive Development">New Media Development</abbr></h5>
              </hgroup>
              <h6>Role:</h6>
              <p>"Hills of History" level that allows users to explore sites of ancient cultures and societies</p>
            </li>
            <li class="profile">
              <hgroup>
                <img src="http://nova.innovation.rit.edu/csi2/default/thumb/75/75/node.picFile.acf09803e5505d2e.6d655f666163652e706e67.png?square=True" alt="profile" width="50" height="50">
                <h4>Jordan Byron</h4>
                <h5>Game Design</h5>
              </hgroup>
              <h6>Role:</h6>
              <p>Custom Denizens mod that looks at the Khan site to determine if a user has completed a course</p>
            </li>            
            <li class="profile">
              <hgroup>
                <img src="http://nova.innovation.rit.edu/csi2/default/thumb/75/75/node.picFile.a6739974d549be24.6d6544616e63652e6a7067.jpg?square=True" alt="profile" width="50" height="50">
                <h4>Brennan Cook</h4>
                <h5>Game Design</h5>
              </hgroup>
              <h6>Role:</h6>
              <p>Denizans scripting (YML), design documentation</p>
            </li>
            <li class="profile">
              <hgroup>
                <img src="http://nova.innovation.rit.edu/csi2/default/thumb/75/75/node.picFile.80423e5688b66def.50726f66696c655069632e6a7067.jpg?square=True" alt="profile" width="50" height="50">
                <h4>Alex Goldberger</h4>
                <h5>Game Design</h5>
              </hgroup>
              <h6>Role:</h6>
              <p>Minecraft server admin, Denizans scripting</p>
            </li>
            <li class="profile">
              <hgroup>
                <img src="http://nova.innovation.rit.edu/csi2/default/thumb/150/150/node.picFile.8b0f75140d3b85b0.70756265732e6a7067.jpg?square=True" alt="profile" width="50" height="50">
                <h4>Pubudu Gunasekara</h4>
                <h5>Game Design</h5>
              </hgroup>
              <h6>Role:</h6>
              <p>Denizan scripting</p>
            </li>            
            <li class="profile">
              <img src="http://nova.innovation.rit.edu/csi2/default/thumb/75/75/node.picFile.8897f3ea2a9fc227.3630303839315f343632373031383130383431355f3732343634393733325f6e2e6a7067.jpg?square=True" alt="profile" width="50" height="50">
              <hgroup>
                <h4>Ian Kane</h4>
                <h5>Game Design</h5>
              </hgroup>
              <h6>Role:</h6>
              <p>"Tutorial Mountain", Denizans Compilation Guide</p>
            </li>            
            <li class="profile">
              <img src="http://lorempixel.com/50/50/people" alt="profile" width="50" height="50">
              <hgroup>
                <h4>Praveen Ramaswamy</h4>
                <h5>Public Policy</h5>
              </hgroup>
              <h6>Role:</h6>
              <p> “Macro-Economics Mtn.” level where kids can test their economic skills</p>
            </li>
            <li class="profile">
              <img src="http://nova.innovation.rit.edu/csi2/default/thumb/75/75/node.picFile.a8df4f771e36972d.6162656c5f726f6e646f6e2e6a7067.jpg?square=True" alt="profile" width="50" height="50">
              <hgroup>
                <h4>Abel Rondon</h4>
                <h5><small>Communication Technology</small></h5>
              </hgroup>
              <h6>Role:</h6>
              <p>Stone mason of "Tutorial Mountain</p>
            </li>            
            <li class="profile">
              <img src="http://nova.innovation.rit.edu/csi2/default/thumb/75/75/node.picFile.a790307790fe5ae4.666163652e6a7067.jpg?square=True" alt="profile" width="50" height="50">
              <hgroup>
                <h4>Luis Rosario</h4>
                <h5>New Media Development</h5>
              </hgroup>
              <h6>Role:</h6>
              <p>Website design and development</p>
            </li>
            <li class="profile">
              <img src="http://nova.innovation.rit.edu/csi2/default/thumb/75/75/node.picFile.8e8ffb08b37b1dbf.676f742e6a7067.jpg?square=True" alt="profile" width="50" height="50">
              <hgroup>
                <h4>Ian Siczewicz</h4>
                <h5>Game Design</h5>
              </hgroup>
              <h6>Role:</h6>
              <p>Denizan scripting</p>
            </li>
            <li class="profile">
              <img src="http://nova.innovation.rit.edu/csi2/default/thumb/75/75/node.picFile.ba15c73b212d62fc.63686c6f652e6a7067.jpg?square=True" alt="profile" width="50" height="50">
              <hgroup>
                <h4>Chloe van Eerden</h4>
                <h5>Packaging Science</h5>
              </hgroup>
              <h6>Role:</h6>
              <p>Created test quizzes for "Biology Bluffs"</p>
            </li>            
            <li class="profile">
              <img src="http://nova.innovation.rit.edu/csi2/default/thumb/75/75/node.picFile.84e5c287adb7dd46.313332343433343731363130382e706e67.png?square=True" alt="profile" width="50" height="50">
              <hgroup>
                <h4>Keensley Venittelli</h4>
                <h5>Game Design</h5>
              </hgroup>
              <h6>Role:</h6>
              <p>Denizen scripting</p>
            </li>
            <li class="profile">
              <img src="http://nova.innovation.rit.edu/csi2/default/thumb/75/75/node.picFile.ab306228949190b2.70686f746f322e6a7067.jpg?square=True" alt="profile" width="50" height="50">
              <hgroup>
                <h4>Alex Taker</h4>
                <h5>New Media Development</h5>
              </hgroup>
              <h6>Role:</h6>
              <p>Linking Minecraft and Khan Academy to find out student progress</p>
            </li>
            <!-- not students -->
            <li class="profile">
              <img src="http://nova.innovation.rit.edu/csi2/default/thumb/75/75/node.picFile.8381ec3a3b1e5f67.747269666f7263652e6a7067.jpg?square=True" alt="profile" width="50" height="50">
              <hgroup>
                <h4>Melissa Zajicek</h4>
                <h5></h5>
              </hgroup>
              <h6>Role:</h6>
              <p>Prezi</p>
            </li>
            <li class="profile">
              <img src="http://nova.innovation.rit.edu/csi2/default/thumb/150/150/node.picFile.a7fe758beae2e729.6d6c73332d31332e6a7067.jpg?square=True" alt="profile" width="50" height="50">
              <hgroup>
                <h4>Mike Slade</h4>
                <h5></h5>
              </hgroup>
              <h6>Role:</h6>
              <p>Provided guidance and leadership on the project</p>
            </li>
            <li class="profile">
              <img src="http://nova.innovation.rit.edu/csi2/default/thumb/150/150/node.picFile.bc69b33ac5a326f2.32303130303832382d703265373936316b656e61643273776968716e327434756767742e6a7067.jpg?square=True" alt="profile" width="50" height="50">
              <hgroup>
                <h4>Jon Schull</h4>
                <h5>Professor</h5>
              </hgroup>
              <h6>Role:</h6>
              <p>Provided guidance and leadership on the project</p>
            </li>
          </ul>
          <!-- <p><em><small>Are you an <abbr title="Rochester Institute of Technology">RIT</abbr> student? Click here to <a href="#">learn more about the class</a>.</small></em></p>           -->
        </section>          
      </div>
    </section>

    <!-- V | Contact -->
    <!-- =================================== -->
    <section id="contact">
      <div class="wrapper">
        <h2>Contact</h2>
        <article>
          <dl>
            <dt><i class="icon-phone"></i>Phone</dt>
            <dd>+585.738.6696</dd>
            <dt><i class="icon-envelope"></i>Email</dt>
            <dd>jon.schull@rit.edu</dd>
            <dt><i class="icon-home"></i>Address</dt>
            <dd>Innovation Center<br>149 Lomb Memorial Drive<br>Rochester, New York</dd>
          </dl>
        </article>
        <aside>
          <p>Be sure to sign-up for our newsletter to recieve project updates! (We promise not to spam your email. We know what it's like to be bombarded with emails).</p>
          <form method="post">
            <ul class="inline form">
              <li>
                <dl>
                  <dt>Name</dt>
                  <dd><input type="text" placeholder=" Whatever you would like to be called" name="name" id="name"></dd>
                  <dt>Email</dt>
                  <dd><input type="text" placeholder=" ex. youremail@email.com" name="email" id="email"></dd>
                </dl>
                <input type="submit" value="Send"></input>          
              </li>
              <li>
                <p>Message <small><span class="optional">(optional)</span></small></p>
                <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
              </li>
            </ul>
          </form>
        </aside>
      </div>
    </section>
  </section>
  <!-- end main content section -->

  <footer>
    <!-- thing -->
    <div id="info">
      <div class="wrapper">
        <span>Learning Landscape is a part of the <a href="http://kazooroo.net/knowledgecraftprojects/">KnowledgeCraftProjects</a> being worked on at <abbr title="Rochester Institute of Technology">R.I.T.</abbr>
      </div>
    </div>
  </footer>
</div>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script src="http://kazooroo.net/knowledgecraftprojects/learninglandscape/js/jq_lightbox.js"></script>
<script>
$(function() {
  // lightbox setup
  $(".lightbox").lightbox({
    fitToScreen: true,
    imageClickClose: false
  });

  // nav functions
  // ===================================
  $('.nav a').click(function() {
    // 1. clear other class names on the <li>
    $('.nav a').each(function(index) {$(this).removeClass('here'); })
    // 2. add class name
    $(this).addClass('here');

    // 3. add a smooth transition
    // source: http://stackoverflow.com/questions/7717527/jquery-smooth-scrolling-when-clicking-an-anchor-link
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
  });
});
// end onready()
</script>
</body>
</html>