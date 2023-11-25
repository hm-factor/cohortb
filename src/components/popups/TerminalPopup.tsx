import React, { useState } from "react";

interface terminalPopupProps {
  isTerminal: Boolean;
  setIsTerminal: Function;
}

export default function TerminalPopup({
  isTerminal,
  setIsTerminal,
}: terminalPopupProps) {
  function closeTerminal() {
    setIsTerminal(false);
  }

  function locateElement(title: string): void {
    let curr = document.getElementById(title);
    if (curr) {
      curr.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const songs = ["traffic", "dogbite", "purse", "rust", "orca"];

  const [audio] = useState(new Audio("/songs/snafu_short.mp3"));
  function hoverPlay() {
    console.log("snafu");
    audio.play();
  }
  function stopPlay() {
    audio.pause();
    audio.currentTime = 0;
  }

  return (
    <div className={`terminal-popup ${isTerminal ? "" : "off"}`}>
      <div className="terminal-nav">
        <button className="terminal-close" onClick={closeTerminal}></button>
      </div>

      <div className="terminal-content">
        <div className="terminal-tags">
          <div className="terminal-tag about">
            <h2 className="about-bio">about</h2>
          </div>
          <div className="terminal-about" id="terminal-about">
            Formed in January 2020, Cohort B is an experimental-punk outfit born
            out of Queens, New York. While members Hunter Factor, Jhonny Núñez,
            and Don Pardo all share a similar, yet eclectic taste of musical
            influences, their sound is reminiscent of the twisted rhythms of
            80's no-wave mixed with modern, hardcore aggression, by way of
            prog-rock style songwriting execution. The goal is to corral their
            listeners along in the process, leaving them asking "what the
            fuck?..."
          </div>
          <div className="terminal-tag lyrics-tags">
            <h2>lyrics</h2>
            <h3 className="project-title">1001 LUKEWARM USA</h3>
            {songs.map((song) => {
              return (
                <div className="song-title" onClick={() => locateElement(song)}>
                  {song}
                </div>
              );
            })}
            <h3 className="project-title redacted">domeshitz</h3>
            <div className="song-title redacted">snafu</div>
            <div className="song-title redacted">yee yee</div>
            <div className="song-title redacted">hubble</div>
            <div className="song-title redacted">gaze</div>
          </div>
        </div>

        <div className="lyrics" id="traffic">
          Has it kicked in?
          <div className="unused-lyrics">
            All of his tendon All of his skin With matters so urgent Have you
            seen where his face went? Oh im aware Yes Ive been aware This
            movement to the next Has gotten me in a bind with death in its
            playground But its so clear to me now
          </div>
          a man sinks into his seat oh how good he couldve had it if he just
          hadnt drowned his frustrations in a sea of red lights breeding
          frustration anew "what am i doing?" "where am i going?" And he says to
          himself and Ive been known to use and Ive been known to use This
          hammer is my sentence these cold repeats so frequent Confined to a
          room With nothing but his secrets Am I using this term right am I
          losing my edge Am I running in circles trying to find an end Have I
          gotten my fill? Have I seen it all Have I seen enough?
        </div>

        <div className="lyrics" id="dogbite">
          Aint no one wholl let you know when youre hanging loose But theyll
          tell you that its for a cause And when your efforts dont cut it You
          failed your teachers and now youre saying “I cant make it anywhere” By
          asking anyone So its only right if I could take a bigger slice But
          just so you know Its made to entice Its by design And if youre looking
          for a free throw Youve got it made Now youre getting paid And all for
          what? Making shit that you thought wed need This mommas got mouths to
          feed This architectures giving me anxiety My entire life I was
          relieved Of the need to reach for the stars So I became the one Whose
          job it was to clean the dust From those who scored from daddys trust I
          said too much but its okay Privileged to work for you any day I hate
          the sound of chains that bind So I taught myself to wrap that shit
          round my teeth and bite back Hey, could you be a little clearer why
          cant you let us get ahead do you fear us? You call it reparations I
          call it empty gestures Now its not enough Now its not enough Whyd you
          give up on me Why would you give me up Whyd you give up on me Why wont
          you give me —
        </div>
        <div className="lyrics" id="purse">
          If i could be just a bit stronger, would I even be an option? if i
          could grow an inch or two, would i still be under your thumb? Strange
          that you would be the kind to share this out (if i dont who will) I
          tried to please you, won have won hear it Funny how it seems we keep
          on going thru the same shit. Aint it strange? He bares a hand at no
          expense reject your offer, wishes you the best No clue where I come
          from, so give it a guess “Its a lot to process”, so process this:
          Theres nothing more personal than a purse thats been emptied out on
          the pavement. Still too much to process, well process this! Well Ill
          tell you what I think just dont take it to heart if a succubus stood
          next you I couldnt tell you apart Heaving and shaking cold sweat in
          the night I worry if Im coming off a little too nice Yeah I worry if
          Im coming off A little too nice Yeah Ill sure be the one to catch the
          words drooling out saying what i said but youre not saying much the
          truth in camo as digestible lies so ill dig it out and blow dirt in
          your eyes your dead in the eyes dead in the eyes dead in the eyes
        </div>

        <div className="lyrics rust" id="rust">
          are you someone that looks to be understood? automatic speech giving
          me all i need to know he left his iron by the window Watch that fuckin
          grin the only thing i know you wont cover up words have you
          bastardized the streets were asked and your name was called I keep one
          hand on the mic only sense of control your pockets full only handing
          us back these clouds of rust looking back i couldnt see a better face
          to trust once i had a calling once i heard the whispers once i came
          across this shining piece could you imagine if your first time would
          end up being your last time make it make sense this passing moment
          immortalized in the line between macabre and reality one in the same
          you come to the point where you wake up before you say good night if
          you thought this was a game, guess whos being played you get so
          emotional about going through the motions its so easy just forget you
          had a choice in the matter and youll be fine my dad, he gave up on
          this city life not a care not a wince no sleep in his eyes walk around
          in his boots Im stepping on pebbles and mud if i could be frank no one
          knows what this man was like
        </div>
        <div className="lyrics" id="orca">
          shes got his hand pressed against his breast connection; a subtle form
          of arrest at least thats the impression that he gets its his world and
          this is how he chooses to cope with sex liberty from ashin the skin
          maybe Id have more to say if I gnashed my teeth in a good book or try
          a long walk on the town named after the crown all the spoils that
          surround pays to be alert course its nothing but a blur casualties
          forgotten as soon as they occur maybe Id come around after being
          graced with this gift maybe Id be more enthused if I wasnt over over
          this shit wait it's coming together now just any minute now just any
          minute now my jaw jutting out of sheer tension a fresh take on a
          festering wound i feel i got a lump the size of pumice stone down my
          throat smoothing out these edges just to have a cleaner approach
          running out of teeth to collect from the limestone tiles so i zoomed
          to catch nearest coat its not in my best interest to pack on any more
          pounds i suppose theres more than 10 ways to wear yourself out falling
          bailing dont berate me at my pace not your decision trust ill make you
          over ill try to console ya i adore ya falling bailing dont berate me
          concentrate on whats your statement trust ill make you over ill try to
          console ya i adore ya
        </div>
        <div className="lyrics lyrics-redacted" id="snafu">
          you know he wanted smoke he wanted my blood i gave in to his
          schievenous eyes Rolled back punches how soft was that blow? “keep it
          open” my guard or my options? ive looked him up made up for lost time
          a rude pass at what coulda been a good fuck by the time that youd
          claim your word was your bond ive given up just splaining my thoughts
          “nice kid, he was uh he had a softness that uh you couldnt resist
          beside him is a smile hes kept for me id like to be like him OH” ive
          seen the way you talk to strangers when you want something from em so
          talk to me nice my cups full, so i keep filling it trust that my fall
          is my own doing my cups full, so i keep filling it trust that my fall
          is all my own doing i wanted more than i would admit i wont expect you
          to read into this youll patiently await a response this situations
          normally all fucked this situations normally all fucked this
          situations normally all fucked up
        </div>
        <div className="lyrics lyrics-redacted" id="yee">
          i mind my peace kiss my dogs trust my teeth flies comb the air i love
          this job dont touch my hair theres no life cities a bust trip out on
          mass exodus are you the change that you see? i hate a bitch named me
          dragging your knuckles on your tar spackled jungle its an everlasting
          exposé my faults wont cease to expose me walked out on his answers my
          thoughts remain on his lack of convictions much to my surprise i gave
          two decisions he chose to say “i cant deny that Ive been really lost
          these days without her” i mind my peace kiss my dogs trust my teeth
          flies comb the air i love this job dont touch my hair theres no life
          cities a bust trip out on mass exodus are you the change that you see?
          i hate a bitch named me
        </div>

        <div className="break"></div>

        <div
          onMouseOver={hoverPlay}
          onMouseLeave={stopPlay}
          id="what"
          className="what"
        >
          ...what?
        </div>
      </div>
    </div>
  );
}
