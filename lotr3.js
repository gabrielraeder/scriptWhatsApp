async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
THE LORD OF THE RINGS: THE RETURN OF THE KING

BLACK SCREEN . . .

SUPER:                New Line Cinema Presents

SUPER:               A WingNut Films Production

BLACK SCREEN:

EXT. RIVER ANDUIN - DAY

ANGLE ON: SMEAGOL and his cousin, DEAGOL, sit in a SMALL
CORACLE, their FISHING LINES draped over the side . . . SUNSHINE
glinting off the surface of the water.

An idyllic image.

SUDDENLY . . . DEAGOL's FISHING ROD BENDS under the weight of a
LARGE FISH.

                        DEAGOL
                 (excited)
            Smeagol, I've got one!
                 (he laughs)
            I've got a fish, Smeagol!

                       SMEAGOL
                 (excitedly)
            Go on, pull it in.

DEAGOL pulls on his ROD, but is HAULED OVERBOARD and
disappears underwater with a SPLASH!

ANGLE ON: SMEAGOL leaning over the BOAT . . . CONCERNED.

                       SMEAGOL (cont'd)
                 (worried)
            Deagol!

EXT. UNDERWATER, RIVER ANDUIN - DAY

ANGLE ON: DEAGOL is towed to the RIVER BED by a LARGE FISH
. . . he suddenly lets go of the line . . . eyes fixed on a
SHINING GOLD RING, lying in 'the SILT.

                                     Final Revision - October, 2003 2



EXT. RIVER ANDUIN, GLADDEN FIELDS - DAY

CLOSE ON: DEAGOL climbs out of the WATER, onto the RIVER
BANK.

CLOSE ON: the RING   revealed in DEAGOL'S PALM . . .

ANGLE ON: SMEAGOL peers over his shoulder . . . the GOLD
reflects in SMEAGOL'S EYES!

ON SOUNDTRACK: The HUM of the RING growing LOUDER . . .

                     SMEAGOL
           Give us that, Deagol, my love!

DEAGOL turns to look at him, a smirk on his face.

                      DEAGOL
           Why?

CLOSE ON: SMEAGOL moves towards DEAGOL . . .

                     SMEAGOL
           Because its my birthday, and I wants it.

ANGLE ON: SMEAGOL jumps on DEAGOL . . . STRANGLING HIM! SMEAGOL
rips the GLITTERING RING from DEAGOL'S LIMP HAND.

                      SMEAGOL (cont'd)
           My precious!

CLOSE ON: SMEAGOL slips the RING onto his FINGER and DISAPPEARS.

                                                       DISSOLVE TO:

INT. MISTY MOUNTAINS CAVES - DAY

IMAGES: SMEAGOL descending into madness. His body TWISTS and
DISTORTS . . . he becomes a CREEPY, SHRIVELLED wretch . . . finally
crawling into a DARK CAVE beneath the MISTY MOUNTAINS.

                     SMEAGOL V/0
           They cursed us. Murderer. Murderer they
           called us. They cursed us and drove us
           away.
                      (M�RE)                            (CONTINUED)

                                      Final Revision - October, 2003 3.
CONTINUED:
                        SMEAGOL V/0 (cont'd)
             And we wept, Precious, we wept to be so
             alone. And we forgot the taste of bread,
             the sound of trees, the softness of the
             wind . . . We even forgot our own name.
                  (in a choking cough)
             Gollum! Gollum!

ANGLE ON: GOLLUM in the CAVE staring at the RING in his hand.

                        GOLLUM
             It's mine! My own. It came to me.

                        SMEAGOL
                  (ecstatic)
             My Precious.

                                                        DISSOLVE TO:

EXT. CULVERT, VALE OF MORGUL - DAWN

ANGLE ON: A GRIM LANDSCAPE, covered in THORN BUSHES and the
scars of RECENT FIRES. The DARK MORGUL VALLEY disappears up
towards the MOUNTAINS.

SETTLE ON: FRODO and SAM in a FILTHY CULVERT.
SAM twitches in a RESTLESS SLEEP. But FRODO is awake . . . His
hand trails down to the CHAIN around his NECK ...

A SUDDEN HISS! FRODO quickly hides the RING as GOLLUM peers
at them with GLEAMING EYES.

                        GOLLUM
             Wake up! Wake up! Wake up, sleepies! We
             must go, yes, we must go at once!

SAM STIRS, looks at FRODO . . .

                        SAM
             Haven't you had any sleep, Mr Frodo?

FRODO shakes his HEAD.

                        SAM (cont'd)
             I've gone and had too much!


                                                        (CONTINUED)

                                        Final Revision - October, 2003 4.
CONTINUED:


SAM looks at the dead, BROWN TWILIGHT, below the LOWERING
CLOUD.

                        SAM (cont'd)
             It must be getting late.

                        FRODO
             No . . . no it isn't. It isn't midday yet.
             The days are growing darker.

The GROUND suddenly QUIVERS, as a ROLLING, RUMBLING NOISE
ECHOES down the VALLEY.

                        GOLLUM
             Come on, must go, no time ...

                        SAM
             Not before Mr Frodo's had something to eat.

                        GOLLUM
             . . . no time to lose, silly.

SAM shoots GOLLUM a HOSTILE LOOK and turns back to rummage in
his KNAPSACK. He holds up a piece of dried LEMBAS BREAD to
FRODO.

                        SAM
             Here.

                        FRODO
             What about you?

                        SAM
                  (lying badly)
             I'm not hungry - leastways, not for lembas
             bread.

                        FRODO
             Sam.

                        SAM
                  (confessing)
             Alright. We don't have that much left.
                         (MORE)


                                                          (CONTINUED)

                                     Final Revision - October, 2003 5.
CONTINUED: ( 2 )
                      SAM (cont'd)
            We have to be careful or we're going to run
            out. You go ahead and eat that, Mr Frodo.
            I've rationed it. There should be enough.

FRODO looksa t SAM questioningly.

                        FRODO
            For what?

                       SAM
            The journey home.

FRODO says nothing.                                            .

EXT. CULVERT, VALE OF MORGUL - DAY

WIDE: FRODO and SAM follow GOLLUM as he leads them on the
wining, torturous path ... clambering through BRACKEN and
over JAGGED ROCKS.

                       GOLLUM
            Come, Hobbitses. Very close now. Very close
            to Mordor! No safe places here. Hurry!
            Shhh.

EXT. THE FOREST OF ISENGARD. DAY

GANDALF leads ARAGORN, LEGOLAS, THEODEN and GIMLI through
dark woodland . . .

The MOVING FOREST of FANGORN ...opens before them . . .
creating an AVENUE of TREES, which allows them access along
the old ISENGARD ROAD. A THICK, HUMID MIST fills the forest.

SUPER:             The Return of the King

ANGLE ON: The FOEST SEPARATES ahead, REVEALING: the RUINS of
ISENGARD.

EXT. ISENGARED GATE - DAY

WIDE ON: All about, the GREAT STONE WALL is cracked and
splintered into countless jagged shards.




                                                     (CONTINUED)

                                          Final Revision - October, 2003 6.
CONTINUED:


Far off, half veiled int he swirling STEAM, the TOWER of
ORTHANC stands ... Unbroken by the storm. Pale waters lap
about its feet.

ANGLE ON: TWO SMALL HOBBITS are sitting on the SMASHED WALL
. . . MERRY and PIPPIN! SPREAD before them is a feast of
BREADS, MEATS and WINE. They PUFF on long pipes as they lie
back in the SUN.

                       PIPPIN
             I feel like I ' m back at the Green Dragon,
             after a hard days work.

                       MERRY
             Only, you've never done a hard days work.

MERRY cuts PIPPIN off before he can respond in kind.

                       MERRY (cont'd)
             Welcome, my Lords, to Isengard.

                        GANDALF

ANGLE ON: GANDALF, ARAGORN, LEGOLAS and GIMLI stare at the
SIGHT before them . . .

                       GIMLI
             You young rascals! A merry hunt you've led
             us on, and now we find you feasting and
             smoking.

                        PIPPIN
                  (mouth full)
             We are sitting on a field of victory,
             enjoying a few well-earned comforts.
             The salted pork is particularly good.

                        GIMLI
                  (suddenly interested)
             Salted pork?

                        GANDALF
                  (shaking his head)
             Hobbits!


                                                         (CONTINUED)

                                         Final Revision - October, 2003 7.
CONTINUED: (2)


                     MERRY
           We're under orders from Treebeard, who's
           taken over management of Isengard.

WIDE: GANDALF leads the company through the flotsam and
jetsam which floats upon the muddied waters surrounding the
TOWER ... TREEBEARD, the GIANT ENT, strides towards them,
ALARMING all but GANDALF.



                     TREEBEARD
           Huraroom ... Young Master Gandalf, I'm glad
           you've come. Wood and water, stock and ,
           stone I can master, but there's a wizard to
           be managed here ... Locked in his tower.

                      GANDALF
           And there Saruman must remain, under your
           guard, Treebeard.

                     GIMLI
           Let's just have his head and be done with
           it.                            .

GANDALF stares up the long length of the DARK TOWER . . .

                      GANDALF
                (quietly)
           No. He has no power any more.

THE OLD ENT nods his head wisely . . .

                       TREEBEARD
           The filth of Saruman is washing away ...
           Trees will come back to live here, young
           trees . . . wild trees.

CLOSE ON: PIPPIN, his eye caught by something lying in the WATER

ANGLE ON: The MUDDY waters GLOWING wit a golden light . . .

ARAGORN turns as, quick as a FLASH, PIPPIN has jumped off his
ho rse an d pi cke d u p -- th e PA LAN TIR !


                                                        (CONTINUED)

                                      Final Revision - October, 2003 8,
CONTINUED: ( 3 )


                      TREEBEARD (cont'd)
            Well bless my bark!

                        GANDALF
                 (urgent)
            Peregrin Took! I'll take that, my lad!

PIPPIN doesn't move, his eyes staring in wonder at the smooth
black stone ...

                       GANDALF (cont'd)
            Quickly, now!

RELUCTANTLY, PIPPIN hands the PALANTIR to GANDALF ... who
immediately smothers it in his cloak.

ANGLE ON: GANDALF looks back at PIPPIN . . . troubled.

EXT. EDORAS - DAY

WIDE: BACK SHOT - a GROUP OF RIDERS gallop towards the ROHAN
CITY of EDORAS . . .

PUSH IN: EOWYN standing alone outside the GOLDEN HALL,
waiting . . .

                                                               CUT

INT. EDORAS, GOLDEN HALL - EVENING

WIDE: A ROARING FIRE; a LAMB ROASTING on SPI; LONG TABLES
laden with FOOD; BARRELS of WINE; a banquet is-laid ready for
the returning soldiers.

                       THEODEN
            Tonight we remember those who gave their
            blood to defend this country. Hail the
            victorious dead!

ANGLE ON: Amidst the cheering crowd, EOWYN moves towards
ARAGORN . . . As she proffers the CHALICE their eyes meet.

                       EOWYN
            Westu Aragorn hal.


                                                       (CONTINUED)

                                           Final Revision - October, 2003 9,
CONTINUED:


EOWYN watches as ARAGORN moves away . . . a voice speaks in her
ear.

                        THEODEN
             I am happy for you.

EOWYN looks at her UNCLE, as THEODEN follows her gaze.

                       THEODEN (cont'd)
             He is an honourable man.

                        EOWYN
                  (smiling)
             You are both honourable men.

                        THEODEN
             It was not Theoden of Rohan who led our
             people to victory.

EOWYN looks at him questioningly, disturbed'by his tone.

                       T HE ODE N ( co nt' d)
             Don't listen to me - you are young, and
             tonight is for you.

ANGLE ON: EOWYN watches concerned as her UNCLE moves away.

ANGLE ON: MERRY & PIPPIN are in full voice, on top of one of the
TABLES . . . both hold very large mugs of ALE in their hands.

                        MERRY & PIPPIN
                  (singing)
             Oh, you can search - up and down
             As many lands as can be found
             But you'll never find a beer so brown
             As the one we drink in our home town
             You can keep your fancy ales
             You can drink them by the flagon
             But the only brew, for the brave and true,
             Comes from the Green Dragon!

ANGLE ON: GANDALF laughing and clapping the HOBBITS. ARAGORN
steps up beside him, SMILING at the floorshow.


                                                           (CONTINUED)

                                      Final Revision - October, 2003 10,
CONTINUED: (2)


                    ARAGORN
          No news of Frodo?

                     GANDALF
          No word ... nothing.

                     ARAGORN
          We till have time.

GANDALF turns quickly to ARAGORN.

                    ARAGORN (cont'd)
          Every day Frpdo moves closer to Mordor.

GANDALF watches his friend's face . . . seeking reassurance.

                    GANDALF
          Do we know that?

                     ARAGORN
               (gently)
          What does your heart tell you?

                     GANDALF
               (with a small smile)
          That Frodo is alive.
               (to himself)
          Yes - yes, he is alive.

EXT. MORGUL VALLEY - NIGHT

ANGLE ON: FRODO and SAM lie asleep amidst scrubby bushes near a
stagnant pool. SMEAGOL lies nearby, muttering in his sleep.

                     SMEAGOL
          Too risky, too risky. The thieves! They
          stole it from us. Kill them . . . kill them
          ... kill them both!

SMEAGOL wakes suddenly, shaking, his face drenched in SWEAT,
eyes wide in horror.

                     SME AGO L (c ont' d)
          No!


                                                       (CON TINUED )

                                         Final Revision - October, 2003 11.
CONTINUED:


                        GOLLUM
                  (hissed whisper)
             Shhh! Quiet!

SMEAGOL'S features suddenly transform into the MALEVOLENT
face of GOLLUM!

                        GOLLUM (cont'd)
             Mustn't wake them, mustn't ruin it now!

SMEAGOL casts a quick glance over his SHOULDER to the
SLEEPING figures of FRODO and SAM as he clambers off his ROCK
. . . silently sidling towards the EDGE of a STAGNANT POOL.

                        SMEAGOL
             They knows, they knows, they suspects us.



SMEAGOL stares into the MURKY depths of the WATER.

The SURFACE RIPPLES as the face of GOLLUM appears as SMEAGOL'S
REFLECTION.

                        GOLLUM.,               .     ,.�
             What is it saying,.my Precious, my love? Is .
             Smeagol losing his nerve??

                        SMEAGOL                 :
             No! Not! Never!! Smeagol hates nasty
             Hobbitses! Smeagol wants to see: them -
             dead!

                         GOLLUM
             And we will . . ,- Smeagol did it once. . .
                  (sly)
             . . . He can do it again.

FLASH INSERT: SMEAGOL choking DEAGOL . . . Fingers locked tight
around his THROAT.

                        GOLLUM (cont'd)
             It's ours - ours!



                                                           (CONTINUED)

                                     Final Revision - October, 2003 12,
CONTINUED: (2)


                      SMEAGOL
           We must get the Precious. We must get it
           back.

                      GOLLUM
           Patience, patience, my love. First we must
           lead them to her.

                      SMEAGOL
           We lead them to the windy stairs.

                      GOLLUM
                (prompting)
           Yes, the stairs ... and then?

                        SMEAGOL
           Up, up, up, up the stairs we go . . . until
           we come to . . .
                 (naughty excitement)
           ... the Tunnel!

                      GOLLUM
                (quiet)
           And when they go in, there's no coming out.
           She's always hungry, she always needs to
           feed. She must eat, all She gets is filthy
           Orcses.

                      SMEAGOL
           And they doesn't taste very nice, does
           they, Precious?               .

                      GOLLUM
                (sinister)
           No . . . not very nice at all, my love. She
           hungers for sweeter meats . . .

CLOSE ON: SAM . . . his EYES flicker OPEN . . .

                         GOLLUM (cont'd)
           "Hobbit meat." And when She throws away the
           bones and the empty clothes, then we will
           find it . . .

                      SMEAGOL
           And take it for Me!
                                                         (CONTINUED)

                                    Final Revision - October, 2003 13
CONTINUED: (3)


                       GOLLUM
                (correcting)
          For us . . .

                     SMEAGOL
          Yes, we, we meant for us . . .
               (choking cough)
          Go Hum! Go Hum!

                     GOLLUM
               (sly)
          The Precious will be ours once the
          Hobbitses are dead!

SUDDEN ANGLE ON: SAM image mirrored in the water as he SMACKS
GOLLUM on the HEAD with his POT!

                      SAM
               (yelling)            ,�     .
          You treacherous little toad!

SAM drops the POT and FLINGS himself ON TOP of GOLLUM! GOLLUM
SCREAMS . . . his ARMS and LEGS FLAILING WILDLY!

                     GOLLUM
               (crying)
          No! Not! Help! Master!

ANGLE ON: FRODO staggers over to SAM and PULLS HIM OFF
GOLLUM.

                    FRODO
          No, Sam! Leave him alone!

CLOSE ON: GOLLUM, huddled on the ground        WHIMPERING and
SOBBING.

                      SAM
               (fuming)
          I heard it from his own mouth        he means
          to murder us!




                                                     (CONTINUED)

                                       Final Revision - October, 2003 14
CONTINUED: ( 4 )


                       SMEAGOL
            Never! Smeagol wouldn't hurt a fly!
            He's a horrid, fat Hobbit who hates Smeagol
            and who makes up nasty lies!

SAM makes for SMEAGOL again . . . with a look of MURDEROUS
RAGE.

                       SAM
            You miserable little maggot! I'll stove
            your head in!

FRODO grabs SAM'S ARM.

                       FRODO
            Sm. . .
             a

                       SAM
            Call me a liar! You're a liar!

                       FRODO
            Sam! If you scare him off, we're lost.

SAM pulls away from FRODO . . .

                       SAM
            I don't care! I can't do it, Mr Frodo. I
            won' t wait around for him to kill us !

                       FRODO
                 (fierce whisper)
            I'm not sending him away.

SAM stares at FRODO . . . at a loss.

                       SAM
            You don't see it, do you? He's a villain!

                       FRODO
                 (lowers voice)
            We can't do this by ourselves, Sam. Not
            without a guide. I need you on my side.

ANGLE ON: SAM, his face softening.


                                                        (CONTINUED)

                                       Final Revision - October, 2003 15.
CONTINUED: (5)


                      SAM
                (taken aback)
           I'm on your side, Mr Frodo.

                       FRODO
           I know, Sam, I know.
                (whisper)
           You must trust me.

FRODO beckons to GOLLUM.

                      FRODO (cont'd)
           Come, Smeagol.

GOLLUM turns slowly, staring at SAM through hooded, HATE-FILLED
EYES ... and SMILES.

                                                           CUT TO:

EXT. EDORAS, GOLDEN HALL - EARLY DAWN

ARAGORN joins LEGOLAS on the STEPS to the GOLDEN HALL, oblivious
to the CHILL WIND . . . they look out across the SLEEPING CITY to
the LOOMING MOUNTAIN RANGE BEYOND . .-. DARK CLOUDS mark the sky.

                      LEGOLAS
           The stars are veiled, something stirs in
           the east . . . A sleepless malice.

LEGOLAS looks at ARAGORN . . . realisation in his face.

                      LEGOLAS (cont'd)
           The eye of the enemy is moving.

INT. EDORAS, SLEEPING QUARTERS - EARLY DAWN,

CLOSE ON: PIPPIN . . . he is AWAKE! He sits up . . . ANXIOUS,
FIDGETY . . .

Suddenly he hops out of bed and creeps towards the SLEEPING FORM
of GANDALF.

                      MERRY
           (whispers)
           What you doing?
                                                       (CONTINUED)

                                        Final Revision - October, 2003 16,
CONTINUED:


PIPPIN gasps with FRIGHT! MERRY is sitting up, wiping sleep
from his eyes. He moves on . . .

ANGLE ON: A sleeping GANDALF lies with eyes wide open! But
PIPPIN is undeterred . . .

MERRY sits up, a worried look on his face.

                       MERRY (cont'd)
             Pippin? Pippin? Pippin! What are you doing?

With quick stealth, PIPPIN lifts the WRAPPED PALANTIR from
GANDALF'S grasp ...

                       MERRY (cont'd)
             Pippin, are you mad?

                        PIPPIN
             I just want to look at it. Just one more
             time.

                       MERRY
             Put it back! Put - it - back!

PIPPIN unwraps the PALANTIR and as MERRY looks on HORRIFIED,
he gazes INTENTLY into it.

                       MERRY (cont'd)
             Pippin!

As PIPPIN lays his hands on the CRYSTAL, a SICKLY PALE light
slowly spreads from the GLASS BALL onto PIPPIN'S FACE ... his
EYES WIDEN.

                       MERRY (cont'd)
             Pippin!



EXT. EDORAS GOLDEN HALL - EARLY DAWN

On the STEPS of the GOLDEN HALL, LEGOLAS turns to ARAGORN




                                                        (CONTINUED)

                                       Final Revision - October, 2003 17.
CONTINUED:


                         LEGOLAS
                  (urgent)
             He is here.

INT. EDORAS, SLEEPING QUARTERS - NIGHT

PIPPIN suddenly starts to HYPERVENTILATE . . . He STAGGERS
BACKWARDS, PALANTIR held rigidly before him . . .

THE GREAT EYE OF SAURON seems to LEAP from the FIRE . . . PIPPIN
is bathed in the FIERY RED LIGHT.

PIPPIN sinks to his KNEES, his mouth open in a soundless SCREAM
. . . He FALLS BACKWARDS, powerless to release the FIERY GLOBE.

                        MERRY
             Help! Someone help him!

GANDALF wakes with a start! Just as ARAGORN enters, and
wrenches the PALANTIR from PIPPIN'S HANDS . . . PIPPIN FALLS to
the FLOOR! . . . ARAGORN spins away, reeling backwards, the
PALANTIR falling from his HANDS . . .

The PALANTIR rolls across the FLOOR, causing EVERYONE in the
room to COWER BACK.                                    ;


ANGLE ON: GANDALF throws a BLANKET over it, ANGRY DISBELIEF
on his face! He rounds on PIPPIN.                    ,

                        GANDALF
             Fool of a Took!

GANDALF lifts the HOBBIT'S SLUMPED HEAD.

                        MERRY
             Pippin!

PIPPIN is trembling ... GANDALF calms him . . .

                        PIPPIN
             Gandalf! Forgive me.

                       GANDALF             .
             Look at me! What did you see?


                                                       (CONTINUED)

                                       Final Revision - October, 2003 18.
CONTINUED:


                     PIPPIN
               (disjointed)
          A tree ... There was a white tree . . . in a
          courtyard of stone . . . It was dead!

FLASH INSERT: A lone white tree silhouetted by flames.

                        PIPPIN (cont'd)
             The city was burning ...

                        GANDALF
             Minas Tirith???
                  (to PIPPIN)
             Is that what you saw?

                         PIPPIN
                  (terrified)
             I saw . . . I saw him . . . I could hear his
             voice in my head.

                     GANDALF
          And what did you tell him? Speak!

                        PIPPIN
          He asked me my name, I didn't answer . . . he
          hurt me . . .

CLOSE ON: GANDALF stares at PIPPIN with a FRIGHTENING
INTENSITY . . .

                    GANDALF
          What did you tell him about Frodo and the
          Ring?

INT. EDORAS, GOLDEN HALL - DAY

THEODEN stands in the GOLDEN HALL, gravely listening to
GANDALF ... ARAGORN, LEGOLAS, and GIMLI look on . . .

                     GANDALF
          There was no lie in Pippin's eyes; a fool,
          but an honest fool he remains. He told
          Sauron nothing of Frodo and the Ring.

ANGLE ON: GIMLI lets out a sigh of relief.
                                                            (CONTINUED)

                                                                  Final Revision - October, 2003 19.
CONTINUED:


GANDALF turns to look at THEODEN.

                        GANDALF (cont'd)
             We've been strangely fortunate. What Pippin
             saw in the Palantir was a glimpse of our
             enemy's plan.

GANDALF looks from on to the other of the, gathered company.

                       GANDALF (cont'd)
             Sauron moves to strike the city of Minas
             Tirith. His defeat at Helm's Deep showed
             our enemy one thing.

The WIZARD turns towards ARAGORN . . .

                        GANDALF (cont'd)
             The heir of Elendil has come forth. Men are
             not as weak as he supposed. There is
             courage still - strength enough left to
             challenge him.

THEODEN listens intently, saying nothing.

                                    GANDALF (cont'd)
                      (wa rningly)
             Sauro n        fea   rs this. He             will no t risk            t   he
             p e o p l es    of    M i d d l e -e a r t   h u n i t i ng u n d e   r    one
             b a n n e r.    He    w i l l r ai s e       M i n a s T ir i t h t   o    the
             groun d        bef   ore he sees              the ret urn of           t   he
             King.

CLOSE ON: ARAGORN . . . he knows GANDALF SPEAKS THE TRUTH.

ANGLE ON: GANDALF rounds on THEODEN . . .

                        GANDALF (cont'd)
             If the beacons of Condor are lit, Rohan
             must be ready for war!

THEODEN holds GANDALF'S gaze.




                                                                                              (CONTINUED)

                                     Final Revision - October, 2003 20
CONTINUED: (2)


                       THEODEN
                (quietly)
           Tell me. Why should we ride to the aid of
           those who did not come to ours?

ANGLE ON: ARAGORN turns to look at THEODEN.

                      THEODEN (cont'd)
           What do we owe Gondor?

                      ARAGORN
                (low and urgent)
           I will go.

                        GANDALF
                 (hurried)
           No!

                      ARAGORN
           They must be warned.

                      GANDALF
           They will be.
                (low voice, to Aragorn)
           You must come to Minas Tirith by another
           ra ...
            od
                (cryptic)
           Follow the river, look to the black ships.
                (louder, to all)
           Understand this . . . things are now in
           motion that cannot be undone.

GANDALF turns on his heel . . . and stares at a surpirsed
PIPPIN.

                      GANDALF (cont'd)
           I ride for Minas Tirith! And I won't be
           going alone !

EXT. EDORAS STREETS - DAWN

ANGLE ON: GANDALF hurries along the STREETS . . .   PIPPIN and
MERRY run alongside trying to KEEP UP . . .



                                                        (CONTINUED)

                                       Final Revision - October, 2003 21.
CONTINUED:                         �


                        GANDALF
             Of all the inquisitive Hobbits, Peregrin,
             Took, you are the worst. Hurry, hurry!

PIPPIN catches up to MERRY.

                         PIPPIN
                  (worried)
             Where are we going?

                       MERRY
             Why did you look - why do you always have
             to look?

                         PIPPIN                                 .
                  (subdued)
             I don't know . . . I can't help it.

MERRY turns away ...

                       MERRY
             You never can.

                         PIPPIN
                  (lightly)                . . . . ,.;      �
             I'm sorry, alright? I won't do it again.

This is too much for MERRY. He turns on PIPPIN.

                        MERRY
             Don't you understand ... the Enemy thinks
             you have the Ring . . . he's going to be
             looking for you, Pip. They have to get you
             out of here!

                         PIPPIN
             And you. You're coming with me . . .
             Merry?

                        MERRY
             Come on!

PUSH IN: PIPPIN'S face as MERRY strides away.

                                                '     ,.,   CUT TO:

                                     Final Revision - October, 2003 22



INT. EDORAS STABLES - DAWN

ANGLE ON: PIPPIN is dumped unceremoniously onto the back of
SHADOWFAX as GANDALF hurriedly prepares to leave . . .

                     PIPPIN
               (nervous)
          How far is Minas Tirith?

                     GANDALF
          Three days ride as the Nazgul flies and
          you'd better hope we don't have one of
          those on our tail.

MERRY thrusts a SMALL PACKAGE into PIPPIN'S HAND . . .

                     MERRY
          Here - something for the road.

PIPPIN stares down at the leather-bound bundle of PIPE-WEED.

                     PIPPIN
          The last of the Longbottom Leaf.

                     MERRY
          I know you've run out . . . you smoke too
          much, Pip.

                     PIPPIN
          But we'11 see each other soon?

A WORRIED MERRY exchanges glances with GANDALF.

                      PIPPIN (cont'd)
          Won't we?

                     MERRY
          I don't know . . . I don't know what's going
          to happen.

GANDALF mounts SHADOWFAX.

                     PIPPIN
               (rising panic)
          Merry?
                                                      (CONTINUED)

                                     Final Revision - October, 2003 23.
CONTINUED:


GANDALF spurs the GREAT HORSE forward.

                       GANDALF
             Run Shadowfax, show us the meaning of
             haste.

                     PIPPIN
               (panicked)
          Merry!

SHADOWFAX thunders out of the STABLES!

CLOSE ON: MERRY'S devastated face.

EXT. GATES OF EDORAS - DAY

ANGLE ON: SHADOWFAX carried GANDALF and PIPPIN out of the
GATE and down the WINDING ROAD towards the PLAINS QF ROHAN.

EXT. EDORAS GATES LOOK-OUT - DAY

ANGLE ON: MERRY clambers up a WATCHTOWER, ARAGORN in pursuit.

ANGLE ON::The SMALL FIGURE as he watches his best friend
DISAPPEAR into the DISTANCE . . .

CLOSE ON: ARAGORN . . . he knows what it is to lose someone.

EXT. RIVENDELL FOREST - DAY

WIDE: ARWEN - escorted by a SMALL ENTOURAGE of ELVES - rides
through the gathering darkness of a PINE FOREST ...

                     ELROND V/0
          Take her by the safest road. A ship lies
          anchored in the Grey Havens. It waits to
          carry her across the Sea . . . The last
          journey of Arwen Undomiel.

SLOW MOTION: As ARWEN rides through the FOREST the FIGURE of
a SMALL BOY of about 5 SUDDENLY runs across the path in front
of her.

ARWEN reigns in ASFALOTH ... something about the BOY
intrigues her.- but she does not know why . . .
                                                     (CONTINUED)

                                      Final Revision - October, 2003 24.
CONTINUED:


As ARWEN watches the BOY moves away, the TREES begin to thin
. . . the BOY continues running. One by one the TREES TRANSFORM
into TALL WHITE PILLARS ...

ARWEN'S POV: The BOY now stands within a VISION of the
majestic architecture of the great Gondorian city of MINAS
TIRITH.

A SILHOUETTED FIGURE appears in the distance and moves
towards the CHILD . . . the BOY runs to the FIGURE.

ARWEN watches as the FIGURE holds out its arms - swinging the
LAUGHING CHILD into the AIR . . .

The figure turns to reveal ... ARAGORN, a little older,
dressed in the casual finery of a GONDORIAN NOBLE.

CLOSE ON: The'CHILD, now in ARAGORN'S ARMS looks directly at
ARWEN . . . it is a QUIET LOOK filled with INFINITE SADNESS.

ARWEN'S eyes drop to the CHILD'S CHEST . . . around the CHILD'S
neck hangs the EVENSTAR . . .

CLOSE ON: ARWEN as she realizes she is staring at a future
that can never be, the CHILD she and ARAGORN will never have.

INSERT: ELROND speaking to his daughter . . .

                     ELROND V/0 (cont'd)
           Arwen, there is nothing for you here ...
           only death.

ARWEN shuts her eyes ... when she opens them again the VISION
is gone . . . she is staring at DARK TREES once more.

                     ELF ESCORT O.S.
           Lady Arwen?

ARWEN turns towards her COMPANION who stares at her,
concerned.

                     ELF ESCORT
           We cannot delay.

SUDD ENLY: ARWEN wheels ASFAL OTH ar ound . . .   riding away.
                                                         (C O N TI N U ED )

                                     Final Revision - October, 2003 25.
CONTINUED: (2)


                      ELF ESCORT (cont'd)
               (calling)
          My Lady!

EXT. RIVENDELL - DAY

WIDE SHOT: ARWEN'S HORSE gallops over the BRIDGE and through
the GATES into RIVENDELL.

EXT. ELROND'S BALCONY, RIVENDELL - DAY

ANGLE ON: ELROND seated alone ... ARWEN runs up the STEPS
towards him ...

                    ARWEN                            ....
          What did you see?

CLOSE ON: ELROND stands - stunned.          ,,

                       ELROND
          Arwen?

ANGLE ON: ARWEN breathing hard, walking towards ELROND with a
fierce light in her eyes . . .

                    ARWEN
          You have the gift of foresight - tell me
          what you have seen.

CLOSE ON: ELROND his face grim.                  '
                                                 .

                    ELROND
          I looked into your future and I saw death.

                    ARWEN
          There is also life.                           ,

Her father turns away ...

                     ARWEN (cont'd)
          You saw there was a child . . .
          you saw my son.

ELROND stares into space, the fight seems to go out of him.
He won't look at her . . .
                                                      (CONTINUED)

                                           Final Revision - October, 2003 26,
CONTINUED:


                        ELROND
                  (quietly)
             That future is almost gone.

                        ARWEN
             But it is not lost ...

                        ELROND
             Nothing is certain.

ANGLE ON: ARWEN gently takes her FATHER'S face in her hands
and turns him toward her . . .

                      ARWEN
           Some things are certain. If I leave him now
           I will regret It forever.
                (whisper)
           Ada, it is time.

INSERT IMAGE: A HOODED FIGURE ascends a CURVED STAIRCASE
towards a GALLERY ... The FIGURE stops before a STATUE that
holds the BROKEN SHARDS of an ancient sword in its arms.

                        A RW EN ( V .O .) (c on t' d )
             From the ashes of fire shall be woken,
             a light from the shadow shall spring,
             renewed shall be blade that was broken ...

INSERT IMAGE: The BLADE shattering in several fragments as
ISLIDUR brandishes NARSIL at SAURON.

                        ARWEN (V.O.) (cont'd)
             The crownless again shall be King . . .

CLOSE ON: The HOODED FIGURE looks up into the sorrowful face
of the STATUE ... The figure is ARWEN . . .

                       ARWEN V/0
             Reforge the sword.

INT. ARWEN'S CHAMBER, RIVENDELL - NIGHT

ANGLE ON: ELROND stares at his daughter, unwavering . . .



                                                           (CONTINUED)

                                      Final Revision - October, 2003 27.
CONTINUED:


                       ARWEN
             Ada ...

ANGLE ON: ELROND turns away . . .

ANGLE ON: ARWEN in ANGUISH, sits on her bed, the book falls
to the FLOOR ...

CLOSE ON: ELROND picks up her JOURNAL and takes one of her
hands in his . . .

                        ELROND
             Your hands are cold.
                  (distressed)
             The life of the Eldar is leaving you.

CLOSE ON: ELROND'S despair is plain . . .

                        ELROND (cont'd)
             It has begun.

                        ARWEN
             This was my choice. Ada ... Whether by your
             will or not, there is no ship now that can
             bear me hence.

ANGLE ON: ELROND, he understands now that to protect his
dauther, he must trust her . . .

INSERT IMAGES: A BROKEN SWORD GLOWS with RED HEAT . . . It's
BLADE in SEVERAL FRAGMENTS.

IMAGE: A HEAVY HAMMER pounds the RED-HOT BLADE on an ANVIL
. . . As ELVEN-SMITHS TEMPER the STEEL.

IMAGE: ELROND'S FACE lit by FLICKERING FIRE as SPARKS fly in.
the RIVENDELL FORGE.

CLOSE ON: The SWORD is withdrawn from a POOL OF STEAMING
WATER ... LIGHT SHIMMERS as the WATER DROPS slide down the
BLADE of NARSIL, the SWORD that was broken has been remade.

                                                     DISSOLVE TO:

                                     Final Revision - October, 2003 28



EXT. FOOTHILLS OF WHITE MOUNTAINS - NIGHT

CLOSE ON: PIPPIN asleep . . . GANDALF'S PROTECTIVE ARM around
him ...

. . . as SHADOWFAX THUNDERS through the NIGHT.

                                                      DISSOLVE TO:

EXT. FOOTHILLS OF WHITE MOUNTAINS - DAY

ANGLE ON: SHADOWFAX powers along the COUNTRYSIDE.

ANGLE ON: PIPPIN, huddled in front of GANDALF, the WIND
sailing through his hair.

                      GANDALF
           We have just passed into the realm of
           Condor!

EXT. MINAS TIRITH - DAWN

ANGLE ON: SHADOWFAX gallops up onto a LOW RIDGE . . .

ANGLE ON: Before them is the DARK MASS of Mount Mindolluin,
its tall WHITE FACE whitening in the RISING SUN. Upon its out-
thrust knee is the Guarded City: MINAS TIRITH.

With SEVEN WALLS OF WHITE STONE, so strong and old that it
seems to have been not built, MINAS TIRITH looks carven by
giants out of the bones of the earth.

                     GANDALF
          Minas Tirith . . . City of the Kings.

Suddenly the SUN climbs over the eastern hills,     and sends
forth a SHAFT OF SUNLIGHT that GLEAMS against th    e face of the
CITY. The TOWER OF ECTHELION stands high within     the topmost
walls. WHITE BANNERS break and FLUTTER from the     BATTLEMENTS
in the morning breeze.

EXT. MINAS TIRITH STREETS - DAY

GANDALF steering SHADOWFAX up the STEEP STREETS of MINAS
TIRITH.
                                                        (CONTINUED)

                                       Final Revision - October, 2003 29.
CONTINUED:


ANGLE ON: The stares of frightened GONDORIANS as GANDALF and
PIPPIN gallop through the WINDING STREETS . . .

AERIAL SHOT: SHADOWFAX, carrying GANDALF and PIPPIN up
towards the 7th LEVEL.

MINAS TIRITH is built in 7 LEVELS - each behind a CIRCULAR
DEFENSIVE WALL. Each level rises - the city reaches a height
of nearly 1000 FEET on its TOPMOST LEVEL.

A towering BASTION of NATURAL ROCK - shaped like a sharp
ship's prow - bisects the city from the 2nd LEVEL to the TOP.

EXT. MINAS TIRITH, COURT OF THE KINGS - DAY

SHADOWFAX arrives at a GREAT CITADEL on the SUMMIT of the
CITY - 1000 FEET above the PELENNOR FIELDS.

GANDALF and PIPPIN dismount, leaving the GUARDS of the
CITADEL to tend to SHADOWFAX. GANDALF hurries off . . .

CLOSE ON: PIPPIN as he takes in his surroundings, his eye
caught by a DEAD TREE that stands in the middle of the COURT,
FOUR SOLEMN CITADEL GUARDS standing sentry around it.

                         PIPPIN                             ;
                                                            .
                  (whisper)
             It's the tree.           ,
                  (hurrying after GANDALF)
             Gandalf! Gandalf!

                       GANDALF
             Yes, the white tree of Gondor. The tree of
             the King.

GANDALF leads PIPPIN across a FLAT COURT of WHITE STONES,
surrounded by GREEN LAWNS . . . towards a GREAT HALL benejath
the GLEAMING TOWER.                                         '
                                                            \

                       GANDALF (cont'd)
             Lord Denethor, however, is not the King. He
             is a steward only. A caretaker of the
             throne.

GANDALF lowers his voice, as they approach the TOWER HALL.

             �,                                         (CONTINUED)

                                          Final Revision - October, 2003 30.
CONTINUED:


                        GA ND ALF (c on t'd )
                  (quietly)
             Now, listen carefully. Lord Denethor is
             Boromir's father. To give him news of his
             beloved son's death would be most unwise
             ... And do not mention Frodo . . . Or the
             Ring . . . And say nothing of Aragorn either.
                  (hesitates)
             In fact, it's better if you don't speak at
             all, Pippin Took.

CLOSE ON: PIPPIN, suitably chastened, nods.

INT. MINAS TIRITH TOWER HALL - DAY

ANGLE ON: A LONG SOLEMN HALL ... with ROWS OF BLACK MARBLE
PILLARS. Between the pillars stand a silent company of TALL
KINGS carved in cold STONE.

GANDALF strides down the HALL, with PIPPIN following
obediently behind.

At the FAR END, upon a DAIS OF MANY STEPS, sits a LARGE,
EMPTY THRONE . . . and on the wall behind is the IMAGE of a
FLOWERING WHITE TREE set in GEMS.

At the FOOT of the DAIS, in a small STONE CHAIR, sits an OLD
MAN, gazing at his lap: DENETHOR - the Lord Steward of
CONDOR.

                        GANDALF
             Hail, Denethor, Son of Ecthelion, Lord and
             Steward of Gondor.

DENETHOR does not look up as GANDALF and PIPPIN approach.

                        GANDALF (cont'd)
             I come with tidings in this dark hour - and
             with counsel.

DENETHOR slowly raises COLD EYES . . .

                         DENETHOR
                  (bitter)
             Perhaps you come to explain this?

                                                           (CONTINUED)

                                           Final Revision - October, 2003 31.
CONTINUED:


DENETHOR holds up BOROMIR'S BROKEN HORN ...

                          DEN ETH OR (c ont 'd )
             Perhaps you come to tell me why my son is
             dead?

CLOSE ON: PIPPIN remembering . . .

INSERT IMAGE: BOROMIR, as URUK-HAI arrows thud into his body,
he falls to his KNEES . . .

PIPPIN starts forward unable to say nothing . . .

                       .. PIPPIN
             Boromir died to save us . . . my kinsman and
             me . . . he fell, defending us from many
             foes.

CLOSE ON: DENETHOR pain flickers in his eyes.

                        GANDALF
                  (hurried whisper)
             Pippin!

PIPPIN drops to his knee offering DENETHOR his SWORD . . .

                        PIPPIN
             I offer you my service, such as it is, in
             payment of this debt.

DENETHOR looks at PIPPIN blankly, overcome with grief.:

                         GANDALF
                  (to PIPPIN)
             Get up!
                  (a ddre ssin g D ENET HOR)
             My Lord, there will be a time to grieve for
             Boromir, but it is not now. War is coming
             ... the Enemy is on your doorstep. As
             Steward, you are charged with the defence
             of this city. Where are Condor's armies?

DENETHOR gaze turns slowly on GANDALF . . .



                                                           (CONTINUED)

                                    Final Revision - October, 2003 32.
CONTINUED: ( 2 )


                       GANDALF (cont'd)
            You still have friends - you are not alone
            in this fight. Send word to Theoden of
            Rohan. Light the beacons.

DENETHOR smiles at GANDALF, as if amused by something.

                        DENETHOR
                 (softly)
            You think you are wise, Mithrandir, yet for
            all your subtleties.you have not wisdom. Do
            you think the eyes of the White Tower are
            blind? I have seen more than you know. With
            your left hand you would use me as a shield
            against Mordor and with your right you
            would seek to supplant me.

CLOSE ON: GANDALF looks shocked, DENETHOR'S eyes NARROW.

                      DENETHOR (cont'd)
                (contemptuous)
           I know who rides with Theoden of Rohan. Oh,
           yes. Word has reached my ears of this
           Aragorn, son of Arathorn, and I tell you
           now, I will not bow to this Ranger from the
           North - last of a ragged house, long bereft
           of Lordship.

                       GANDALF
                (stung)
           Authority is not given to you to deny the
           return of the King - Steward!

                       DENETHOR
                 (explosive)
            The rule of Condor is mine, and no others!

CLOSE ON: PIPPIN, horrified. GANDALF looks at Denethor
closely for a moment, then turns on his heel to leave, PIPPIN
follows.

                      GANDALF
            Come.

GANDALF and PIPPIN stride from the TOWER HALL ... DENETHOR
slumps back into his SEAT.

                                    Final Revision - October, 2003 33.



INT. MINAS TIRITH, PIPPIN'S QUARTERS - NIGHT

ANGLE ON: PIPPIN is carefully laying out a SMALL UNIFORM of
the ROYAL GUARD on a bed.

                     PIPPIN
          So, I imagine this is just a ceremonial
          position . . . I mean, they don't actually
          expect me to do any fighting . . . do they?

WIDE: GANDALF STANDING QUIETLY on a BALCONY that overlooks
the GREAT CITY.

                      GANDALF
          You're in the service of the Steward now -
          you're going to have to do as you're told,
          Peregrin Took . . .
               (under his breath)
          Guard of the Citadel!

EXT. MINAS TIRITH BALCONY - NIGHT

ANGLE ON: PIPPIN as he stares up at the vast NIGHT SKY.,

                     PIPPIN
          It's so quiet.

GANDALF watches the young HOBBIT.



                     GANDALF
          It's the deep breath before the plunge.

                      PIPPIN
          I don't want to be in a battle . . . but
          waiting on the edge of one I can't escape
          is even worse.                                L
               (tense)                                  :
          Is there any hope, Gandalf - for Frodo and
          Sam?

GANDALF joins PIPPIN as they look towards the distant, jagged
MOUNTAINS of MORDOR . . .


                                                    (CONTINUED)

                                      Final Revision - October, 2003 34.
CONTINUED:


                        GANDALF
             There never was much hope.

PIPPIN looks up at him, unnerved. GANDALF gives him a small
self-deprecating smile . . .

                       GANDALF (cont'd)
             Just a fool's hope.

GANDALF and PIPPIN share a quiet moment as they stare out
towards the FIERY SKY over MORDOR . . .

                       GANDALF V/0
                  (grim)
             Our enemy is almost ready, his full
             strength gathered. Not only Ores, but men
             as well.

INSERT IMAGE: GIANT MUMAKIL carrying ARMIES upon their backs

                       GANDALF V/0 (cont'd)
             Legions of Haradrim from the South ......

INSERT IMAGE: CORSAIR SHIPS sail up the RIVER . . .

                        GANDALF V/0 (cont'd)
             Mercenaries from the coast . . . All will
             answer Mordor' s call.

ANGLE ON: GANDALF . . . he is almost talking to himself now ..
like a man unable to prevent a sure disaster.


                       GANDALF
             This will be the end of Gondor as we know
             it. Here the hammerstroke will fall
             hardest.

INSERT IMAGE: The BATTLE-SCARRED CITY of OSGILIATH - last
bastion between MINAS TIRITH and MORDOR . . .

                       GANDALF V/0
             If the river is taken, if the garrison at
             Osgiliath falls, the last defence of this
             city will be gone.

                                                         (CONTINUED)

                                         Final Revision - October, 2003 35.
CONTINUED: ( 2 )


CLOSE ON: PIPPIN ... desperately seeking reassurance.

                       PIPPIN
            But we have the White Wizard. That's got to
            count for something.

GANDALF looks down at PIPPIN, he says nothing ...

                        PIPPIN (cont'd)
                 (nervous)
            Gandalf?

GANDALF stares into the distance as if seeing something in
his mind's eye.

INSERT IMAGE: A TOWERING, HOODED FIGURE, DRESSED in BLACK, is
being dressed in ARMOUR by attendant ORCS ...

                           GANDALF V/0
            Sauron    has yet to reveal his deadliest
            servant    . . . The one who will lead Mordor's
            armies    in war, the one they say no living
            man can    kill.

CLOSE ON: GANDALF still staring intently as if facing his
enemy in .person.

                        GANDALF
            The Witchking of Angmar . . .
                 (he looks down at a startled
                  PIPPIN)         ,           .
                                          ;
            You've met him before . . .

ANGLE ON: PIPPIN looks up at GANDALF, afraid to ask . . .

                       GANDALF (cont'd)
            He stabbed Frodo on Weathertop.

INSERT IMAGE: FRODO screaming as the MORGUL BLADE is driven
into his SHOULDER . . .

PIPPIN blanches at the MEMORY . . .




                                                              (CONTINUED)

                                         Final Revision - October, 2003 36.
CONTINUED: ( 3 )


                      G AN DA LF ( co nt 'd )
            He is the Lord of the Nazgul - the greatest
            of the nine . . .

EXT. MINAS MORGUL - NIGHT

                      GANDALF V/0
           And Minas Morgul is his lair.

ANGLE ON: FRODO and SAM clamber into a SMALL GULLY beside a
ROUGH-HEWN ROAD ... GOLLUM CAREFULLY.peers OVER the lip of
the GULLY ___

ANGLE ON: MINAS MORGUL, a MASSIVE DEAD CITY, set upon a ROCKY
KNEE at the HEAD OF THE morgul valley. CORRUPT and LOATHSOME,
it glows with a SICKLY LUMINOUS LIGHT - like a CORPSE CANDLE.

TWO HUGE, BESTIAL STONE STATUES guard the BRIDGE that leads
to the CITY ...

                      GOLLUM
                (whisper)
           The Dead City, very nasty place, full of
           ... enemies.

GOLLUM, FRODO and SAM hurry from their COVER scampering in
the SHADOWS towards MINAS MORGUL ...

                      GOLLUM (cont'd)
                (hissed whisper)
           Quick! Quick! They will see, they will see.

CLOSE ON: FRODO . . . he LOOKS UP at the HIDEOUS STATUES. His
SENSES START REELING.

                     GOLLUM (cont'd)
           Come away, come away. Look! We have found
           it.

FRODO and SAM look AGHAST at the sight of a NARROW, NEAR-
VERTICAL STAIRCASE, cut into the ROCK-FACE ... Directly in
FRONT of the MINAS MORGUL GATES.

                      GOLLUM (cont'd)
           The way into Mordor!

                                                         (CO NTINUE D)

                                       Final Revision - October, 2003 37.
CONTINUED:


ANGLE ON: Following the STAIRS . . . HIGHER and HIGHER up the
sheer western side of the MORGUL VALLEY - to the HIGH PEAKS
of the razor-like MOUNTAINS OF MORDOR.

                         GOLLUM (cont'd)
             The secret stairs . . . climb!

SUDDENLY! FRODO staggers across the ROAD . . . as if some
FORCE, other than his own will, is at work! He lurches
towards the BRIDGE . . . towards MINAS MORGUL!

                        SAM
             No, Mr Frodo!

                        GOLLUM
                  (desperate)
             Not that way!

SAM runs after FRODO, catching him in his arms as he STUMBLES,

                       GOLLUM (cont'd)
             What's it doing?

                        SAM
             No!

SAM and GOLLUM pull FRODO from the BRIDGE.

                        FRODO
                  (disorientated)
             They're calling me!

FRODO falls to the GROUND.

AT THAT MOMENT: the GROUND QUIVERS, and a great RUMBLING
NOISE rolls across the ground and ECHOES in the mountains.

The cold, dull MORGUL VALLEY is suddenly VIOLENT and FIERCE,
as UPRUSHING FLAME springs from MOUNT DOOM.

MINAS MORGUL ANSWERS: A FLARE of LIVID LIGHTNING, FORKS of
BLUE FLAME, SPRING UP from the TOWER into the SULLEN CLOUD.

                                                    INTERCUT WITH:

                                    Final Revision - October, 2003 38,



EXT. MINAS TIRITH BALCONY - NIGHT

ANGLE ON: VIOLENT FIERY FLASHES light the CLOUD above MORDOR
. . . SHARP THUNDER rolls across 40 MILES to MINAS TIRITH.

CLOSE ON: PIPPIN looking on in FRIGHTENED AWE. GANDALF'S
comforting HAND rests on his shoulder.

                                                 INTERCUT WITH:

EXT. MINAS MORGUL - NIGHT

SAM and GOLLUM lead FRODO to the STAIRS ...

ABOVE MINAS MORGUL the SKY is BRIGHT with LIGHT as the CITY,
erupts . . .

                    GOLLUM
          Hide! Hide!

                                                 INTERCUT WITH:

EXT. MINAS TIRITH BATTLEMENTS - NIGHT

ANGLES ON: FACES of SOLDIERS and CIVILIANS of MINAS TIRITH as
they watch from the PARAPETS of the CITY.

                                                 INTERCUT WITH:

EXT. MINAS MORGUL - NIGHT

FRODO and SAM sink to the ground, holding their hands against
their ears, as out of the CITY comes a RENDING SCREECH . . .
SHIVERING, rising swiftly to a PIERCING PITCH beyond the
range of hearing. The terrible CRY ends, falling back through
a long sickening WAIL, to SILENCE.

ANGLE ON: FRODO slowly RAISES HIS HEAD . . . across the NARROW
VALLEY, directly opposite the HOBBITS, the LORD OF THE NAZGUL
- the WITCH KING - suddenly RISES UP out of the DEAD CITY on
his FELL-BEAST!

. .. ,as the WITCH KING settles on the BATTLEMENTS of MINAS
MORGUL. His DARK HEAD turns this way and that, sweeping the
shadows with unseen eyes - as if SENSING the RING !
                                                    (CONTINUED)

                                      Final Revision - October, 2003 39.
CONTINUED:


ANGLE ON: FRODO breaking out into a COLD SWEAT. He squeezes
his eyes shut, clutching at his SHIRT as if it's on FIRE!

                         FRODO .
                  (gasping)
             I can feel his blade!

THE CAVERNOUS GATE of MINAS MORGUL swings OPEN ...

. . . and. a HUGE ARMY MARCHES OUT!

RANK upon RANK of ARMOUR CLAD ORCS, moving SWIFTLY and
SILENTLY, pass close to FRODO and SAM in an ENDLESS STREAM of
RAGGED COLUMNS!

EXT. MINAS TIRITH BALCONY - NIGHT

CLOSE ON: GANDALF . .. .

                         GANDALF
                  (quiet)
             We come to it at last ... the great battle
             of our time.

                                                   INTERCUT WITH:

EXT. MINAS MORGUL - NIGHT

ANGLE ON: 75,000 ORCS MARCHING TO WAR, just below FRODO and SAM.

                        GANDALF V/0
             This war is long planned. Sauron has hated
             the west through many ages . . . It is a
             hatred that flows from the depths of time,
             across the deeps of the Sea.

The WITCH KING SWOOPS down the VALLEY to join the HEAD of his
ARMY. He vanishes into the GLOOM - a shadow into shadow.

CLOSE ON: GOLLUM peers out from his stony hiding place.

                        GOLLUM
                  (urgent)
             Come, hobbits. We climb - we must climb!


                                                        (CONTINUED)

                                     Final Revision - October, 2003 40.
CONTINUED:


ANGLE ON: FRODO, SAM and GOLLUM climb the STONY STAIRS high
above the MARCHING ARMY.

EXT. MINAS TIRITH BALCONY - NIGHT

ANGLE ON: GANDALF . . . thinking, calculating . . .

                        GANDALF
                  (to himself)
             The board is set, the pieces are moving.

EXT. MINAS TIRITH SIXTH LEVEL - NIGHT

ANGLE ON: GANDALF striding BACK STREETS of the CITY . . . so
DETERMINED and PURPOSEFUL is he, that PIPPIN has to RUN to
keep up. GANDALF suddenly stops and looks down at PIPPIN . . .

                       GANDALF
             Peregrin Took, my lad, there is a task to
             be done. Another opportunity for one of the
             Shire-folk to prove their great worth!

GANDALF kneels down and looks at PIPPIN earnestly, his hand
on PIPPIN'S shoulder.

                       GANDALF (cont'd)
             You must not fail me.

GANDALF watches as PIPPIN hurries away.

EXT. WEST OSGILIATH, RIVER ANDUIN - NIGHT

WIDE ON: An ANCIENT STONE BRIDGE which spans the RUINS of
EAST and WEST OSGILIATH - a once MIGHTY GONDORIAN CITY.

WIDE ON: ITHILIEN RANGERS patrolling the BRIDGE and the
RIVERBANK.

WEST OSGILIATH has fallen into disrepair, but the DESOLATION
of EAST OSGILIATH is more pronounced - it is held by the
FORCES of MORDOR.

CAMERA tracks down beneath the BRIDGE to the DARK WATERS . . .
catching a STEALTHY MOVEMENT . . .

                                                        (CONTINUED)

                                        Final Revision - October, 2003 41.
CONTINUED:


ANGLE ON: MANY BOATS, carrying MURDEROUS-LOOKING ORCS, are
quietly tracking down the RIVER. On board several HUNCHED
FIGURES steer with LONG OARS.

                       GOTHMOG
                  (to his oarsmen)
             Quiet!

EXT. WEST OSGILIATH, RIVER ANDUIN - NIGHT

CLOSE ON: FARAMIR, CAPTAIN OF CONDOR, as he issues orders to
his SOLDIERS.

                         FARAMIR
                  (urgent)
             To the river - quick!

ANGLE ON: ITHILIEN RANGERS take position; they are all
WEATHERED, HARDENED, PROFESSIONAL SOLDIERS . . . Watchful,
ready, waiting . . .

                       GOTHMOG
             Faster!

ON THE RIVER the BOATS quietly advance.

                        ORC COMMANDER
             Draw swords!

ANGLE ON: FARAMIR and his SOLDIERS lie in wait. As the BOATS
arrive HUNDREDS of ORCS race ashore. FARAMIR steps out, his
SWORD drawn. A FIERCE BATTLE ensues, but FARAMIR is unable to
stop the advance as HUNDREDS OF ORCS cross the WIDE BRIDGE
into WEST OSGILIATH.

EXT. MOUNT MINDOLLUIN - DAWN

HIGH ANGLE ON: A DIZZYING VIEW . . . Looking down on MINAS
TIRITH, 1000 FEET BELOW, as PIPPIN desperately scrambles up
the ROCKY MOUNTAINSIDE.

EXT. MINAS TIRITH BEACON - DAWN

PIPPIN clambers over a ROCKY LEDGE and ducks behind a STONE
WALL . . . panting HEAVILY.

                                                        (CONTINUED)

                                       Final Revision - October, 2003 42,
CONTINUED:


ANGLE ON: An ancient STONE LEDGE holds a GREAT PILE of
FIREWOOD, secured in stacked bundles ... The MINAS TIRITH
BEACON!

TWO bored CITADEL GUARDS sit chatting ... passing the long
hours.

                                                    INTERCUT WITH:

EXT. MINAS TIRITH STREETS - DAWN

ANGLE ON: GANDALF as he waits tensely below . . .

                                                    INTERCUT WITH:

EXT. MINAS TIRITH BEACON - DAWN

ANGLES ON: PIPPIN as he stealthily manages to POUR OIL on the
WOOD and set a FLAME to it!

Within SECONDS, the GREAT PYRE is alight! The GUARDS look on
in TOTAL SURPRISE as the FLAMES ERUPT into the TWILIGHT SKY.

                                                    INTERCUT WITH:

EXT. MINAS TIRITH STREETS

ANGLE ON: GANDALF as the BEACONS burst into FLAMES ... His.
eyes flash briefly with TRIUMPH before he hurries off ...

EXT. MINAS TIRITH BATTLEMENTS - DUSK

ANGLE ON: The BEACON glows BRIGHTLY on the slopes of MOUNT
MINDOLLUIN, high above MINAS TIRITH ...

PULL BACK: GANDALF hurries to the BATTLEMENT, looking further
west along the WHITE MOUNTAINS.

                     GANDALF
               (to himself)
          Amon Din ... come on . . .

ANGLE ON: a bright FIRE ignites on a DISTANT MOUNTAIN PEAK.


                                                       (CONTINUED)

                                     Final Revision - October, 2003 43.
CONTINUED:


NOISY COMMOTION in the city as PEOPLE realise the BEACONS
have been lit!

                        SOLDIER
                  (yelling)
             The beacon! The beacon at Amon Din is lit!

FLASH INSERT: DENETHOR staring�at the BEACON from the CITADEL
WINDOW . . . a look of BLACK FURY on his face.

ANGLE ON: GANDALF, a strange smile plays on his face . . .

                        GANDALF
                  (to himself)
             Hope is kindled.

                                                            CUT TO:

EXT. WHITE MOUNTAINS AERIAL - NIGHT

AERIAL SHOT: MOVING over the WHITE MOUNTAINS . . . as the TRAIL
of GREAT FIRES slowly winds from PEAK TO PEAK.

EXT. EDORAS COURTYARD - DAWN

ANGLE ON: A ROCKY PEAK high above EDORAS . . . a GREAT BEACON
FIRE is IGNITED.

ON THE SOUNDTRACK: A BELL TOLLS urgently!

CLOSE ON: ARAGORN looks tensely out across the MOUNTAINS . . .

PULL BACK . . . ARAGORN runs towards the GOLDEN HALL.

INT. EDORAS, GOLDEN HALL - DAWN

CLOSE ON: ARAGORN bursts into the GOLDEN HALL.

                       ARAGORN
             The beacons of Minas Tirith! The beacons
             are lit! Condor calls for aid!

ANGLE ON: THEODEN looks up startled.


                                                        (CONTINUED)

                                     Final Revision - October, 2003 44,
CONTINUED:


CLOSE ON: EOWYN, EOMER turn to look at their UNCLE ... tension
builds.

CLOSE ON: THEODEN his head lowered . . . Slowly it rises - he
looks ARAGORN in the EYE.

                        THEODEN
             Then Rohan will answer. Muster the
             Rohirrim!

EXT. EDORAS COURTYARD - DAWN

WIDE ON: EDORAS LOOKOUT . . . A SOLDIER RINGING the GREAT BELL
in alarm as below, in the COURTYARD, SOLDIERS mount their
STEEDS amid great activity.

ANGLE ON: THEODEN striding purposefully outside, flanked by
EOMER and his SOLDIERS ...

                     THEODEN
          Assemble the army at Dunharrow - as many
          men as can be found. You have two days ...
          On the third, we ride for Condor ... and
          war!

ANGLE ON: THEODEN strides onto the PARAPETS . . .

                        THEODEN (cont'd)
             Gamling, make haste across the Riddermark
             ... Summon every able-bodied man to
             Dunharrow!

ANGLE ON: THEODEN watches as below the SOLDIERS prepare.

ANGLE ON: EOWYN hurriedly pulling on RIDING GLOVES, preparing
to mount her HORSE.

                       ARAGORN
             You ride with us?

EOWYN turns and runs SMACK into ARAGORN ...

                     EOWYN
          Just to the encampment. It's tradition for
          the women of the Court to farewell the men.
                                                     (CONTINUED)

                                     Final Revision - October, 2003 45.
CONTINUED:


ARAGORN smiles . . . reaching past her, he lifts a cover to reveal
a SWORD, strapped to the side of the saddle of her HORSE.

EOWYN deftly pulls the cover back down. She looks at ARAGORN.

                        EOWYN (cont'd)
                  (softly)
             The Men have found their Captain - they
             will follow you into battle, even to death.
                  (quietly)
             You have given us hope.

PULL BACK: to reveal THEODEN stares around at the STREETS and
PEOPLE of EDORAS . . . it is as if he knows he will not see
this place again.

                       THEODEN V/0
             So . . . It is before the walls of Minas
             Tirith that the doom of our time will be
             decided.

ANGLE ON: EOMER astride his horse, calls to the assembled
SOLDIERS . . .

                        EOMER
             Now is the hour! Riders of Rohan - oaths
             you have taken. Now, fulfil them all - to
             Lord and land!

EXT. PLAINS OF ROHAN - DAY

ANGLE ON: THEODEN astride SNOWMANE, as he, EOMER, ARAGORN &
MERRY and LEGOLAS & GIMLI ride out AMID a GREAT COLUMN of
ROHIRRIM, THUNDERING towards DUNHARROW in the MOUNTAINS.

EXT. WEST OSGILIATH, RIVER ANDUIN - DAY

ANGLE ON: FARAMIR and his MEN are fighting a losing BATTLE
against the MORDOR invasion.

                        MADRIL
             We can't hold them. The city is lost!




                                                         (CONTINUED)

                                    Final Revision - October, 2003 46.
CONTINUED:


                       FARAMIR
             Tell the men to break up. We ride for Minas
             Tirith.

ON THE SOUNDTRACK: OMINOUS SOUNDS of WIND RISING ... HUGE
WINGS BEATING ...

                       RANGER
             Nazgul!

SPINNING ANGLE: FARAMIR looks up at the SKY . . . ITHILIEN
RANGERS are suddenly nervous, frightened . . . A HUGE SHADOW
passes overhead!

                       FARAMIR
             Take cover!

A SUDDEN TERRIFYING SHRIEK rends the AIR!

                       FARAMIR (cont'd)
             Pull back! Pull back to Minas Tirith!

ANGLE ON: SOLDIERS RETREATING through the RUINS of the CITY
as, high in the sky above, the NAZGUL swoop ...

ANGLE ON: MADRIL as he is cut down by an ORC . . .

CLOSE ON: MADRIL . . . his breathing quick and shallow . . .
footsteps approach . . .

ANGLE ON: The HIDEOUSLY deformed features of GOTHMOG standing
over the prone figure of the INJURED RANGER.

Grabbing a spear from a nearby underling, GOTHMOG drives the
shaft into MADRIL'S chest . . .

CLOSE ON: GOTHMOG surveys the carnage with satisfaction.

                      GOTHMOG
           The age of men is over. The time of the Ore
           has come.

                                     Final Revision - October, 2003 47.



EXT. PELENNOR FIELDS - DAY

FARAMIR and a few survivors flee WEST OSGILIATH, desperately
riding toward MINAS TIRITH . . . in the SKY above DARK SHAPES
pursue them ...

ANGLE ON: SUDDENLY, from on HIGH, the NAZGUL strike!

TILT DOWN ... following the NAZGUL as it SWOOPS out of LOW-
LYING, MURKY CLOUDS tossing MEN in the AIR like LIMP RAG-DOLLS!

AT THAT MOMENT: Across the PLAIN, a FIGURE clothed in WHITE
rides towards them!

From the BATTLEMENTS of MINAS TIRITH, a call . . . "The White
Rider!"

EXT. PELENNOR FIELDS - DAY

WIDE ON: GANDALF as he spurs SHADOWFAX forward! PIPPIN clings
tightly to the great horses MANE.

ANGLE ON: FARAMIR, SWORD in hand, remains at the REAR, trying
desperately to fend off the DEADLY ASSAULT . . .

AGAIN the FELL-BEASTS DIVE low ...

GANDALF thunders into view, raising his STAFF ...

A SHAFT OF WHITE LIGHT suddenly stabs upwards! The NAZGUL
SWERVES AWAY from the LIGHT, as it pierces the LOW CLOUD!

For a BRIEF MOMENT, SUNLIGHT streams through the hole onto
PELENNOR FIELDS . . . The NAZGUL circle away from the SUN RAYS,
swiftly spiralling higher and higher.

The NAZGUL defeated, GANDALF and the RANGERS ride towards the
safety of MINAS TIRITH.

EXT. MINAS TIRITH GATES - DAY

ANGLE ON: IORLAS runs towards the GATES, yelling . . .

                     IORLAS
          Open the Gates! Pull!
                                                      (CONTINUED)

                                         Final Revision - October, 2003 48,
CONTINUED:


The GREAT GATES OPEN, allowing GANDALF, PIPPIN, FARAMIR and
the OSGILIATH SURVIVORS to RIDE IN . . . Nearly 100 WOUNDED AND
SHOCKED MEN.

AS GANDALF pulls SHADOWFAX up . . .

                        FARAMIR
             Mithrandir!

ANGLE ON: FARAMIR STEERS HIS HORSE through the CROWD towards
GANDALF ...

                        FARAMIR   (cont'd)
             They broke through    our defences. They have
             taken the bridge a   nd the West Bank.
             Battalions of Ores    are crossing the River.

                        IORLAS
             It is as the Lord Denethor predicted - long
             has he foreseen this doom!

                        GANDALF
             Foreseen and done nothing!

FARAMIR suddenly STARES at PIPPIN. GANDALF reads the surprise
in his eyes.

                       GA ND ALF (c on t'd )
             Faramir? ... This is not the first halfling
             to have crossed your path ...

FARAMIR shakes his head.

                       FARAMIR
             No.

                        PIPPIN
                  (disbelief)
             You've seen Frodo and Sam?

FARAMIR NODS.

                        GANDALF
             Where? When?


                                                          (CONTINUED)

                                      Final Revision - October, 2003 49.
CONTINUED: ( 2 )


                      FARAMIR
            In Ithilien, not two days ago. Gandalf -
            they are taking the road to the Morgul
            Vale.

                       GANDALF
                 (shocked realisation)
            . . . And then the Pass of Cirith Ungol.

CLOSE ON: GANDALF, deeply troubled.

                       PIPPIN
            What does that mean? What's wrong?

                        GANDALF
                 (urgent)
            Faramir . . . Tell me everything.

EXT. CIRITH UNGOL STAIRS - NIGHT

ANGLE ON: FRODO and SAM following GOLLUM up the dizzying
STAIRWAY, carved into the SHEER CLIFF.

The STEPS are NARROW, UNEVENLY SPACED, and many are BROKEN.
They are so STEEP that FRODO and SAM climb as if on a LADDER �
their desperate FINGERS clinging to the STEPS ABOVE - trying
not to look at the LONG BLACK FALL below them.

ANGLE ON: FRODO'S foot slips and for a brief moment he is
HANGING PRECARIOUSLY from the ROCK-FACE.

                      GOLLUM
            Careful, Master - careful! Very far to
            fall. Very dangerous on the stairs.

EXT. CIRITH UNGOL LEDGE - NIGHT

ANGLE ON: GOLLUM peering down from ABOVE . . . he has reached a
SMALL LEDGE.

                      GOLLUM
           Come, Master.




                                                       (CONTINUED)

                                      Final Revision - October, 2003 50.
CONTINUED:


CLOSE ON: FRODO tries to CLAMBER UP onto the LEDGE . . . as he
does, the RING slips out of his SHIRT and DANGLES in FULL
VIEW of GOLLUM!

CLOSE ON: GOLLUM rears back in shock . . . tenses like a CAT,
EYES WIDENING.

                        GOLLUM (cont'd)
                  (dreamlike)
             Come to Smeagol.

ANGLE ON: FRODO, head bowed, trying to pull himself up. He
doesn't notice GOLLUM'S HAND reaching for the RING !

CLOSE ON: GOLLUM'S FINGERS . . . closing in on the RING   ...

ANGLE ON: SAM, still TEETERING on the PRECIPITOUS STAIRS
DRAWS HIS SWORD!

                        SAM
                  (alarmed yell)
             Mr Frodo!

STARTLED, FRODO looks down at SAM, losing his footing in the
process . . .

                        SAM (cont'd)
             Get back, you. Don't touch him!

ANGLE ON: SAM'S horrified face as . . .

GOLLUM'S out-stretched HAND suddenly GRASPS FRODO'S ARM
pulling him SAFELY onto the LEDGE.

GOLLUM glares down at SAM.

                       GOLLUM
             Why does he hates poor Smeagol? What has
             Smeagol ever done to him? Master?

CLOSE ON: GOLLUM blinks, masking the MALICE of his EYES with
their heavy pale lids.




                                                        (CONTINUED)

                                      Final Revision - October, 2003 51.
CONTINUED: (2)


                      GOLLUM (cont'd)
           Master carries heavy burden . . . Smeagol
           knows . . . Heavy, heavy burden. Fat one
           cannot know. Smeagol look after Master.

CLOSE ON: GOLLUM creeps CLOSE to FRODO and WHISPERS in his
ear:

                        GOLLUM (cont'd)
                  (rasping whisper)
           He   wants it - he needs it. Smeagol sees it
           in   his eye. Very soon he will ask you for
           it   - you will see . . . the Fat One will take
           it   from you.

CLOSE ON: FRODO looking at SAM . . . his hand strays to his
NECK, closing tight around the RING.

                                                             CUT TO:

EXT. OSGILIATH - DAY

HIGH ABOVE OSGILIATH, the SINISTER PROFILE of the WITCH KING
seated on a FELL BEAST as GOTHMOG stands, awaiting his
orders.

                      WITCH KING
                (clinical)
           Send forth all legions. Do not stop the
           attack until the city is taken. Slay them
           all.

                      GOTHMOG
           What of the Wizard?

SLOWLY the WITCH KING' S HEAD turns . . .

                     WITCH KING
           I shall break him.

EXT. MINAS TIRITH BATTLEMENTS - DAY

REACTIONS: OF GONDORIAN SOLDIERS upon the MINAS TIRITH
BATTLEMENTS . . . AWE . . . FEAR . . . TERROR!


                                                       (CONTINUED)

                                       Final Revision - October, 2003 52,
CONTINUED:


ANXIOUS SOLDIERS crowd around GANDALF.

                        SOLDIER 1
                  (worried)
             Where are Theoden's riders?

                        SOLDIER 2
             Will Rohan's army come?

                       SOLDIER 1
             Mithrandir?

                          G AN DA LF
                 (grim)
             Courage is the best defence that you have
             now.

                                                             CUT TO:

INT. MINAS TIRITH TOWER HALL - DAY

CLOSE ON: PIPPIN . . . DRESSED in OVER-SIZED ARMOUR . . . kneels
before DENETHOR . . .

                        PIPPIN
                  (nervous)
             Here do I swear fealty and service to
             Gondor, in peace or war, in living or
             dying, from this hour henceforth, until my
             lord release me, or death take me.

                        DENETHOR
             And I shall not forget it, nor fail to
             reward that which is given ...

ANGLE ON: DENETHOR proffers his RING which PIPPIN kisses . . .

                       DENETHOR (cont'd)
             ... fealty with love ...

DENETHOR gently raises PIPPIN'S head . . . DENETHOR'S eyes meet
FARAMIR' S.

                       DENETHOR (cont'd)
             ... valour with honour ...
                                                         (CONTINUED)

                                     Final Revision - October, 2003 53.
CONTINUED:


DENETHOR crosses to a table ... Attendants BEGIN SERVING him
a ME L . . .
    A

                       DENETHOR (cont'd)

             ... disloyalty with vengeance.

DENETHOR addresses his meal . . .

                        DENETHOR (cont'd)
                  (reasonable)
             I do not think we should so lightly abandon
             the outer defences; defences that your
             brother long held intact.

                        FARAMIR
             What would you have me do?

                       DENETHOR
             I will not yield the River and Pelennor
             unfought - Osgiliath must be retaken.

                        FARAMIR
             My Lord, Osgiliath is overrun.

                        DENETHOR
             Much must be risked in war. Is there a
             Captain here who still has the courage to
             do his Lord's will?

CLOSE ON: FARAMIR as he finally realises the truth.



                        FARAMIR
                  (quietly)
             You wish now that our places had been
             exchanged, that I had died and Boromir had
             lived?

CLOSE ON: For a brief second, DENETHOR seems to hesitate,
then ...




                                                         (CONTINUED)

                                     Final Revision - October, 2003 54,
CONTINUED: ( 2 )


                        DENETHOR
                 (coldly)
            Yes, I wish that.

                       FARAMIR
            Since you are robbed of Boromir, I will do
            what I can in his stead.

ANGLE ON: FARAMIR bows low to DENETHOR, then turns to leave,
stops, turns back ...

                       FARAMIR (cont'd)
            If I should return ... think better of me,.
            father.

                       DENETHOR
            That will depend on the manner of your
            return.

DENETHOR continues with his meal. FARAMIR exits.

                                                             CUT TO:

EXT. CIRITH UNGOL LEDGE - DAWN

AERIAL SHOT: . . . HIGH above MINAS MORGUL, on the SMALL LEDGE
next to the STAIRS, LIE the FIGURES of FRODO, SAM and GOLLUM.

SAM watches a sleeping GOLLUM suspiciously as he desperately
tries to stay awake. SLOWLY, INEVITABLY, SAM, falls asleep.

CLOSE ON: GOLLUM'S EYES SNAP OPEN . . . he sits up and quietly
crawls towards SAM'S KNAPSACK.

SAM breathes deeply now, heavily asleep.

GOLLUM grimaces in DISTASTE as he pulls out the LEMBAS BREAD
. .. Quietly he SPRINKLES CRUMBS over the sleeping SAM.

ANGLE ON: GOLLUM as he throws the remaining LEMBAS BREAD over
the cliff.

CLOSE ON: SAM'S EYES flick open . . . GOLLUM spins around,
caught off guard . . .


                                                      (CONTINUED)

                                       Final Revision - October, 2003 55.
CONTINUED:


                        SAM
             What are you up to? Sneaking off, are we?

                        SMEAGOL
                  (prevaricating)
             Sneaking? Sneaking? Fat Hobbit is always so
             polite. Smeagol shows them secret ways that
             nobody else could find and they say
             "Sneak!", "Sneak!". Very nice friends, oh
             yes, my Precious, very nice.

                        SAM
             Alright, alright - you just startled me is
             all.
                  (peering over the cliff's edge)
             What were you doing?

                          SMEAGOL
                  (sly)
             Sneaking!

Too exhausted to argue, SAM turns away.

                        SAM
             Fine, have it your own way.

SAM gently shakes FRODO'S shoulder.                            -

                        SAM (cont'd)
             Sorry to wake you, Mr Frodo. We have to be
             moving on.

SAM rummages through his KNAPSACK, looking for a bite to eat.
FRODO sits up slowly.

                        FRODO                              .
             It's dark still.

                        SAM
             It's always dark here -

CLOSE ON: SAM stops rummaging . . . SHOCK on his face.

                        SAM (cont'd)
             It's gone . . . the Elven bread!

                                                         (CONTINUED)

                                    Final Revision - October, 2003 56.
CONTINUED: ( 2 )


                       FRODO
                (alarmed)
           What? That's all we have left!

SAM slowly turns to GOLLUM ...

                      SAM
                (dawning realisation)
           He took it! He must have!

                      GOLLUM
                (shocked)
           Smeagol? No, no, not poor Smeagol. Smeagol
           hates nasty Elf bread!

                     SAM
           You're a lying wretch! What did you do with
           it?

                      FRODO
           He doesn't eat it . . . he can't have taken
           it.

CLOSE ON: GOLLUM slaps his hand against SAM'S JACKET . . .
sending LEMBAS CRUMBS RAINING DOWN!

                      GOLLUM
           What's this? Crumbs on his jacketses!
                (fake outrage)
           He took it! He took it! I seen him, he's
           always stuffing himself when Master's not
           looking!

                       SAM
                (angry)
           That's a filthy lie!

SAM is ENRAGED . . . he throws himself at GOLLUM .. punching
him!

                       SAM (cont'd)
                 (yelling)
           You stinking two-faced sneak! Call me a
           thie . . .
               f


                                                       (CONTINUED)

                                     Final Revision - October, 2003 57.
CONTINUED: ( 3 )


                        FRODO
                 (yelling)
            Sam! Stop it!

FRODO pulls SAM off GOLLUM ...

                        SAM
                 (yelling)
            I'll kill him! I'll kill him!

                        FRODO
            No, Sam!

FRODO COLLAPSES on the GROUND!

CLOSE ON: SAM'S horrified face!

                       SAM
            Alight, I'm sorry, I didn't mean for it to
            go so far, I was so angry . . . Here, let's
            rest up a bit.

SAM attempts to fuss around FRODO ...

                       FRODO
                  (exhausted)
            I ' m alright.

                      SAM
           No, no, you're not alright! You're
           exhausted! It's that Gollum; it's this
           place; it's that thing around your neck. I
           could help a bit . . . I could carry it for a
           while - share the load.

CLOSE ON: A terrible light comes into FRODO'S eyes as he
STARES into the EARNEST eyes of SAM.

                       FRODO
           Get away!

FRODO pushes SAM away, clutching at the RING beneath his shirt




                                                          (CONTINUED)

                                          Final Revision - October, 2003 58.
CONTINUED: ( 4 )


                       SAM
                 (confused)
            I don't want to keep it . . . I just want to
            help!

FRODO rises to his FEET, as if empowered with a frightening
intense ENERGY.

                       GOLLUM
            See! See! He wants it for himself.

                       SAM
                 (beside himself)
            Shut up, you! Go away. Get out of here.

CLOSE ON: FRODO ...

                         FRODO
                  (quietly)
            No, Sam . . . it's you.

SAM stares at FRODO with DISBELIEF.
                                      /

                       FRODO (cont'd)
            I'm sorry, Sam ...

CLOSE ON: TEARS WELL in SAM'S eyes . . .

                       SAM
                 (hopelessly)
            But . . . he's a liar . . . he's poisoned you
            against me.

                       FRODO
            You can't help me anymore.

                       SAM
            You don't mean that.

                       FRODO
                 (eerie calm)
            Go home.

CLOSE ON: TEARS spill down SAM'S cheeks . . . as FRODO TURNS AWAY!


                                                            (CONTINUED)

                                      Final Revision - October, 2003 59.
CONTINUED: (5)


ANGLE ON: FRODO and GOLLUM leave . . . SAM is in complete
MISERY.

EXT. MINAS TIRITH STREETS - DAY

ANGLE ON: FARAMIR leading a COLUMN of 200 KNIGHTS through the
STREETS towards the CITY GATE ... PEOPLE are rushing forward,
THROWING FLOWERS over the KNIGHTS.

CLOSE ON: GANDALF hurries alongside FARAMIR'S HORSE.

                    GANDALF
          Faramir! Your father's will has turned to
          madness! Do not throw away your life so
          rashly!

                     FARAMIR
               (deadened)
          Where does my allegiance lie if not here?

GANDALF reads the PAIN in FARAMIR'S eyes . . . he calls after
him, trying one more time to stop the YOUNG MAN.

                     GANDALF
          Your father loves you, Faramir!
               (quietly)
          And will remember it before the end.

EXT. MINAS TIRITH BATTLEMENTS - DAY

HIGH ANGLE: FARAMIR leads the 200 MOUNTED KNIGHTS through the
GATES OF MINAS TIRITH and across the PELENNOR FIELDS towards
the RUINS of OSGILIATH.

ANGLE ON: The people of MINAS TIRITH watch from the
BATTLEMENTS.

HIGH WIDE: FARAMIR'S KNIGHTS FAN OUT . . .   to form one straight
line of 200 HORSEMEN.

EXT. WEST OSGILIATH - DAY

GOTHMOG and his MEN watch as the KNIGHTS approach.

                                      Final Revision - October, 2003 60,



INT. TOWER HALL, MINAS TIRITH - DAY

FAST PUSH IN . . . to PIPPIN looking on as DENETHOR eats.

                      DENETHOR
           Can you sing, Master Hobbit?

                      PIPPIN
                (uneasy)
           Well . . . yes, at least, well enough for my
           own people ... but we have no songs for
           great halls and evil times . . . we seldom
           sing of anything more terrible than wind or
           rain.

                      DENETHOR
           And why should your songs be unfit for my
           halls, or for hours such as these. Come -
           sing me a song!

PIPPIN'S simple, clear voice echoes through the VAST HALL.

                      PIPPIN V/0
           Home is behind, the world ahead,
           And there are many paths to tread.
           Through shadow to the edge of night
           Until the stars are all alight.
           Mist and shadow, cloud and shade:
           All shall fade, all shall fade.

                                                    INTERCUT WITH:

EXT. PELENNOR FIELDS/OSGILIATH RUINS - DAY

ANGLE ON: SLOW MOTION . . . TRACKING WITH THE 200 MOUNTED
KNIGHTS.

ANGLE ON: SLOW MOTION . . . GOTHMOG rises amidst the RUINS of
OSGILIATH.

ANGLE ON: SLOW MOTION . . . FARAMIR'S KNIGHTS - 75 yards away -
thundering towards camera.

PULL BACK . . . to GOTHMOG . . . he turns to CAMERA and RAISES
HIS BOW.
                                                       (CONTINUED)

                                      Final Revision - October, 2003 61
CONTINUED:


ANGLE ON: SLOW MOTION . . . Behind GOTHMOG - all over the
RUINED CITY - 5000 ORC ARCHERS rise to their feet . . . BLACK
ARROWS already strung on their BOWS!

CLOSE ON: SLOW MOTION . . . FARAMIR YELLING defiantly.

WIDE PROFILE: SLOW MOTION . . . FARAMIR'S 200 KNIGHTS ride
straight into a BLACK WALL of FLYING ARROWS . . .

AS ONE, the HORSES and HORSEMEN collapse into a CARTWHEELING,
TUMBLING HEAP . . . within seconds all are MOTIONLESS.

CLOSE ON: NORMAL SPEED . . . FAST CUTS of SCREAMING ORCS . . .

INT. TOWER HALL, MINAS TIRITH - DAY

THROUGHOUT the above sequence DENETHOR has continued to EAT.

ANGLE ON: PIPPIN finishes his bittersweet song . . . he looks
up at DENETHOR who continues as if he has not sent his son to
his death.

ANGLE ON: PIPPIN turns away, his SORROW etched on his YOUNG
FACE ...

EXT. MINAS TIRITH COURTYARD - DAY

GANDALF sits quietly in a COURTYARD, alone, defeated.

EXT. OSGILIATH BRIDGE - DAY

GREAT SIEGE TOWERS and CATAPULTS are ROLL along the REPARIED
BRIDGE which spans both sides of OSGILIATH ... They head
straight towards MINAS TIRITH ...

EX. DUNHARROW ENCAMPMENT - DUSK

ANGLES ON: ARAGORN, THEODEN, EOMER, MERRY, LEGOLAS and GIMLI
GALLOP into a VAST CAMP beneath the COVER OF TREES ...
TEEMING with MEN, HORSES and TENTS.

ANGLE ON: THEODEN acknowledges GRIMBOLD, a MARSHALL OF ROHAN,
as he passes by a GROUP of SOLDIERS.



                                                        (CONTINUED)

                                              Final Revision - October, 2003 62
CONTINUED:


                        THEODEN
             Grimbold, how many?

                        GRIMBOLD
             I bring five hundred men from the Westfold,
             my Lord.

                        ROHAN MARSHALL (0.S.)
             We have three hundred more from Fenmarch,
             Theoden, King.

THEODEN smiles grimly as he rides on.

                        DENETHOR
                  (quietly)
             Where are the riders from Snowbourne?

                        GAMLING ( O . S . )
             None have come, My Lord.

EXT. DUNHARROW PLATEAU - DUSK

ARAGORN joins THEODEN on a BLUFF overlooking the ENCAMPMENT
BELOW ...

CAMERA CRANES to REVEAL: THOUSANDS of MEN and HORSES! Smoke
from many small CAMP-FIRES has filled the VALLEY with a
TWILIGHT HAZE.

                         THEODEN
                  (quietly)
             Six thousand spears . . . less than half of
             what I had hoped for . . .

ANGLE ON: ARAGORN turns to THEODEN ...

                       ARAGORN
             Six thousand will not be enough to break
             the lines of Mordor.

                     THEODEN
          More will come.




                                                              (CONTINUED)

                                       Final Revision - October, 2003 63.
CONTINUED:


                       ARAGORN                 ;
             Every hour lost hastens Condor's defeat. We
             have till dawn. Then we must ride.

CLOSE ON: THEODEN realising what ARAGORN is saying - no
matter the numbers he must commit to war by the morning.
THEODEN nods.

The HORSES whinny loudly in the distance ... THEODEN looks up
at the MOUNTAIN which looms behind them . . .

EXT. DUNHARROW PLATEAU - DUSK

ANGLE ON: HORSES rearing in terror as ROHAN SOLDIERS try to
quieten them ...

ANGLE ON: LEGOLAS and GIMLI move through the CAMP . . .

CLOSE ON: LEGOLAS looking at a group of ROHAN SOLDIERS . . .
they sit quiet and hunched ... no-one speaking ...

LEGOLAS looking toward EOMER who is unsaddling his HORSE ...

                        LEGOLAS
                  (uneasy)
             The horses are restless . . . And the men are -;.
             quiet ..?

                          EOMER
             They grow nervous in the shadow of the
             mountain . . .

GIMLI'S eyes travel to a ROW of ANCIENT STANDING STONES that
mark the ENTRANCE to a ROAD leading away from the ENCAMPMENT
and INTO the MOUNTAIN.

                       GIMLI
             That road there - where does that lead?

                       LEGOLAS
             It is the road to the Dimholt ... The door
             under the mountain.




                                                         (CONTINUED)

                                     Final Revision - October, 2003 64
CONTINUED:


                         EOMER
             None who venture there ever return.
                  (under his breath)
             That mountain is evil . . .

ANGLE ON: ARAGORN stands before the road as though transfixed
... before him a HORSE whinnies and pulls at his ropes
nervously . . .

ARAGORN POV: A GHOSTLY FIGURE seems to emerge from the gloom
... ARAGORN starts in fright as . . .

                        GIMLI O.S
             Aragorn!

ANGLE ON: ARAGORN stares down at the LITTLE DWARF . . .

                        GIMLI
             Let's find some food.

ARAGORN casts another look back at the ANCIENT STANDING
STONES before following GIMLI.

EXT. DUNHARROW PLATEAU - DUSK

ANGLE ON: All is quiet in the ENCAMPMENT...

INT. EOWYN'S TENT, DUNHARROW - NIGHT

ANGLE ON: EOWYN kneels before MERRY, adjusting his HELMET
STRAP.

                        EOWYN
             There! A true Esquire of Rohan.

MERRY exhales - excited and terrified in equal measure. In
his EXCITEMENT, he draws his SWORD ...

EOWYN steps back, laughing ...

                        MERRY
             Sorry. It isn't all that dangerous.
                  (despondent)
             It isn't even sharp.


                                                     (CONTINUED)

                                     Final Revision - October, 2003 65,
CONTINUED:


                       EOWYN
             Well, that's no good. You won't kill many
             Ores with a blunt blade. Come on.

EXT. DUNHARROW PLATEAU - NIGHT

As EOWYN and MERRY leave the tent, EOMER and GAMLING are
sitting nearby, finishing a meal ... EOWYN ushers MERRY off.

                        EOWYN
             To the Smithy .- go!

MERRY hurries off    . . . EOMER watches the YOUNG HOBBIT leave.

                        EOMER
             You should not encourage him.

                        EOWYN
             And you should not doubt him.

                        EOMER
             I do not doubt his heart ... Only the reach
             of his arm.

CLOSE ON: GAMLING stifles a laugh . . . EOWYN turns on both of
te .. .
 hm                                                      .

                        EOWYN
             Why should Merry be left behind? He has as
             much cause to go to war as you.
                  (to herself)
             Why can he not fight for those he loves?

ANGLE ON: At the PLATEAU edge, a GUARD looks down the STEEP
PRECIPICE as a HORSE and RIDER move along the RIDGE ...

EXT. DUNHARROW TRACK - NIGHT

ANGLES ON: The HOODED FIGURE slowly RIDES up the NARROW ZIG-
ZAG TRACK leading up to the PLATEAU ...

INT. ARAGORN'S TENT, DUNHARROW - NIGHT

ANGLE ON: ARAGORN tosses in his SLEEP, disturbed by images
and voices . . .
                                                      (CONTINUED)

                                       Final Revision - October, 2003 66.
CONTINUED:


                        GANDALF V/0
             Look to the Black Ships . . .

In ARAGORN'S dream ARWEN suddenly WAKES ...

                        ARWEN V/0
             I choose a mortal life . . . I wish I could
             have seen him, one last time ...

As ARWEN lies dying, the EVENSTAR falls from her fingers ...
At that moment, ARAGORN wakes, his SWORD quickly in his HAND
. . . A GUARD stands in the DOORWAY ...

                        GUARD
             King Theoden awaits you, my Lord.

EXT. DUNHARROW PLATEAU - NIGHT

ARAGORN hurries towards THEODEN'S TENT ...

INT. THEODEN'S TENT, DUNHARROW PLATEAU - NIGHT

ANGLE ON:- THEODEN looks up as ARAGORN enters.

                       THEODEN
             I take my leave.

ANGLE ON: THEODEN bows slightly to the HOODED FIGURE and
LEAVES, shooting ARAGORN a strange look as he goes ...

CLOSE ON: The FIGURE stands and pulls back the HOOD . . . to
reveal ... ELROND.

                    ARAGORN
          My Lord, Elrond.

                       ELROND
             I come on behalf of one whom I love.

ELROND'S face is ETCHED with PAIN ...

                    ELROND (cont'd)
          Arwen is dying.

ANGLE ON: ARAGORN receiving this news ... ASHEN-FACED.
                                                       (CONTINUED)

                                     Final Revision - October, 2003 67.
CONTINUED:


                        ARAGORN
             She stayed?

                       ELROND
             She will not long survive the evil that now
             spreads from Mordor.

ELROND'S eyes fall to the EVENSTAR which hangs around
ARAGORN'S neck . . .

                        ELROND (cont'd)
             The light of the Evenstar is failing. As
             Sauron's power grows, her strength wanes.
             Arwen's life is now tied to the fate of the
             Ring. The Shadow is upon us, Aragorn, the
             end has come.

                       ARAGORN
             It will not be our end, but his.

                         ELROND
             You ride to war, but not to victory.
             Sauron's armies march on Minas Tirith -
             this you know - but in secret he sends
             another force which will attack from the
             river . . .

CLOSE ON: ARAGORN looks at ELROND in shock.

                       ELROND (cont'd)
             A fleet of Corsair ships sails from the
             South.

FLASH INSERT: A FLEET of BLACK SAILS moving along a SILVER
RIBBON of WATER .

                        ELROND (cont'd)
             They will be in the city in two days . . .
             You're out-numbered, Aragorn. You need more
             men.

                        ARAGORN
             There are none.

ELROND hesitates a BEAT ...

                                                        (CONTINUED)

                                        Final Revision - October, 2003 68
CONTINUED: (2)


                      ELROND
                (quietly)
           There are those who dwell in the mountain.

A SUDDEN WIND rushes through the TENT, lifting HANGINGS,
scattering MAPS, knocking over GOBLETS . . .

As ARAGORN looks at ELROND, an IMAGE FLASHES in his MIND'S
EYE . . . The GHOSTLY FIGURE on the DIMHOLT ROAD . . .

ARAGORN looks at ELROND in shock . . .

                    ARAGORN
          Murderers, traitors - you would call upon
          them to fight? They believe in nothing.
          They answer to no-one.

                     ELROND
          They will answer to the King of Condor.

ARAGORN' S eyes fall to a PLAIN BLACK SCABBARD, which ELROND
draws from beneath his robes.

CLOSE ON: ELROND' S long white fingers draw the hilt of a
SWORD from the scabbard to reveal . . . a ELVEN SWORD glints in
the firelight!

                     ELROND (cont'd)
          Anduril, flame of the West . . . forged from
          the shards of Narsil.

ARAGORN takes the sword . . . staring at it in wonder.

                        ARAGORN
          Sauron will not have forgotten the sword of
          Elendil . . .

ARAGORN draws the long blade from its sheath . . .

                     A RAG OR N (c on t' d)
          . . . the blade that was broken shall return
          to Minas Tirith.




                                                        (CONTINUED)

                                      Final Revision - October, 2003 69.
CONTINUED: ( 3 )


                      ELROND
            The man who can wield the power of this
            sword can summon to him an army more deadly
            than any that walks this earth.

ELROND stares hard at ARAGORN . . .

                      ELROND (cont'd)
            Put aside the Ranger - become who you were
            born to be - take the Dimhplt Road.

A HEAVY SILENCE hangs in the room.

                         ELROND (cont'd)
                  (ELVISH: with subtitles)
            Onen i-estel Edain.
         /, ,-,                       ARAGORN
                 (ELVISH: with subtitles)
            U-chebin estel anim.
            I keep none for myself.

ANGLE ON: ARAGORN re-sheathes the SWORD.

EXT. DUNHARROW PLATEAU - NIGHT

ANGLE ON: As ARAGORN readies BREGO for leaving EOWYN
approaches ... her temper barely held in check.

                       EOWYN
            Why are you doing this?

ARAGORN looks over his shoulder at her . . .

                      EOWYN (cont'd)
            The war lies to.the East. You cannot leave
            on the eve of battle. You cannot abandon         ;
            the men.

                          ARAGORN
            Eowyn . . .

                   � EOWYN
            We need you here -                    ,
                                                          (CONTINUED)

                                      Final Revision - October, 2003 70.
CONTINUED:


ARAGORN rounds on her ...

                       ARAGORN
             Why have you come?

                        EOWYN
                  (hesitant)
             Do you not know?

ARAGORN looks at her sadly, not wanting to hurt her.

                        ARAGORN
                  (gentle)
             It is but a shadow and a thought that you
             love . . . I cannot give you what you seek.

EOWYN steps back at though STRUCK . . . she watches stricken as
ARAGORN leaves . . .

EXT. DUNHARROW PLATEAU'- NIGHT

ANGLE ON: ARAGORN leads his horse through the TENTS towards
the DIMHOLT ROAD.

A LIGHT FLARES ahead.of him . . .

ANGLE ON: A SHORT FIGURE steps out of the SHADOWS . . . PIPE in
hand.

                        GIMLI
             And just where do you think you're off to?

ARAGORN looks at GIMLI - GRATEFUL for his COURAGE but
determined to go ALONE.

                        ARAGORN
             Not this time ... This time you must stay,
             my friend.

                        LEGOLAS O.S
             Have you learnt nothing of the stubbornness
             of Dwarves?

ANGLE ON: ARAGORN looks at LEGOLAS as he appears, leading his
HORSE - already SADDLED.
                                                           (CONTINUED)

                                     Final Revision - October, 2003 71.
CONTINUED:


GIMLI steps closer to ARAGORN.

                        GIMLI
             You might as well accept it - we're going
             with you, laddie.

ARAGORN shakes his head, smiling his acceptance.

ANGLE ON: ARAGORN, LEGOLAS and GIMLI as they slowly ride
towards the BACK of the PLATEAU . . . Past the ANCIENT
STANDING STONES that lead to the NARROW PASS.

EXT. DUNHARROW PLATEAU - NIGHT

ANGLE ON: THEODEN and GAMLING watch the RETREATING FIGURES of
ARAGORN, LEGOLAS and GIMLI ... ROHAN SOLDIERS emerge from
their tents, crestfallen to see ARAGORN leave.

ARAGORN, LEGOLAS and GIMLI disappear into the SHADOWS of the
MOUNTAINS. The ROHAN SOLDIERS murmur among themselves,
"What's happening?", "Where's he going?"

                    GAMLING
          Lord Aragorn!

                    ROHAN SOLDIER O.S.
          Why does he leave on the eve of battle?

                    GAMLING
          He leaves because there is no hope.

CLOSE ON: THEODEN as he moves forward.

                    THEODEN
          He leaves because he must.

                     GAMLING
          Too few have come. We cannot defeat the
          armies of Mordor.

                      THEODEN
          No, we cannot . . .
               (surveying his frightened Men)
          But we will meet them in battle,
          nonetheless.

                                    Final Revision - October, 2003 72,



EXT. THEODEN'S TENT, DUNHARROW PLATEAU - DAWN

ANGLE ON: THEODEN looks at EOWYN who stands as if turned to
stone ... she is looking up at a LIGHTENING SKY ... The QUIET
before the MEN depart for WAR . . .

                      THEODEN
                (gentle)
           I have left instruction: the people are to
           follow your rule in my stead ... take up my
           seat in the Golden Hall ... long may you
           defend Edoras if the battle goes ill.

ANGLE ON: EOWYN turns to the KING ... her FACE a BLANK ...
She speaks without emotion.

                      EOWYN
           What other duty would you have me do, my
           Lord?

THEODEN moves towards her, taking up her HAND . . .

                     THEODEN
               (quiet)
           Duty? ... No, I would have you smile again -
           not grieve for those whose time has come.

EOWYN slowly lifts her head . . .

                     THEODEN (cont'd)
           You shall live to see these days renewed.

CLOSE ON: THEODEN lifts EOWYN faces to look into her EYES . . .

                     THEODEN (cont'd)
               (whisper)
          No more despair.

EXT. DIMHOLT ROAD - DAY

ANGLE ON: ARAGORN, LEGOLAS and GIMLI make their way up a.
GLOOMY CANYON, shadowed by BLACK FIR TREES. The shadowed
ridges of the DWIMORBERG MOUNTAIN rise BEFORE THEM.

It is a SPOOKY PLACE.
                                                      (CONTINUED)

                                     Final Revision - October, 2003 73.
CONTINUED:


                        GIMLI
             What kind of an army would linger in such a
             place?

                       LEGOLAS
             One that is cursed ... Long ago the Men of
             the Mountain swore an oath to the last King
             of Condor - to come to his aid, to fight,
             but when the time came, when Condor's need
             was dire, they fled ... Vanishing into the
             darkness of the mountain ... And so Isildur
             cursed them - never to rest until they had
             fulfilled their pledge.

SILENCE surrounds them, there are no birds, no wind. Only the
OMINOUSLY MUFFLED THUD of their horses hooves on the dank FIR-
NEEDLES.                                     '

EXT. DIMHOLT GLEN - DAY

ANGLE ON: Before them, at the ROOT OF THE MOUNTAIN, a SHEER
WALL of ROCK towers . . .

                     GIMLI
               (terrified whisper)
          The very warmth of my blood seems stolen
          away.

Within the walls, a creepy DARK DOOR gapes like a mouth of
night. SIGNS and FIGURES are carved above its WIDE ARCH.

                     LEGOLAS
               (translating)
          The way is shut. It was made by those who
          are dead, and the Dead keep it. The way is
          shut.

AT THAT MOMENT: A CHILL WIND seems to rush out of the DOORWAY
. . . ARAGORN stares into the BLACKNESS, his HAIR BLOWING
WILDLY. The HORSES REAR and'BUCK'in terror, turning and
GALLOPING AWAY.

                       ARAGORN
          Brego!


                                                     (CONTINUED)

                                     Final Revision - October, 2003 74
CONTINUED:


The three HORSES DISAPPEAR ... ARAGORN turns resolutely
towards the DOORWAY . . .

                       ARAGORN (cont'd)
                 (steely resolve)
             I do not fear death ...

ANGLE ON: ARAGORN WALKING into the BLACKNESS.

LEGOLAS quickly follows . . . swallowed by the DARKNESS.

CLOSE ON: GIMLI left ALONE . . . He hesitates, struggling with hi
FEAR.

                         GIMLI
             Well, this is a thing unheard of ... An Elf
             will go underground when a Dwarf dare not.
                  (gritting his teeth)
             Oh! I ' d never hear the end of it!

GIMLI plunges into the TUNNEL behind the OTHERS!

EXT. DUNHARROW ENCAMPMENT - DAWN

MUCH ACTIVITY ... HORNS SOUND ... the ENTIRE CAMP is on the
MOVE ... fires are DOUSED, TENTS pulled down, HORSES saddled.

EXT. DUNHARROW PLATEAU - DAWN

ANGLE ON: THEODEN strides through the CAMP, EOMER at his SIDE.

                     THEODEN
          We must ride light and swift. It's a long
          road ahead ... and man and beast must reach
          the end with the strength to fight.

ANGLE ON: MERRY . . . preparing a LITTLE PONY with a SADDLE and
SUPPLIES. He is wearing an OVERSIZED HELMET and ROHIRRIM
CLOTHING . . . he looks at once NERVOUS and EXCITED.

KING THEODEN breaks away from a COLUMN and rides up to MERRY.




                                                     (CONTINUED)

                                          Final Revision - October, 2003 75,
CONTINUED:


                         THEODEN (cont'd)
                  (gently)
             Little Hobbits do not belong in war, Master
             Meriadoc!

                       MERRY
             All my friends have gone to battle. I would
             be ashamed to be left behind!

                        THEODEN
             It is a three day gallop to Minas Tirith.
             None of my Riders can bear you as a burden.

                         MERRY
             But . . . I want to fight!

                        THEODEN
             I will say no more.

KING THEODEN wheels his HORSE away . . .

MERRY is bitterly DISAPPOINTED. He stands, head down - a TINY
DEJECTED FIGURE - as the MIGHTY ROHIRRIM on their LARGE
HORSES ride by . . . a jangling sea of HELMETS, SHIELDS and
BANNERS.

SUDDENLY . . . MERRY is plucked off the ground! A SOLDIER has
snatched him by the collar ... and plonked him down on their
SADDLE!

CLOSE ON: MERRY twists around, looking up at the SOLDIER . . .
Beneath a HELMET and MAIL HOOD is . . .

. . . EOWYN, disguised as a MAN!

                       EOWYN
                (grimly)
           Ride with me.

                         MERRY
           My Lady!

CLOSE ON: MERRY'S face visible under the CAPE . . . looking
EXCITED!


                                                          (CONTINUED)

                                      Final Revision - October, 2003 76,
CONTINUED: ( 2 )


                       EOMER
                 (shouting above the din)
            Move out - move out!

                       THEODEN
            Ride! Ride now, for Gondor!

EXT. DUNHARROW VALLEY - DAWN

HIGH WIDE: The VALLEY FLOOR as THOUSANDS of HORSEMEN ride out
after their KING.

EXT. PELENNOR FIELDS/MINAS TIRITH - DAY

ANGLE ON: GREAT SIEGE TOWERS and CATAPULTS are ROLLING across
the PELENNOR FIELDS . . . Thousands of FLAMING TORCHES light
the snarling, slathering MORGUL ORCS . . . marching in RAGGED
RANKS.

ANGLES ON: Flowing torrents of ORCS stream past CAVE TROLLS,
beating the DRUMS OF WAR ... MINAS TIRITH lies ahead - only
TWO MILES AWAY!

INT. PATHS OF THE DEAD CAVERN - DAY

ANGLE ON: ARAGORN leads LEGOLAS and GIMLI into a WIDE CAVERN
. . . he WAVES HIS TORCH through the DARKNESS: ILLUMINATING a
HUGE, CAVERN . . .

A ghastly CRACKING NOISE, like stone being sundered, cuts
through the SILENCE.

 A GHOSTLY FIGURE step from the ROCK WALLS!

ANGLES ON: ARAGORN, LEGOLAS and GIMLI look on in HORROR, as a
MUMMIFIED SPECTRE looms before them: EYELESS SOCKETS ...
ROTTEN TEETH . . . a pale SICKLY GLOW . . . the KING OF THE DEAD!

FOG SWIRLS around as the GHOST SNARLS at ARAGORN ...

                      KING OF THE DEAD
            Who enters my domain?

ARAGORN moves forward ... unflinching . . .

                                                       (CONTINUED)

                                       Final Revision - October, 2003 77,
CONTINUED:


                        ARAGORN
             One who will have your allegiance.

                         KING OF THE DEAD
                  (snarl)
             The dead do not suffer the living to pass ...

                        ARAGORN
             You will suffer me!

The KING OF THE DEAD's'MALEVOLENT LAUGH echoes through the
CVS...
 AE

ANGLE ON: The FOG suddenly ROLLS BACK, forming a retreating
wall of GREY VAPOUR ... slowly, RANK upon RANK of SPECTRAL
WARRIORSare revealed! GHOULISH FACES . . . RUSTING WEAPONS . . .
TATTERED BANNERS.

WIDE ON: The FOG reveals a DEAD ARMY of MANY THOUSANDS ...
assembled around the CAVERN!

ANGLE ON: ARAGORN stares GRIMLY at the KING OF THE DEAD.

CLOSE ON: THE KING of the DEAD as he smiles evilly at ARAGORN
... ARAGORN holds his GAZE . . .

                         KING OF THE DEAD                   ,-
                                                            '"
                  (chilling)
             The way is shut . . .

THE KING of the DEAD moves relentlessly towards ARAGORN . . .

                         KING OF THE DEAD (cont'd)
             It was made by those who are Dead and the
             Dead keep it . . .

WIDE: ARAGORN, LEGOLAS and GIMLI are now surrounded by~an        ".'
ARMY of the DEAD . . .

                        KING OF THE DEAD (cont'd)
               The way is shut. Now, you must die.

ANGLE ON: LEGOLAS fires an ARROW at the KING OF THE DEAD . . .
it PASSES STRAIGHT THROUGH!


                                                         (CONTINUED)

                                      Final Revision - October, 2003 78
CONTINUED: ( 2 )


ARAGORN keeps moving forward, his eyes locked on the SPECTRE.

                       ARAGORN
                 (desperate)
            I summon you to fulfil your oath!

ANGLE ON: The KING OF THE DEAD SNARLS and raises his DEADLY
SWORD above ARAGORN' S HEAD!

                      KING OF THE DEAD
                (raspy yell)
           None but the King of Gondor may command me!

QUICK BEAT: ARAGORN RAISES ANDURIL . . .

With a TERRIFYING SHRIEK, THE KING of the DEAD SWEEPS his
SWORD towards ARAGORN' S HEAD!

SLOW MOTION: ARAGORN raises 'his SWORD in ANSWER . . . a LOW
WHISTLE as it SWEEPS through the AIR . . .

CLANG! The BLADE � OF ANDURIL clashes with the SPECTRAL SWORD
. . . the SHARP RING of METAL reverberates through the CAVERNS !



CLOSE ON: THE KING of the DEAD stares at ARAGORN in
DISBELIEF.

                      KING OF THE DEAD (cont'd)
                (fearful)
           It cannot be - that line was broken!

ANGLE ON: ARAGORN grabs the SHOCKED GHOST by the NECK ...

ARAGORN holds the SHARP BLADE against the GHOST'S THROAT!

                     ARAGORN
           It has been remade!

SILENCE.

ARAGORN releases the KING OF THE DEAD . . . he ADDRESSES the
GHOST ARMY.

                                                      (CONTINUED)

                                      Final Revision - October, 2003 79.
CONTINUED: ( 3 )


                       ARAGORN (cont'd)
            Fight for us and regain your honour!

GHOSTLY FACES stare hollow-eyed at ARAGORN ...

                        ARAGORN (cont'd)
                 (yelling)
            What say you?

SILENCE.

                       ARAGORN (cont'd)
            What say you?                                 ,   .

                       GIMLI
            Aghh! Your wasting your time, Aragprn. They
            had no honour in life, they have none now
            in death.

                        ARAGORN
                 (yelling)
            I am Isildur's heir. Fight for me and I
            will hold your oath fulfilled. What say
            you?

EXT. PELENNOR FIELD/MINAS TIRITH - DAY

ANGLES ON: THOUSANDS of ORCS continue moving relentlessly
forward . . . Towards the WALLS of MINAS TIRITH.

EXT. MINAS TIRITH GATES - DAY

CLOSE ON: A GUARD yells down from the PARAPET above the HUGE
WOODEN GATE . . .

                        GATE GUARD
                 (yelling)
            Open the gate! Quick!

ANGLE ON: The HUGE GATE swings open, revealing . . . FARAMIR'S
badly wounded HORSE . . . dragging FARAMIR behind! Both the
HORSE and FARAMIR are impaled with ORC ARROWS!




                                                       (CONTINUED)

                                       Final Revision - October, 2003 80,
CONTINUED:


                         IORLAS
                  (shocked)
             Lord Faramir!

EXT. PELENNOR FIELDS/MINAS TIRITH - DAY

As CATAPULTS are prepared GOTHMOG rides through the ranks of
ORCS ...

INT. MINAS TIRITH, COURT OF THE KINGS - DAY

ANGLE ON: IORLAS and OTHER SOLDIERS arrive at the CITADEL
with FARAMIR'S UNCONSCIOUS BODY on a STRETCHER . . . PIPPIN
follows them.

                                                      . he runs
CLOSE ON: DENETHOR EMERGES from the TOWER HALL .
towards his son . . .

                          DENETHOR
             Faramir!

DENETHOR bends to the STRETCHER bearing his SON.

                        DENETHOR (cont'd)
                  (whisper)
             Say not that he has fallen . . .

                        IORLAS
             They were outnumbered, none survived.

CLOSE ON: PIPPIN, devastated . . .

EXT. PELENNOR FIELDS/MINAS TIRITH - DAY

GOTHMOG turns to his LIEUTENANTS ...

                       GOTHMOG
             Fear! The city is rank with it. Let us ease
             their pain. Release the prisoners!

                          LIEUTENANT
             Catapults!

At his ORDERS, the GREAT CATAPULTS fire THWAT! THWAT! THWAT!

                                     Final Revision - October, 2003 81,



EXT. MINAS TIRITH STREETS - DAY

The ORC CATAPULTS do not fire rocks ...

HORROR sweeps through the streets of MINAS TIRITH as the
SEVERED HEADS of FARAMIR'S HORSEMEN land amongst the
SOLDIERS!

EXT. MINAS TIRITH COURT OF THE KINGS - DAY

DENETHOR looks down at FARAMIR'S UNCONSCIOUS BODY . . .

                      DENETHOR
           My son is dead. My line is ended.

PIPPIN has run to FARAMIR and bends towards him ...

                      PIPPIN
                (touching Faramir's forehead)
           He's alive!

                      DENETHOR
           The House of Stewards has failed! . . .

                      PIPPIN
                (urgently)                                ;
           He needs medicine, my Lord!

                     DENETHOR
          My line has ended.

                     PIPPIN
               (urgently)
          My Lord!

ANGLE ON: DENETHOR slowly turning away . . . walking as if in a
TRANCE . . .

CLOSE ON: DENETHOR has reached the edge of the COURTYARD . . .
he STARES in SHOCKED DISBELIEF at the VISTA spread out BELOW:

HIGH WIDE ANGLE: A FULL VIEW of the ORC ARMY . . . from the TOP
of MINAS'TIRITH.



                                                      (CONTINUED)

                                      Final Revision - October, 2003 82,
CONTINUED:


75,000 ORCS are spread out across the PELENNOR FIELDS like a
sea of black ANTS.

CLOSE ON: TROLLS load the CATAPULTS with ROCKS.

BATTERING RAMS and SIEGE TOWERS are hauled on CHAINS.
Thousands of flickering TORCHES give the army the look of a
moving city in the MURKY MORDOR TWILIGHT.

CLOSE ON: DENETHOR . . . struggling to regain the power of
speech!

                        DENETHOR
                  (rasping whisper)
             Rohan has deserted us!

ANGLE ON: A HUGE BOULDER smashes into the wall of MINAS
TIRITH.

WIDE ON: BOULDERS HURTLE from CATAPULTS across the fields
towards MINAS TIRITH.

                       DENETHOR (cont'd)
             Theoden's betrayed me!

CLOSE ON: A BOULDER smashes into a BALCONY full of CIVILIANS.

CONFUSION and PANIC spreads amongst the SOLDIERS.

                        DENETHOR (cont'd)
                  (panicked scream)
             Abandon your posts!

CLOSE ON: PIPPIN, SHOCKED.

                       DENETHOR (cont'd)

             Flee! Flee for your lives!

SUDDENLY: THWACK!

GANDALF'S STAFF smashes into the back of DENETHOR'S HEAD!
GANDALF grimly swings his staff again, CLUBBING DENETHOR to
the GROUND!


                                                       (CONTINUED)

                                                    Final Revision - October, 2003 83.
CONTINUED: ( 2 )


ANGLE ON: GANDALF spins around and ADDRESSES the SOLDIERS:

                            GANDALF
                     (yell)
                Prepare for battle!!

EXT. MINAS TIRITH STREETS - DAY

ANGLE ON: GANDALF GALLOPS down the WINDING LABYRINTHINE STREETS
on SHADOWFAX . . . against the flow of FLEEING SOLDIERS.

                           GANDALF
                     (yelling)
                Return to your posts!

                                                                 .. .. '            CUT TO:

EXT. MINAS TIRITH BATTLEMENTS - DAY

ANGLE ON: SHADOWFAX bounds up STAIRS onto the LEVEL ONE
BATTLEMENTS ... GANDALF looks at the approaching ORC ARMY,
now less than 50 yards from the WALLS of the CITY!

                           GANDALF
                     (angry yell)
                Send these foul beasts into the abyss!

QUICK CUTS: MIGHTY WOODEN CATAPULTS positioned within the
walls of MINAS TIRITH are fired!

EXT. MINAS TIRITH - DAY

THWAT! THWAT! THWAT! CATAPULTS send their great ROCKS high
into the air, over the BATTLEMENTS!

Dizzying AERIAL SHOTS of huge BOULDERS flying up close to
CAMERA . . . then falling away towards the ORCS!

CRUNCH!! BOULDERS flatten ORCS. THWAT!! 100 more ROCKS . . .
THWAT!! another 1 0 0 ! ! The ORC FRONT RANKS are in disarray!

EXT. PELENNOR FIELDS /MINAS TIRITH - DAY                                   '
                                                                           .

A s t h e G R E A T B O U LD E R S l a n d a m o ng t h em ^ t he O R C s t a rt t o P A N IC !


                                                                               (CONTINUED)

                                      Final Revision - October, 2003 84
CONTINUED:


                        GOTHMOG
             Stay where you are!

                                                      INTERCUT WITH:

EXT. MINAS TIRITH BATTLEMENTS - DAY

GANDALF walks the BATTLEMENTS as the huge BOULDERS rain onto
the ORC ARMY below ...

                                                      INTERCUT WITH:

EXT. PELENNOR FIELDS/MINAS TIRITH - DAY

GOTHMOG glances up at a WHISTLING SOUND - a huge BOULDER
hurtles towards him. He side-steps CALMLY out of the way ...
spitting on the BOULDER in CONTEMPT.

                                                             CUT TO:

EXT. MINAS TIRITH BATTLEMENTS - DAY

SUDDENLY! 9 NAZGUL DIVE out of the DIM SKY, CLAD in BATTLE
ARMOUR!

ANGLES ON: SOLDIERS throw themselves down as the NAZGUL zoom
overhead, emitting their PIERCING SHRIEKS! GONDORIAN SOLDIERS
run for SHELTER in PANIC, covering their ears ...

CLOSE ON: PIPPIN COWERING . . .

                         GANDALF
                  (rallying)
             Stand to your posts! Do not give in to
             fear. Fight!

QUICK CUTS: MIGHTY WOODEN CATAPULTS positioned within the
walls of MINAS TIRITH are fired!

The NAZGUL circle LOW over the CITY, like VULTURES seeking
doomed men's flesh. SOLDIERS are plucked into the AIR by
SHRIEKING NAZGUL and dropped to their DEATHS hundreds of FEET
BELOW. TOWERS and BUILDINGS are DESTROYED. CHAOS as SOLDIERS,
WOMEN and CHILDREN DODGE falling MASONRY.


                                                         (CONTINUED)

                                       Final Revision - October, 2003 85.
CONTINUED:


CLOSE ON: GONDORIAN SOLDIERS send a rain of arrows at the
approaching TOWERS and TROLLS.

                       GANDALF (cont'd)
             Not at the towers! Aim for the trolls! Kill
             the trolls! Bring them down!

TOO LATE! The TOWERS reach the walls, their DOORS crashing
down, releasing ORCS directly onto the LOWER LEVELS.

As the ORC swarm from the TOWER, GANDALF realises PIPPIN has
come down from the CITADEL . . .

                        GANDALF (cont'd)
             Peregrin Took - go .back to the citadel!

                        PIPPIN
                  (stupor)
             They called us out to fight . . .

PIPPIN looks on stunned, as a HUGE ORC leaps towards him . . .
GANDALF intercepts the BEAST, striking him with his STAFF ...

                      GANDALF
                  (urgency)
             This is no place for a Hobbit!

GANDALF welds his STAFF, cutting through the attacking ORC
with EASE ... BEHIND him, an ORC prepares to cut down GANDALF
... PIPPIN instinctively slashes his SWORD at him.

ANGLE ON: GANDALF turns on PIPPIN, smiling despite himself.

                       GANDALF (cont'd)
             Guard of the Citadel, indeed! Now, back up
             the hill - quickly! Quickly!

                                                             "CUT TO:

EXT. PELENNOR FIELDS - DUSK

ANGLE ON: Out of BLACK SWIRLING BATTLE. SMOKE crawls an IRON
MONSTER! A MASSIVE WHEELED BATTERING RAM . . ' ' . 60 FEET HIGH and
150 FEET LONG . . . pushed by 20 huge MOUNTAIN TROLLS . . . a
MASSIVE IRON HEAD, cast in the likeness of a SNARLING WOLF!

                                                          (CONTINUED)

                                       Final Revision - October, 2003 86.
CONTINUED:


... this is GROND ... the BATTERING RAM FROM HELL! The Ore
are chanting as the BEAST is wheeled closer and closer to the
GATES ...

                        ORCS
             Grond! Grond! Grond!

EXT. MINAS TIRITH BATTLEMENTS - DUSK

CLOSE ON: GANDALF . . . blanching at the sight of this crawling
IRON MONSTER"'!

                                                              CUT TO:

EXT. PASS OF CIRITH UNGOL, TUNNEL MOUTH - DAY

ANGLE ON: GOLLUM leads FRODO up a LONG RAVINE between COLUMNS
of TORN and WEATHERED ROCK.

AHEAD is a GREAT GREY WALL, a last huge mass of mountain-
stone . . . and in the SHADOWS at the base of the TOWERING ROCK
lies a TUNNEL.

FRODO reacts to the FOUL STENCH coming out of the BLACK HOLE.

                        FRODO
                  (exhausted)
             What is this place?

                        GOLLUM
             Master must go inside the tunnel.

                        FRODO
             Now that I'm here, I don't think I want to.

CLOSE ON: SMEAGOL sensing his PLAN unravelling. Everything
depends on FRODO going inside the TUNNEL

                        SMEAGOL
             It's the only way.
                  (GOLLUM;- slyly)
             Go in - or go back.

FRODO stares into the darkness . . .


                                                        (C ON T IN U ED )

                                       Final Revision - October, 2003 87.
CONTINUED:


                        FRODO
                  (under his breath)
             I can't go back.

CLOSE ON: GOLLUM, his sparse oily hair hanging like rank weed
over his hooded eyes ...

Drawing a DEEP BREATH, FRODO follows GOLLUM into the TUNNEL.

INT. SHELOB'S TUNNEL - DAY

FRODO nearly GAGS

                     FRODO
          What's that smell?

                        GOLLUM
                  (lying)
             Orcses filth! Orcses come in here
             sometimes.

They continue on, deep into the DARK TUNNEL . . . FRODO is
feeling his way in the dark, following the SOUND ,of GOLLUM'S
scampering.                                            .,;
                                                       ,.
                                                        .

                     GOLLUM O.S..
               (disembodied)
          Hurry!

FRODO follows the sound of GOLLUM's voice. He is VERY TIRED.

                     GOLLUM O.S.(cont'd)
               (disembodied)                              ;�
                                                          ��
                                                           �
          This way.

FRODO cannot see GOLLUM in the MURKY TUNNEL . . .

                        FRODO
             Smeagol!

                     GOLLUM O.S.
               (disembodied)
          Over here.



                                                       (CONTINUED)

                                          Final Revision - October, 2003 88,
CONTINUED:


FRODO slips as he tries to follow the voice . . . He puts his
HAND to the WALL to STEADY HIMSELF but quickly YANKS it away
... STRANDS of a WHITE THREAD stuck to his HAND.

                        FRODO
             It's sticky . . . What is it?

GOLLUM is nowhere to be seen ... only his voice echoes back
down the LABYRINTH of TUNNELS.

                         GOLLUM O.S.
             You will see . . . Oh, yes . . . You will see.

FRODO FREEZES!

                        FRODO
                  (nervous)
             Smeagol! Smeagol!

NO ANSWER, no echo, not even a tremor in the air.

                        FRODO (cont'd)
                  (panicked)
             Smeagol!

CLOSE ON: FRODO realises with HORROR that GOLLUM has deserted
him!

                         FRODO (cont'd)
                  (whisper)
             Sm. . .
              a

CLOSE ON: FRODO breathing hard . . . passing all manner of
creatures, trussed up in evil WEB-LIKE material . . . .

A BUBBLING HISS can be heard . . . There is a CREAKING as some
great JOINTED THING moves with slow purpose in the DARK ...

FRODO begins to run in BLIND PANIC ...

                                                               CUT TO:

                                      Final Revision - October, 2003 89.



EXT. CIRITH UNGOL STAIRS - DAY

SAM stumbles blindly down the ANCIENT STAIRS, reckless and
uncaring, his face pale and devastated.

CLOSE ON: SAM'S FOOT slips . . .

... SUDDENLY, as if the ground has given way beneath him, SAM
is slipping and sliding dangerously OUT OF CONTROL.

ANGLE ON: SAM thudding into a LARGE ROCK, which saves him.
from tumbling headlong over the PRECIPICE.

Something catches SAM'S EYE . . . he stares, barely breathing.

CLOSE ON: A package of LEMBAS BREAD . . .

ANGLE ON: SAM looking BACK UP the LONG STEEP STAIR . . .

                                                           CUT TO:

INT. SHELOB'S TUNNEL - DAY

FRODO is running BLINDLY . . . He falls, trapped in the sticky
substance which CLINGS to him. As he lays on the ground,
unable to move, a VOICE comes to him as if froma distant-;,,
memory . . .

                     GALADRIEL V/0
           I give you the light of Earendil - our most
           beloved star. May it be a light for you in
           dark places when all other lights go out.

CLOSE ON: FRODO fumbles in his JACKET, FEAR growing in him
. . . he pulls out the GLASS PHIAL - his GIFT from GALADRIEL -
he holds it aloft.

                      FRODO
                (stronger)
           Aiya Earendil Elenion Ancalima!

The PHIAL flickers ... kindles into a SILVER FLAME - a BRIGHT
RADIANT STARLIGHT!



                                                       (CONTINUED)

                                   Final Revision - October, 2003 90.
CONTINUED:


LOW ANGLE ON: The LIGHT instantly REVEALS a HUGE LOATHSOME
SPIDER . . . towering over FRODO!

CLOSE ON: SHELOB the SPIDER HISSES at the LIGHT! TWO great
clusters of many-windowed EYES protrude from her bulbous
head. Her LEGS are bent, with a 12 FOOT SPAN and HAIRS that
stick out like steel spines. Her HUGE, SWOLLEN BODY, a vast
bloated bag, sways and sags between her legs. Her age-old
BLACK HIDE is knobbly and pitted, blotchy with LIVID MARKS
. . . but her belly underneath is PALE and LUMINOUS.

SHELOB beats the air with her FORELEGS.

ANGLE ON: Calling up all his remaining STRENGTH and
RESOLUTION, FRODO forces his LEGS to MOVE . . . he backs away -
keeping his EYES on SHELOB.

SHELOB crawls SLOWLY towards him ... then, with sudden .
hideous SPEED, she ATTACKS!

She lashes out with her FRONT LEGS ... FRODO is flung back
... the GLASS PHIAL clatters to the TUNNEL FLOOR, casting an
eerie LOW LIGHT.

SHELOB squats above FRODO, her EYE CLUSTERS fidgeting with
hideous delight, gloating over a prey trapped beyond all hope
of escape.

SUDDENLY! FRODO draws STING! He slashes wildly at the GIANT
SPIDER . . . hewing off the TIP of A LEG!

SHELOB SPASMS . . . a WILD BLUR of thrashing LEGS!

ANGLE ON: FRODO leaps to his feet and RUNS - not even pausing
to pick up the PHIAL of LIGHT!

TRACKING BACK: with FRODO as he careers blindly down NARROW
TUNNELS, gasping in the CHOKING AIR ... looking back over his
shoulder for any sign of SHELOB.

ANGLE ON: FRODO sees the TUNNEL EXIT ahead . . .

. . . just as he runs straight into a great COBWEB!



                                                      (CONTINUED)

                                    Final Revision - October, 2003 91.
CONTINUED: ( 2 )


CLOSE ON: FRODO . . . eyes wild with fear . . . as he tries to
wrench STING free of the STICKY WEB.

                      GOLLUM O.S.
                (sing-song)
            Naughty little fly,
            Why does it cry?

ANGLE ON: GOLLUM on the other side of the WEB . . .

                       GOLLUM
            Caught in a web
            Soon you'll be . . .
            . ?. Eaten!

ANGLE ON: FRODO as he SLASHES WILDLY with STING. The SHINING
BLADE of STING as it hacks through the FIBROUS STRANDS. They
whip and snap back into FRODO'S FACE as he cuts himself free.

ANGLE ON: Back up the TUNNEL - lit by the LIGHT OF GALADRIEL -
SHELOB'S HEAVING SHADOW approaches . . .

CLOSE ON: GOLLUM watches in mounting disbelief as STING
slashes through the WEB ... DISBELIEF turns to FEAR as SHELOB
gets closer and closer, GOLLUM quickly turns and BOLTS::.. . . .

FRODO hacks at the WEB and with a last desperate LUNGE, frees
himself ... STING is caught in the WEB ... FRODO leaves the
SWORD and THROWS HIMSELF through a narrow CREVICE . . .

EXT. PASS OF CIRITH UNGOL - DAY

ANGLE ON: FRODO stumbles out of SHELOB'S LAIR . . . Tumbling
onto COLD ROCK.

ANGLE ON: FRODO covered in COBWEBS, wild-eyed and drenched in
SWEAT . . . - H e looks up as GOLLUM lunges at him.  ;:

                       GOLLUM
           Got away did it, Precious? Not this time,
           not this time!

GOLLUM and FRODO fight ... Rolling on the GROUND towards the
EDGE of a PRECIPICE . . .

                                                      (CONTINUED)

                                       Final Revision - October, 2003 92.
CONTINUED:


FRODO pins GOLLUM on the ground, hands around his throat.

                       SMEAGOL
                 (pleading)
             It wasn't us! It wasn't us! Smeagol
             wouldn't hurt Master.

ANGLE ON: FRODO'S fingers squeeze tighter around GOLLUM'S
THROAT.

                        SMEAGOL (cont'd)
             Smeagol promised. You must believe us. It
             was the Precious - the Precious made us to
             do it.

FRODO has a sudden moment of SELF REALISATION and releases
GOLLUM, horrified at his VIOLENCE.

ANGLE ON: GOLLUM cowering back . . . COUGHING and SPLUTTERING.

ANGLE ON: FRODO looking at SMEAGOL, in SHOCK, he gets to his
FEET.

                        FRODO
                  (shaky)
             I have to destroy it, Smeagol. I have to
             destroy it for both our sakes.

SMEAGOL stares at FRODO in DISBELIEF . . . in a FURY he LUNGES
at FRODO who falls backwards, dangerously close to the edge
of the PRECIPICE - GOLLUM tumbles over FRODO's BODY and FALLS
to the bottom of the RAVINE ...

EXT. PASS OF CIRITH UNGOL - NIGHT

FRODO, overcome with EXHAUSTION, stumbles down the steep
stairs of CIRITH UNGOL . . . He is full of REMORSE at his
TREATMENT of SAM ...

                         FRODO
             I'm so sorry, Sam . . .

FRODO falls t o his knees --



                                                        (CONTINUED)

                                         Final Revision - October, 2003 93
CONTINUED:


                        FRODO (cont'd)
             . . . so sorry ...

EXT. FRODO'S DREAM, LOTHLORIEN - DAY

CLOSE ON: FRODO lands on SOFT GREEN GRASS.

SUN DRENCHED IMAGES: Of trees . . . of fields . . . of LOTHLORIEN
�*�



HAZY IMAGE: GALADRIEL walking towards him, BARE-FOOT on the
GR SS . . .
  A

                       GALADRIEL V/0
             This task was appointed to you, Frodo of
             the Shire. If you do not find a way ... no-
             one will.

GALADRIEL leans down towards FRODO, OFFERING her hand ... for
a beat, FRODO stares at her ... torn, not wanting to go on,
wanting to lie down . . . But he knows what he must do.

ANGLE ON: FRODO . . . as he is LIFTED to HIS FEET.

ANGLE ON: FRODO - once again in the dark, rank, tunnels of
the PASS of CIRITH UNGOL . . . He goes on.

                                                             CUT TO:

EXT. MINAS TIRITH STREETS - NIGHT

ANGLES ON: FLAMING MISSILES rain down on the CITY!

A DEEP BOOM!

GROND thuds against the MINAS TIRITH GATE . . . sending a -:
VIBRATION running through the city!                         ;:

ANGLE ON: GANDALF, on SHADOWFAX, leads SEVERAL HUNDRED
GONDORIAN FOOT SOLDIERS down through the streets.

                        GANDALF
             To the Gates! Man the Gates!

                                                             CUT TO:

                                     Final Revision - October, 2003 94



EXT. MINAS TIRITH, COURT OF THE KINGS - NIGHT

PIPPIN watches as FARAMIR'S UNCONSCIOUS BODY is carried on
the STRETCHER by DENETHOR'S SERVANTS lead by DENETHOR . . . it
has the atmosphere of a FUNERAL.

INT. MINAS TIRITH, STEWARD'S TOMB - NIGHT

ANGLE ON: An IRON DOOR creaks OPEN . . . FARAMIR'S PROCESSION
enters a WIDE VAULTED CHAMBER.

The LANTERN LIG HT throws great SHADOWS upon the SHROUDED
WALLS of a wide  VAULTED CHAMBER. ROW upon ROW of MARBLE TOMBS
are visible in  the DIM LIGHT. Upon each TOMB lies a SLEEPING
FORM, carved in  STONE, hands folded.

DENETHOR speaks in a HUSHED VOICE . . .

                       DENETHOR
                (whisper)
           No tomb for Denethor and Faramir. No long
           slow sleep of death embalmed . . . we shall
           burn - like the heathen kings of old!

The SERVANTS place FARAMIR'S UNCONSCIOUS BODY on a STONE
TABLE in the centre of the CHAMBER. They stand, heads bowed
. . . as MOURNERS beside a bed of death.

DENETHOR turns to his SERVANTS.

                       DENETHOR (cont'd)
           Bring wood and oil . . .

                                                         CUT TO:

EXT. MINAS TIRITH GATES - NIGHT

BOOOMM The GATE SPLINTERS under GROND'S mighty weight . . .
Behind the GATES the GONDORIAN FOOT SOLDIERS are FEARFUL ...

GANDALF rallies the line of BOWMEN as they wait in front of
the GREAT DOORS ... their COURAGE wavering with each CRASHING
B OW . . .
 L                          .



                                                     (CONTINUED)

                                      Final Revision - October, 2003 95.
CONTINUED:


                        GANDALF
                  (commanding)
             Steady! Steady!

SUDDENLY the FEARSOME HEAD protrudes into the MINAS TIRITH!

                       GANDALF (cont'd)
             You are soldiers of Gondor! No matter what
             comes through that gate you will stand your
             ground!

Within MOMENTS the GATE is smashed and GIANT CAVE TROLLS
enter into the FIRST CIRCLE of MINAS TIRITH, under the
archway that no enemy had ever passed!

                        GANDALF (cont'd)
                  (yelling)
             Fire!

ROWS of ARCHERS fire off a VOLLEY of ARROWS but the TROLLS
continue to SMASH the FOOT SOLDIERS with their giant CLUBS
... ORCS swarm through the OPENING and the PITCHED, HAND-TO-
HAND BATTLE spills into FLAMES and BLACKENED, SMOULDERING
BUILDINGS . . . through the streets of MINAS TIRITH.

ANGLE ON: With a ROAR, GANDALF leads a COUNTER ATTACK on
SHADOWFAX, followed by SEVERAL HUNDRED GONDORIAN FOOT " "
SOLDIERS!

THOUSANDS OF ORCS swarm in through the CITY GATES ... the
FIRST LEVEL is breached!

                                                           CUT TO:

EXT. PASS OF CIRITH UNGOL - DAY

ANGLE ON: FRODO STAGGERS through the PASS OF CIRITH UNGOL ...
the weight of the RING, dragging at his neck.

He MOVES FORWARD, fueled by a GRIM RESOLVE ...

ANGLE ON: FRODO starts climbing a STONE STAIRCASE that climbs
through a NARROW PASS ... TALL PEAKS rise on either side,
like pillars holding up a sagging sky.


                                                      (CONTINUED)

                                    Final Revision - October, 2003 96.
CONTINUED:


AHEAD is the SUMMIT of CIRITH UNGOL ... and an ORC WATCH
TOWER! A FAINT LIGHT glows from within the STONE TOWER . . .
the PATH over the SUMMIT is in FULL VIEW of the ORCS.

FRODO stays CLOSE to the ROCK WALL, masked by SHADOWS.

LOW ANGLE: Behind FRODO, SHELOB APPEARS! With hideous
STEALTH, she follows FRODO ...

ANGLE ON: FRODO slowly climbing the STONE STAIRS . . . his GAZE
and CONCENTRATION on the ORC TOWER. Behind him, SHELOB
lurches into a HORRIBLE SCUTTLE down the SHEER ROCK FACE.

CLOSE ON: FRODO suddenly senses the LURKING MALICE . . . he
SPINS AROUND: Before he can react, SHELOB VICIOUSLY STABS
FRODO in the NECK with her monstrous abdominal STINGER!

FRODO instantly goes LIMP . . . SHELOB'S LEGS   catch him as he
                                                 around him. With
falls ... she quickly starts WEAVING COBWEBS
great dexterity, she tumbles the LITTLE HOBB    IT over and over
in her LEGS, binding him in WEB from HEAD to     TOE!

SUDDENLY!... The RAZOR SHARP EDGE of a SWORD comes into shot.

REVEAL ON: SAMWISE GAMGEE stands before the GIANT SPIDER -
STING clutched in one hand, the SHINING PHIAL in the other!

                      SAM
           Let him go, you filth!

SHELOB HISSES at SAM . . . DROPPING FRODO . . . he ROLLS down the
STAIRS in his WEB COCOON.

                     SAM (cont'd)
          You will not touch him again!

SAM moves forward, a fell light in his normally friendly eyes


                     SAM (cont'd)
          Come on and finish it!

SAM SWINGS the small sword . . . SLASHING upward!



                                                     (CONTINUED)

                                      Final Revision - October, 2003 97
CONTINUED: (2)


ANGLE ON: SHELOB HISSES and REARS above SAM, her STINGER
dribbling with VENOM!

SAM ducks inside the arch of her LEGS and STABS STING into
one of her EYE CLUSTERS!

CLOSE ON: SHELOB SCREAMS, her MANDIBLES thrashing wildly,
GREEN OOZE trickling from her WOUNDED EYE.

With HIND LEGS, SHELOB picks SAM off the ground and TOSSES
him BACKWARDS! SAM lands heavily . . . and SHELOB POUNCES!

ANGLE ON: SHELOB heaves the great bag of her BELLY high above
SAM'S HEAD. As she splays her legs to drive her huge bulk
down on him, SAM lifts the ELVEN BLADE above his head,
holding it with TWO HANDS.

STING slides into SHELOB'S SOFT UNDERBELLY! A SHUDDER runs
through her! HEAVING up. again, she wrenches herself away from
the PAIN ... her LIMBS writhing beneath her.

ANGLE ON: JERKING and QUIVERING, SHELOB crawls to her HOLE,
leaving a trail of GREEN-YELLOW SLIME. She SQUEEZES down the
HOLE and DISAPPEARS ... the SOUND of her BUBBLING MISERY
fades.                           .                       :

ANGLE ON: SAM RACES TO FRODO . . .

                       SAM (cont'd)
                (worried)
           Mr Frodo!                        .

CLOSE ON: SAM RIPS COBWEBS away from FRODO'S HEAD . . . his
FACE is DEATHLY PALE.

                      SAM (cont'd)
                (panicking)
           Oh no! Frodo!

CLOSE ON: FRODO'S PALE, LIFELESS FACE.

                      SAM (cont'd)
           Mr Frodo! Wake up!

FRODO'S head LOLLS LIFELESSLY in SAM'S ARMS.

                                                       (CONTINUED)

                                      Final Revision - October, 2003 98.
CONTINUED: ( 3 )


                      SAM (cont'd)
                (desperate whisper)
           Wake up . . . don't leave me here alone.
           Don't go where I can't follow. Wake up!

CLOSE ON: FRODO STARING, UNMOVING.

                       SAM (cont'd)
                (numbly)
           Not asleep ... Dead.

SAM lays his FACE on FRODO'S CHEST . . . WEEPING SOFTLY.

CLOSE ON: STING'S BLADE GLOWS BLUE!

SOUNDTRACK: TRAMPING FEET approach . . . CLINKING METAL . . .
HARSH SHOUTS!

CLOSE ON: SAM looks up . . . looks back down FRODO.

CLOSE ON: SAM looks up at the ORC TOWER and then at STING
which is glowing BLUE! ORCS approach - SAM must make a
decision.

ANGLE ON: A SMALL PARTY of ORCS and URUK-HAI heading down the
STAIRS from the WATCH TOWER! . . . SHAGRAT leads the URUK-HAI,
and GORBAG leads the ORCS.

GORBAG spies FRODO'S BODY . . .

                      GORBAG
           What's this? Looks like Old Shelob's been
           having a bit of fun!

                      SHAGRAT
           Killed another one, has she?

ANGLE ON: GORBAG peer curiously at FRODO as he leans down and
pokes at FRODO'S LIFELESS BODY.

                      GORBAG
           No . . . this fellow ain't dead.

CLOSE ON: SAM, hidden:in a rock crevice, as SHOCK sweeps
across his FACE!
                        ,.                               (CONTINUED)

                                     Final Revision - October, 2003 99.
CONTINUED: ( 4 )


                       SAM
                 (to himself)
            Not dead!

                       GORBAG
                 (excited).
            She jabs them with her stinger and they go
            as limp as a boned fish. Then she has her
            way with them. That's how she likes to feed
            - fresh blood.
                 (yelling)
            Get him to the Tower!

                       SAM
            Samwise, you fool!

ANGLE ON: The ORCS GRUNT as they lift FRODO . . . and CARRY him
back towards the WATCH TOWER.

                       ORC 2
            This fellow will be awake in a few hours.

                       GORBAG
            Then he'll wish he'd never been born.

ORC LAUGHTER . . . FRODO is carried up the steep STAIRS .;.. .

                                                            CUT TO:

INT. MINAS TIRITH/STEWARD'S TOMB - NIGHT

FROM the SHADOWS PIPPIN watches, aghast, as FARAMIR is lain
on a FUNERAL PYRE . . .

CLOSE ON: DENETHOR kisses FARAMIR'S sweating, FEVERED brow.

                      DENETHOR
           The house of his spirit crumbles! He is
           burning ... already burning.                    7

ANGLE ON: BUNDLES of DRIED FIREWOOD are being stacked around
FARAMIR'S BODY.

ANGLE ON: PIPPIN, rushes forward, desperately PULLING the
FIREWOOD AWAY!
                                                        (CONTINUED)

                                        Final Revision - October, 2003 100,
CONTINUED:


                         PIPPIN
                  (yelling)
             He's not dead! He's not dead!

DENETHOR grabs PIPPIN by the collar! He roughly carries him
towards the door.

                        PIPPIN (cont'd)
             No! No! No! He's not dead. No!

                         DENETHOR
                  (menacing)
             Farewell Peregrin, son of Paladin . . . I
             release you from my service ...

DENETHOR throws PIPPIN outside!

                        DENETHOR (cont'd)
             Go now and die in what way seems best to
             you.

DENETHOR SLAMS the DOOR SHUT!

                         DENETHOR O.S
                  (ordering)
             Pour oil on the wood!

                                                              CUT TO:

EXT. MINAS TIRITH STREETS - NIGHT

ANGLE ON: PIPPIN RACES down the STEEP STREETS . . . passing
SOLDIERS running back from the BURNING CITY. GREAT BALLS of
FIRE are hurtling through the air . . . The city is in CHAOS.

                         PIPPIN
                  (yelling)
             Gandalf? ... Gandalf?

AMIDST the FLEEING SOLDIERS ...

                        GANDALF
             Pull back - to the second level! Hurry! Get
             the women and children out of here - get
             them out!
                                                          (CONTINUED)

                                    Final Revision - October, 2003 101.
CONTINUED:


PIPPIN desperately pushes against the TIDE of SOLDIERS
retreating from the FIGHTING.

                                                   INTERCUT WITH:

EXT. PELENNOR FIELDS - NIGHT

GOTHMOG turns to his SECOND LIEUTENANT ...

                        GOTHMOG
             Move into the city ... Kill all in your
             path.

                                                   INTERCUT WITH:

EXT. MINAS TIRITH STREETS

As ORC run through the STREETS, MEN, WOMEN, and CHILDREN flee
. . . The PITCHED BATTLE continues . . .

                        GANDALF
             Fight! Fight for your lives!

SUDDENLY! in the midst of the BATTLE, GANDALF turns . . .
SHRILL and CLEAR come the sounds of DISTANT HORNS! Off the
SIDE of MOUNT MILLDOLLUIN, they dimly ECHO - WAR HORNS of the
west ... ROHAN HAS COME!

                                                             CUT TO:

EXT. PELENNOR FIELDS - DAWN

GOTHMOG turns at the sound of the DISTANT HORNS . . .    :


WIDE ON: 6000 HORSEMEN, lead by THEODEN and EOMER, step up to
the SKYLINE . . .

ANGLE ON: MINAS TIRITH lies less than a MILE AWAY, down a
gentle slope. Over 50,000 ORCS are swarming around the base
of the city . . . thick BLACK SMOKE belches from within it.

CLOSE ON: MERRY BLANCHES with FEAR . . . EOWYN puts a
comforting hand on his shoulder.



                                                        (CONTINUED)

                                     Final Revision - October, 2003 102,
CONTINUED:


                        EOWYN
                  (whisper)
             Courage, Merry ... courage for our friends


Ont he BATTLE FIELD GOTHMOG walks among his troops ...

                       GOTHMOG
             Form ranks you maggots! Form ranks! Pikes
             in front, lances behind.

The ORCS PREPARE for BATTLE.

ANGLE ON: THEODEN gallops in front of his ARMY, ISSUING
URGENT ORDERS to his CAPTAINS:

                        THEODEN
                  (urgent yells)
             Eomer! Take your Eored down the left flank
             . . . Gamling! Follow the King's banner down
             the centre. Grimbold, take your company
             right after we pass the wall. Forth and
             fear no darkness!

CLOSE ON: THEODEN rides to the front of his ARMY. He rises in
his stirrups, TALL and PROUD, yelling in a clear, LOUD VOICE


                        THEODEN (cont'd)
                  (stirring call)
             Arise, arise, Riders of Theoden! Spears
             shall be shaken, shields shall be
             splintered . . . a sword day, a red day ^ere
             the sun rises!

ANGLE ON: A RAY of SUNLIGHT escapes through the BLACK CLOUDS,
bathing the ROHIRRIM in GOLDEN LIGHT. WEAPONS and ARMOUR
GLEAMS . . . as 6000 HORSEMEN hold their SPEARS aloft!

Below, on PELENNOR FIELD, the ORC kneel and raise their
LANCES in READINESS ...

ANGLE ON: EOWYN, her arm around MERRY before her . . .



                                                         (CONTINUED)

                                            Final Revision - October, 2003 103,
CONTINUED: ( 2 )


                         EOWYN
                   (terrified)
              Whatever happens, stay with me. I'll look
              after you.

MERRY looks on in SHOCK ...

ANGLE ON: As THEODEN rides past the ranks of SOLDIERS he runs
his LANCE along their SPEARS ... The noise echoes through the
RANKS as the WEAPONS of other RIDERS CLATTER in response ...

                         THEODEN
                   (stirring call)
              Ride now, ride now, ride, ride for ruin and
              the world's ending!

T H EO DE N f ac es hi s E NE MY !

                             THE ODEN ( cont'd )
              Death!

                         ROHIRRIM
                   (6000 voices)
              Death!                               ... ..

CLOSE ON: MERRY is swept up in the emotion . .. he whips out
his LITTLE SWORD!

                             THEODEN
              Death!

                             MERRY
              Death!

                             EOWYN
              Death!

                         THEODEN
                   (yelling)
              Death! Forth Eorlingas!

ALL the HORNS of the ROHIRRIM burst BLAST upon BLAST!




                                                              (CONTINUED)

                                     Final Revision - October, 2003 104
CONTINUED: ( 3 )


ANGLE ON: The 6000 ROHIRRIM move off, a great WALL of HORSES
and SPEAR POINTS, building up to a GALLOP like a rising tide,
as they CHARGE TOWARDS THE 50,000 ORCS!

ANGLE ON: MERRY, wind blowing his hair, EOWYN'S ARM around
his chest . . . as he YELLS at the top of his lungs !

ANGLE ON: GOTHMOG marshalling his troops.

                        GOTHMOG
             Fire!

The first VOLLEY of ARROWS hit the ROHAN SOLDIERS . . . The
charge continues . . .

                        THEODEN
             Charge !

The second VOLLEY . . . GOTHMOG watches in HORRIFIED AWE as the
ROHAN ADVANCE CONTINUES . . . SUDDEN FEAR runs through the ORC
and URUK-HAI assembled on PELENNOR FIELD . . . The ROHAN charge
like MEN POSSESSED!

ANGLE ON: The WALL o    f ROHIRRIM HORSES and SPEARS is seemingly
unstoppable! Entire     ORC COMPANIES vanish under their hooves,
like sand beneath a     foaming breaker, as they RACE towards the
MAIN BODY of the ORC     ARMY!

ANGLES ON: ORC ARCHERS fire into the thundering ROHIRRIM . . .
ORC SPEARS  LOWER . . . then SUDDENLY the ROHIRRIM crash into
the ORCS a nd the screen is FILLED with hacking, SLASHING
SWORDS and CLASHING SHIELDS . . .

...    A JAW-DROPPING SIGHT!

EXT. MINAS TIRITH STREETS - DAWN

ANGLE ON: PIPPIN rushes towards GANDALF, dodging FLAMING
DEBRIS.

                        PIPPIN
                  (panicked yell)
             Gandalf!

GANDALF wheels around on SHADOWFAX . . .
                                                       (CONTINUED)

                                   Final Revision - October, 2003 105.
CONTINUED: ( 4 )


                       PIPPIN (cont'd)
                 (breathless)
            Denethor has lost his mind! He's burning
            Faramir alive!

GANDALF pulls PIPPIN onto SHADOWFAX.

                       GANDALF
            Come! Quickly!

EXT. PELENNOR FIELDS - DAWN

The ROHAN charge is decimating the ENEMY!

                                                           CUT TO:

INT. MINAS TIRITH STEWARD'.S TOMB - DAWN

LOW ANGLE POV: DENETHOR standing on the table astride
FARAMIR, pouring OIL over his OWN HEAD . . . It runs through
his hair and down his face, quickly soaking his ROBES.

CLOSE ON: FARAMIR, his eyes flicker open. As he tries to FOCUS
through his delirium, OIL splashes onto his CHEST and FACE.

                       DENETHOR                        ,-
            Set a fire in our flesh!

BUNDLES of OIL-SOAKED wood are STACKED all around them.

SERVANTS are holding FLAMING TORCHES, awaiting their orders
... DENETHOR nods to them:

The SERVANTS approach the PYRE, TORCHES held firmly.

AT THAT MOMENT: GANDALF and PIPPIN burst into the HALLOWS,
astride SHADOWFAX!

                       GANDALF
                 (yelling)
            Stay this madness!

The fearful SERVANTS back away from the PYRE ...



                                                       (CONTINUED)

                                       Final Revision - October, 2003 106,
CONTINUED:


CLOSE ON: With a ROAR, DENETHOR SNATCHES a FLAMING TORCH ...
and HURLS it at the PYRE!

WHOOSH! The PYRE IGNITES!

ANGLE ON: GANDALF GALLOPS toward the PYRE, knocking DENETHOR
to his FEET ... PIPPIN LEAPS from SHADOWFAX onto the BURNING
PYRE!

With a desperate strength, PIPPIN pushes FARAMIR off the
BURNING PYRE ... they tumble down the BUNDLES of WOOD, onto
the FLOOR! PIPPIN douses FLAMES on FARAMIR'S clothing.

DENETHOR SCREAMS with RAGE!

                        DENETHOR
             No! Do not take my son from me!

DENETHOR leaps ACROSS THE PYRE, RIPPING and TUGGING at
PIPPIN! FIRE quickly spreads up DENETHOR'S OIL-SOAKED BACK as
he hauls PIPPIN off FARAMIR!

ANGLE ON: SHADOWFAX rears up and STRIKES at DENETHOR who
falls back onto the PYRE .

CLOSE ON: DENETHOR . . . he looks into his SON'S eyes . . . for a
BRIEF MOMENT SANITY returns.

                           DENETHOR (cont'd)
                   (whisper)
             Faramir . . .

ANGLE ON: FLAMES begin to ENGULF DENETHOR . . .

CLOSE ON: GANDALF pulls PIPPIN to safety . . . they look in
HORROR as . . .

SUDDENLY! DENETHOR lurches off the PYRE! Now a SCREAMING,
unguided BALL OF FLAME, he runs across the CHAMBER,
disappearing out of the door!




                                                        (CONTINUED)

                                    Final Revision - October, 2003 107.
CONTINUED: ( 2 )


                        CANDALF
                 (grimly)
            So passes Denethor, Son of Ecthelion.

                                                             CUT TO:

EXT. MINAS TIRITH - DAY

DENETHOR runs across the WHITE COURT atop MINAS TIRITH ...
and PLUMMETS straight over the 700 FOOT SHEER DROP into the
FLAMING CITY below!

EXT. PELENNOR FIELDS - DAY

PAN OFF: DENETHOR'S DEATH PLUNGE to the ROHIRRIM gaining the
upper hand - VAST NUMBERS of ORCS are SLAIN, or are FLEEING!

                       EOMER
            Drive them into the river!

THEODEN STANDS PROUD in his saddle, YELLING to his ROHIRRIM!

                        THEODEN                              .
                 (yelling)
            Make safe the city!

CLOSE ON: THEODEN . . . his look of JOY turns to HORROR! "

ANGLE ON: Across the VAST SEA of BATTLE come ...

. . . 20 MUMAKIL! MASSIVE elephant-like CREATURES, each
carrying a WAR-TOWER, packed with HARADRIM ARCHERS!

ANGLE ON: ROHIRRIM RIDERS PANICKING.

CLOSE ON: THEODEN on his HORSE, CIRCLING AMONGST THEM.

                       THEODEN (cont'd)
            Reform the line...Reform the line!

ANGLE ON: ROHIRRIM HORSES MOVING BACK INTO LINE.

                       THEODEN (cont'd)
                 (to GAMLING)
            Sound the charge!
                       (M�RE)                          (CONTINUED)

                                      Final Revision - October, 2003 108
CONTINUED:
                        THEODEN (cont'd)
                  (sword raised)
             ... Charge!

ANGLE ON: ROHIRRIM RIDERS CHARGE TOWARDS THE LINE OF MUMAKIL!

ANGLES ON: The MUMAKIL     BELLOW as they are goaded into war,
driven mercilessly by     their brutal HARADRIM MASTERS. They
LUMBER into the SEA of     MEN, crushing RIDERS and HORSES beneath
their MASSIVE FEET! Th    eir SPIKED TUSKS swing wildly, sweeping
and impaling RIDERS!

HARADRIM ARCHERS are sending a RAIN of ARROWS into the
PANICKING ROHIRRIM!

EOWYN and MERRY are THROWN from their HORSE ...

EXT. MINAS TIRITH - DAWN

HIGH WIDE: The SIXTH LEVEL of the CITY . . . Smoke rising
around it, fires burning beneath it . . .

EXT. THE SIXTH GATE, MINAS TIRITH - DAWN

WIDE ON: A rabble of ORCS are clustered outside the SIXTH
GATE as TROLLS pound on its WOODEN DOORS with HUGE HAMMERS.

ANGLE ON: WOOD splinters . . . The DOORS are near breaking
point.

ANGLE ON: GANDALF and PIPPIN sit on stone steps . . . Both
covered in sweat and grime, bone-weary from fighting, spirits
and hearts bruised . . .

PIPPIN looks towards the WOODEN GATES at which a NUMBER of
SOLDIERS continue to build a BARRICADE . . .

                         PIPPIN
                  (quiet)
             I didn't think it would end this way . . .

GANDALF looks at the SMALL HOBBIT a beat.

                         GANDALF
                  (gently)
             End? No, the journey doesn't end here.


                                                          (CONTINUED)

                                      Final Revision - October, 2003 109.
CONTINUED:


PIPPIN looks up at GANDALF, questioningly . . . .

                        GANDALF (cont'd)
             Death is just another path, one that we all
             must take.

ANGLE ON: GANDALF looks down to see PIPPIN looking up at him
with fear in his eyes . . .

                         GANDALF (cont'd)
                  (remembering)
             The grey rain curtain of this world rolls
             back and all turns to silver glass . . .
                  (to himself)
             and then you see it . . .

ANGLE ON: GANDALF breaks off, lost in reverie . . .

                        PIPPIN
             What, Gandalf? See what?

                        GANDALF
             White shores ... And beyond . . . A far green
             country under a swift sunrise.

PIPPIN stares up at the OLD WIZARD'S FACE, softened, quiet
and full of peace . . .

                         PIPPIN
                  (quiet)
             Well, that isn't so bad.

                        GANDALF
                  (gently)
             No . . . No, it isn't.

BOOM!

ANGLE ON: GANDALF and PIPPIN'S faces turn as the WOODEN DOORS
shudder under another BLOW.

                                                             CUT TO:

                                    Final Revision - October, 2003 110,



EXT. PELENNOR FIELDS - DAY

ANGLE ON: The battlefield is in CHAOS as MUMAKIL decimate the
VALIANT ROHIRRIM . . .

CLOSE ON: THEODEN tries to rally his men amid the SEA of
CRYING MEN and NEIGHING HORSES!

                      THEODEN
                (yelling)
           Rally to me! To me!

SUDDENLY the WITCH-KING SWOOPS down on his NAZGUL scooping up
THEODEN and his HORSE ... they CARTWHEEL into the AIR and
land in a heap ... the HORSE is .DEAD ... THEODEN lies DYING
beneath it.

ANGLE ON: The WITCH-KING swooping down on his FELL-BEAST!

The FELL-BEAST lands on THEODEN'S DEAD HORSE.

                      WITCH-KING
           Feast on his flesh!

ANGLE ON: The FELL-BEAST opens it's WICKED JAWS . . . !

ANGLE ON: A ROHAN SOLDIER stands before the BEAST . . . it is
EOWYN!

                     EOWYN
           I will kill you if you touch him!

CLOSE ON: The WITCH-KING laughs . . .

                     WITCH-KING
           Do not come between the Nazgul and his
           prey!

ANGLE ON: The FELL-BEAST lifts EOWYN from her feet ...

SUDDENLY! With a mighty SWORD BLOW, the FELL-BEAST'S HEAD is
SEVERED! The huge CREATURE crumples to the ground, VAST WINGS
out-stretched, sending the WITCH-KING sprawling!



                                                      (CONTINUED)

                                    Final Revision - October, 2003 111,
CONTINUED:


ANGLE ON: The WITCH-KING rises out of the wreckage . . . tall
and threatening . . .

EOWYN stands before him,the FELL-BEAST'S BLOOD dripping from
her SWORD!

With a shrill SHRIEK of HATRED, he knocks EOWYN backwards
with his MACE! STUNNED EOWYN tries to stand and is hit once
again with another CRIPPLING BLOW . . .

ANGLE ON: The WITCH-KING laughs once again as he SMASHES his
MACE downward ... EOWYN tries to block the BLOW but her
SHIELD shatters into MANY PIECES!

The WITCH-KING towers over EOWYN ... raising his MACE for the
KILLING BLOW!

                                                           CUT TO:

EXT. MINAS TIRITH DOCKS - DAY

ANGLE ON: an ORC COMMANDER hurrying on to the ANDUIN RIVER
DOCKS, close to the CITY. LARGE BLACK SHADOWS slide across
the DOCKS, as SAILING SHIPS approach O.S.

ANGLE ON: A sinister BLACK SAILED SHIP GLIDES into the "DOCKS
. . . 9 OTHER CORSAIR SHIPS follow behind.

CLOSE ON: The ORC COMMANDER ...

                        ORC COMMANDER
                  (angry)
             Late as usual! Get off your ships, you sea
             rats! There's knife work here needs doing.

ANGLE ON: ARAGORN leaping from the LEADING SHIP and charging
across the DOCKS, ROARING at the top of his LUNGS! He is
followed by LEGOLAS and GIMLI . . .

ANGLE ON: Surprised ORC REACTION to the THREE charging
towards THOUSANDS of ORCS!

                     GIMLI
      � ��� Plenty for the both of us . . . May the best
          dwarf win!
       .                                               (CONTINUED)
       ;

                                      Final Revision - October, 2003 112.
CONTINUED:


ANGLE ON: The ARMY OF THE DEAD suddenly LEAP straight out of
the SIDES of the SHIPS! They charge ACROSS the SURFACE OF THE
WATER with FRIGHTENING SPEED, overtaking ARAGORN!

The ORCS SCREAM at the SIGHT of 5000 SPECTRAL WARRIORS!

ANGLE ON: The SPECTRAL WARRIORS SWARM into the flank of the
QRC ARMY! With a raging blood-lust, the UNDEAD climb over the
top of each other to try and reach the enemy, creating a kind
of.ROLLING MOUNTAIN of GHOULS that sweep all before them
away!

The ORCS have no defence as their WEAPONS CANNOT MAKE CONTACT
with the GHOSTS!

EXT. PELENNOR FIELDS - DAY

ANGLE ON: MERRY on the ground . . . He looks around to see THE
WITCH-KING standing over EOWYN, pulling her to her FEET!

                         WITCH KING
             No man can kill me . . . Die!

ANGLE ON: MERRY driving his SWORD into the back of the WITCH-
KING'S KNEE! MERRY'S SWORD bursts into FLAME and his ARM is.
shot with PAIN . . .

EOWYN struggles to her feet . . . pulling off her HELMET:

CLOSE ON: EOWYN . . . her LONG HAIR tumbling onto her
shoulders!

                        EOWYN
             I am no man!

With her last strength, EOWYN thrusts her SWORD into the
WITCH-KING'S FACE! EOWYN'S SWORD SHATTERS into MANY SHARDS!

The WITCH-KING topples back DEAD, a BLACK OOZE leaking from
his ROBES and ARMOUR! A shuddering CRY, fading into a SHRILL
WAIL passes with the WIND.

ARAGORN and LEGOLAS battle the ORC - LEGOLAS JUMPS onto the
BACK of a GIANT MUMAKIL bringing it down ... he lands on his
feet in front of GIMLI . . .
                                                        (CONTINUED)

                                     Final Revision - October, 2003 113.
CONTINUED:


                        GIMLI
             That still only counts as one!

The MUMAKIL react with terror as SPECTRAL WARRIORS climb up
their SIDES, routing the HARADRIM from their WAR-TOWERS!

ORCS flee in their THOUSANDS ... the TERRIFIED MUMAKIL
trampling them in their PANIC to ESCAPE!

ANGLE ON: The ARMY OF THE DEAD swarming over the CITY,
routing the ORCS!

ANGLE ON: EOWYN crawls to where THEODEN lays, mortally
wounded . . .

THEODEN looks up at EOWYN ... his breathing shallow ... his
vision clouded . . .

                        THEODEN
                  (gasping weakly)
             I know your face ... Eowyn ...

EOWYN smiles down at him as she GENTLY STROKES his FACE ...

                       THEODEN (cont'd)
             My eyes darken ...

                        EOWYN
             No . . . I am going to save you ...

                         THEODEN
                  (loving)
             You already did . . .
                  (clutching her hand)
             My body is broken ... you have to let me go


                        EOWYN
             N ...
              o

THEODEN touches her tear-stained face ...

                        THEODEN
             I go to my fathers . . . in whose mighty
             company, I shall not now feel ashamed ...
                                                         (CONTINUED)

                                      Final Revision - October, 2003 114
CONTINUED: (2)


THEODEN is DYING . . .

                         THEODEN (cont'd)
            Eowyn?

THEODEN DIES ... EOWYN breaks down, SOBBING ... ALL AROUND is
a VISTA OF DEFEAT.

                                                             CUT TO:

EXT. PELENNOR FIELDS, MINAS TIRITH - DAY

WIDE ON: PELENNOR FIELDS . . . strangely SILENT . . . all ORCS
have fled ... BATTLE DEBRIS and BODIES stretch as far as the
eye can see...

ABOVE MINAS TIRITH ... BLINDING SUN RAYS break through the
LOW CLOUDS!

ANGLE ON: GANDALF, LEGOLAS, GIMLI and PIPPIN watch as . . .
ARAGORN walks slowly across the FIELD OF BATTLE towards the
HIDEOUS GHOULS ...

                       KING OF THE DEAD
            Release us.

                       GIMLI
                 (quietly)
            Bad idea. Very handy in a tight spot, these
            lads - despite the fact, they're dead!

                      KING OF THE DEAD
            You gave us your word.

                       ARAGORN
            I hold your oath fulfilled . . . Go. Be at
            peace.

ANGLE ON: The ARMY OF THE DEAD slowly DISSOLVE INTO DUST, and
are immediately swept away by the four winds.

ARAGORN turns to GANDALF who bows his head in HOMAGE ...




                                                         (CONTINUED)

                                       Final Revision - October, 2003 115.
CONTINUED:


PIPPIN, in his GONDORIAN armour, looks around at the
devastation ... his eyes full of SADNESS ... they suddenly
fix on something.

ANGLE ON: PIPPIN running through the RUIN of the BATTLE . . .
towards a SMALL FIGURE slumped on the ground ...

                          PIPPIN
             Merry ...?

MERRY stares unseeing at PIPPIN ... HORROR and SHOCK erasing
all other memories from MERRY'S mind ... tears fall down
PIPPIN'S FACE as he looks on his FRIEND . . .

                         PIPPIN (cont'd)
             Merry . . . it's me, it's Pippin . . .

                        MERRY
                  (groggy)
             I knew you'd find me.
                  (disorientated)
             Are you going to leave me?

                       PIPPIN
             No Merry, I'm going to look after you.

ANGLE ON: PIPPIN covers MERRY with a blanket . . .

                                                            CUT TO:

EXT. TOWER OF CIRITH UNGOL - NIGHT

CAMERA RISES ... towards the dark ORC TOWER of CIRITH UNGOL.
A light glows from the TOPMOST WINDOW.

CAMERA reaches the TOWER, dissolving through the wall into...

                                            �               CUT TO:

INT. TOWER OF CIRITH UNGOL/TOP ROOM - NIGHT

. . . a small cold ROOM. FRODO BAGGINS is UNCONSCIOUS on the
floor. His eyes suddenly flicker and he WAKES UP.


                                                        (CONTINUED)

                                    Final Revision - October, 2003 116,
CONTINUED:


TILT UP . . . to reveal the ORC and URUK-HAI, GORBAG and
SHAGRAT, arguing over FRODO'S BELONGINGS and CLOTHES! GORBAG
is snatching for the MITHRIL VEST.

                        SHAGRAT
             Hey! Hands off - that shiny shirt, that's
             mine.

                         GORBAG
             It's going to the Great Eye, along with
             everything else . . .

ANGLE ON . . . FRODO as he realizes that he has been STRIPPED
down to his UNDERWEAR. He clutches at his throat.

... The RING HAS GONE!

                        SHAGRAT
             I don't take orders from stinking Morgul
             rats!

GORBAG grabs for the MITHRIL VEST ...

                        GORBAG
                  (angry yell)
             You touch it, and I'll stick this blade in
             your guts!

ANGLE ON: GORBAG draws his SWORD, but SHAGRAT KICKS him
BACKWARDS with his foot! GORBAG FALLS THROUGH a TRAP DOOR
leading to the floor below!

                                                             CUT TO:

INT. TOWER OF CIRITH UNGOL/GUARD ROOM - NIGHT

ANGLE ON: GORBAG lands in the GUARD ROOM with a CRASH,
creating SUDDEN ALARM amongst the ORCS and URUK-HAI stationed
there.

SHAGRAT leans through the TRAP DOOR ...

                        SHAGRAT
                  (yelling)
             The scum tried to knife me! Kill him!
                        1                                (CONTINUED)

                                    Final Revision - October, 2003 117,
CONTINUED:


SEVERAL URUK-HAI converge on GORBAG - he LASHES OUT, slashing
one across the throat with his SWORD!

The DEAD URUK-HAI topples backwards over the PARAPET . . .

                                                          CUT TO:

EXT. TOWER OF CIRITH UNGOL/COURTYARD - NIGHT

... landing on top of URUK-HAI and ORCS in the courtyard
below. Within moments, a brutal CIVIL WAR breaks out between
the TWO COMPANIES stationed in CIRITH UNGOL!

EXT. PASS OF CIRITH UNGOL - NIGHT

ANGLE ON: SAM hurries towards the gate, fearful for FRODO.

                                                          CUT TO:

EXT. TOWER OF CIRITH UNGOL/COURTYARD - NIGHT

SAM is confronted with the sight of over 50 SLAUGHTERED ORC
and URUK-HAI, strewn over the COURTYARD!

ANGLE ON: SAM pounds UP THE STAIRCASE . . . he suddenly PAUSES.
SEVERAL URUK-HAI are running DOWN TOWARDS HIM! He grips STING
and continues CHARGING UP - SCREAMING at the top of his
lungs!

ANGLE ON: The FOUR URUKS . . . they see a HUGE DISTORTED SHADOW
on the wall in front of them! They turn around and flee in
terror back to the top of the stairs!

SAM appears - and before the URUK-HAI can fully regain their
wits - he slays THREE ... YELLING:

                       SAM
                (yelling . . . 1st URUK-HAI)             �
                                                         ,
           That's for Frodo!
                (yelling ... 2nd URUK-HAI)
           And for the Shire!
                (yelling . . . 3rd URUK-HAI)
           And that's for my old Gaffer!
                                �        �   �    �
SAM runs into the TOWER . . .

                                     Final Revision - October, 2003 118,



INT. TOWER OF CIRITH UNGOL/TOP ROOM - NIGHT

ANGLE ON: FRODO struggling against his bonds, as GORBAG
climbs back into the room ... with VENGEANCE in his EVIL
EYES.

                      GORBAG
           Stop your squeaking you dunghill rat!

CLOSE ON: GORBAG grabs FRODO'S hair and pulls his head back,
exposing his neck. He pulls out his SWORD, ready to cut
FRODO'S throat . . .

                      GORBAG (cont'd)
           I'm gonna bleed you like a stuck pig!

SUDDENLY! GORBAG GASPS as STING is rammed into his back by
SAM!

                      SAM
           Not if I stick you first!

GORBAG falls dead!

                      FRODO
                (joyous disbelief)
           Sam!!!

ANGLE ON: FRODO . . . humbled by SAM'S unswerving loyalty.

                       FRODO (cont'd)
           Oh, Sam . . . I'm so sorry . . . sorry for
           everything.

SAM quickly cuts FRODO free.

                      SAM
           Come on.

                      FRODO
                (despairing)
           It's too late. It's over . . . they've taken
           it. Sam - they took the Ring!!



                                                          (CONTINUED)

                                      Final Revision - October, 2003 119.
CONTINUED:


                         SAM
                  (quietly)
             Begging your pardon, but they haven't.

SAM pulls the RING from his pocket ...

                         SAM (cont'd)
             I thought I ' d lost you . . . so I took it -
             only for safe-keeping.

CLOSE ON: FRODO looks at SAM amazed . . . his eyes drop to the
RN ...
 IG

                        FRODO
             Give it to me.

SAM hesitates . . . . TENSION instantly builds between them.

                        FRODO (cont'd)
             Give me the Ring, Sam.

SAM seems strangely reluctant . . . ON THE SOUNDTRACK to HUM of
the RING builds

                        FRODO (cont'd)
             Sam! Give me the Ring.

CLOSE ON: SAM drops the RING into FRODO'S palm . . .

FRODO sags in RELIEF . . . he puts the RING back around his
nc . ..
 ek

                         FRODO (cont'd)
             You must understand . . . The Ring is my
             burden . . . it will destroy you, Sam.

FRODO looks at SAM, pain in his eyes ...

SAM looks down at FRODO ... his plain HOBBIT face full of
compassion. SAM'S resolve hardens, a new strength takes hold.




                                                             (CONTINUED)

                                     Final Revision - October, 2003 120
CONTINUED: (2)


                      SAM
           Come on, Mr Frodo, we'd best find you some
           clothes . . . you can't go walking through
           Mordor in naught but your skin.

                                                          CUT TO:

EXT. PASS OF CIRITH UN.GOL - NIGHT

FRODO and SAM are now dressed in FOUL-LOOKING ORC gear ...

ANGLE ON: FRODO and SAM turn east and walk over the SUMMIT of
CIRITH UNGOL ... into MORDOR.

CLOSE ON: FRODO and SAM . . . they STOP DEAD . . . STARING AHEAD:

ANGLE ON: MOUNT DOOM . . . 50 M,ILES AWAY - across the barren
GORGOROTH PLATEAU - the mountain is erupting streams of ASH
and LAVA high into the air, lighting the low cloud blanket of
MORDOR with a flickering ORANGE WASH.

With immense trepidation, FRODO and SAM head down the steep
path into the dark kingdom . . .

. . . TWO TINY FIGURES in a bleak, foreboding landscape. Before
them lies the PLAIN of GORGOROTH ... Their eyes are drawn to
the OMINOUS SILHOUETTE of MOUNT DOOM ...

                      SAM
           We did it, Mr Frodo. We made it to Mordor.

ANGLE ON: FRODO's eyes travel down towards the HUNDREDS of
FIRES which glow on the PLAINS beneath them ... thousands
upon thousands of ORCS are encamped there .

                      FRODO
           There are so many of them . . . So many.
           We'll never get through unseen.

THEIR eyes are drawn to a DARK LOOMING SHAPE ... BARAD-DUR
. . . A RED LIGHT seems to sweep across the PLAIN ...

                      FRODO (cont'd)
               (terror)
           It's him - the Eye.
                                                      (CONTINUED)

                                     Final Revision - October, 2003 121.
CONTINUED:


The GREAT EYE OF SAURON!

SAM cannot see what FRODO sees. GENTLY, he urges FRODO on.

                       SAM
             We have to go in there, Mr Frodo. There's
             nothing for it. Come on. Let's just make it
             down the hill for starters.

EXT. MINAS TIRITH, TOWER HALL - DAY

CLOSE ON: GANDALF stands in the TOWER HALL . . . seemingly
alone . . . he speaks quietly, doubt and fear edge his voice.

                        GANDALF
             Frodo has passed beyond my sight. The
             darkness is deepening.

He turns and crosses the HALL to reveal the presence of
GIMLI, LEGOLAS, EOMER and ARAGORN . . .

ARAGORN, his back to GANDALF . . .

                       ARAGORN
             If Sauron had the .Ring, we would know it.

CLOSE ON: GANDALF - still troubled, still worried . . .

                    GANDALF
          It's only a matter of time. He has suffered
          a defeat, yes, but behind the walls of
          Mordor our enemy is regrouping.

GIMLI sits insolently on the SEAT of the STEWARD . . .

                    GIMLI
          Let him stay there. Let him rot. Why should
          we care?

GANDALF looks across at the DWARF . . . His face ashen.

                    GANDALF
          Because ten thousand Ores now stand between
          Frodo and Mount Doom.
                     (MORE)
                                                      (CONTINUED)

                                     Final Revision - October, 2003 122
CONTINUED:
                        GANDALF (cont'd)
                  (to himself)
             I have sent him to his death.

ANGLE ON: ARAGORN turns around suddenly . . .

                        ARAGORN
             No.

GANDALF looks up sharply at ARAGORN . . .

                       ARAGORN (cont'd)
             There is still hope for Frodo. He needs
             time and safe passage across the Plains of
             Gorgoroth. We can give him that.

                        GANDALF
             How?

                        ARAGORN
             Draw out Sauron' s armies - empty his lands.
             Then we gather our full strength and march
             on the Black Gate.

At this, GIMLI CHOKES on his pipe . . . EOMER steps forward.

                        EOMER
             We cannot achieve victory from strength of
             arms .

                        ARAGORN
             Not for ourselves . . . But we can give Frodo
             his chance if we keep Sauron' s eye fixed
             upon us. Keep him blind to all else that
             moves .

                         LEGOLAS
             A diversion . . .

CLOSE ON: GANDALF speaks in a low tone to ARAGORN . . .

                         GANDALF
                  (doubtful)
             Sauron will suspect a trap. He will not
             take the bait!



                                                        (CONTINUED)

                                   Final Revision - October, 2003 123.
CONTINUED: ( 2 )


                       GIMLI
            Certainty of death. Small chance of
            success. What are we waiting for?

                                                            CUT TO:

EXT. PELENNOR FIELDS - DUSK

CLOSE ON: ARAGORN wearing a BREAST PLATE emblazoned with the
WHITE TREE.

He rides at the head of a COLUMN of 500 FOOT SOLDIERS from
ROHAN and CONDOR ... leading them from the :RUINS of
OSGILIATH.

GANDALF, LEGOLAS, GIMLI, EOMER, MERRY and PIPPIN ride
directly behind him.

AHEAD OF THEM: The MOUNTAINS of MORDOR.

EXT. PLAINS OF GORGORTH - NIGHT

GREAT ARMIES of ORC and URUK-HAI stream across the PLAINS
from MORDOR . . .

EXT. ORC ROAD, MORDOR - NIGHT

WIDE SHOT: The VOLCANIC WASTELAND of the GORGOROTH FOOTHILLS.

FRODO and SAM, still disguised in the ORC ARMOUR, slide down
scree bank and land on the road below . . . their attention is
fixed on the PLAIN below ... thousands of ORCS can be seen
marching away from MT. DOOM . . .

                       SAM
            Look, the Ores! They're moving off. You
            see, Mr Frodo - some luck at last.

EXT. GORGOROTH PLAIN, MORDOR - DAWN

FRODO and SAM ... moving across a HELLISH dry landscape of
twisted volcanic rock and STEAMING FISSURES.




                                                      (CONTINUED)

                                     Final Revision - October, 2003 124
CONTINUED:


40 MILES AWAY, MOUNT DOOM rises out of the PLAIN . . . its feet
founded in ashen ruin, its huge cone rising to a great
height, where its reeking head is swathed in cloud.

EXT. BLACK GATES OF MORDOR - DAY

ARAGORN'S FORCE of 500 approaches the great BLACK GATES OF
MORDOR. He positions his troops about half a mile from the
GATES.

EXT. GORGOROTH PLAIN, MORDOR - DAY

ANGLE ON: FRODO slumped against a ROCK . . . he tries to DRINK
from his WATER BOTTLE . . . but finds it EMPTY.

                        SAM
             Take mine . . . there's a few drops left.

FRODO gratefully takes a SMALL SIP from SAM'S BOTTLE . . .
hands it back.

                       FRODO
             There'll be none left for the return
             journey.

                       SAM
                 (softly)
             I don't think there will be a return
             journey, Mr Frodo.

A moment of EYE CONTACT between FRODO and SAM as they
acknowledge what lies ahead.

SAM offers FRODO his hand . . . and PULLS HIM UP.

                                                          CUT TO:

EXT. BLACK GATES OF MORDOR - DAY

At the BLACK GATES, ARAGORN musters his MEN . . .

                                                          CUT TO:

                                     Final Revision - October, 2003 125,



EXT. PLAINS OF GORGOROTH - DAY

WIDE ON: FRODO and SAM staggering across the TORTURED
LANDSCAPE ... they are no longer WEARING the ORC ARMOUR.

CLOSE ON: FRODO is walking half-bowed, often stumbling . . . as
if his eyes not longer see the way before his feet.

His right HAND is pressed against his CHEST ... supporting a
HEAVY WEIGHT. His left HAND often rises, as if to ward off
some invisible blow. SAM watches him, CONCERN etched across
his FACE . . .

CLOSE ON: FRODO as a malevolent VOICE in his head calls to
him . . . "Baggins - Baggins" . . .

CLOSE ON: SAM looking behind him in time to see . . .

WIDE ON: A RAY of RED LIGHT stabs through the GLOOM and
begins to sweep over the BARREN LANDSCAPE . . .

                         SAM
           Fo o g td w
            rd , e on

SAM throws himself to the ground ... FRODO turns to the
light, unable to stop himself . . .

FRODO crumpling to the ground as the RED LIGHT hits him like
a SEARCHLIGHT.

EXT. BLACK GATES OF MORDOR - NIGHT

All is QUIET . . . No sign of the ENEMY . . .

                       PIPPIN
                (wary)
           Where are they?

ANGLE ON: GANDALF . . . watchful . . . alert. He nods at ARAGORN.

WIDE: ARAGORN, GANDALF, LEGOLAS, GIMLI, EOMER, MERRY and
PIPPIN galloping towards the BLACK GATES. They pull up less
than 50 yards from the TOWERING GATES . . .

                                                   INTERCUT WITH:

                                     Final Revision - October, 2003 126.



EXT. PLAINS OF GORGOROTH - NIGHT

FRODO is slumped on the GROUND, unable to MOVE ...

                                                   INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - NIGHT

ANGLE ON: ARAGORN moves his HORSE forward.

                    ARAGORN
          Let the lord of the Black Land come forth;
          let justice be done upon him.

From behind the HUGE GATES, the terrifying CHANTING and the
CLANGING of the ARMOUR of THOUSANDS ...

With the SOUND of TORTURED METAL, the MASSIVE GATES begin to
open . . . LEGOLAS, MERRY and EOMER look on in trepidation.

EXT. PLAINS OF GORGOROTH - NIGHT

With the EYE OF SAURON sweeping the PLAINS around them, SAM
gets to his feet ...

EXT. BLACK GATES OF MORDOR - NIGHT

The BLACK GATES of MORDOR SWING OPEN! SAURON'S ARMY of
300,000 ORCS MARCH OUT!

                    ARAGORN
          Pull back! Pull back!

ANGLE ON: ARAGORN, GANDALF, LEGOLAS, GIMLI, EOMER, MERRY and
PIPPIN GALLOP back towards their SMALL ARMY as the ORC MASSES
slowly MARCH toward them.

Behind them, the EYE OF SAURON is directed toward THEM ...

                                                          CUT TO:

EXT. PLAINS OF GORGOROTH - NIGHT

FRODO'S eyes open with a START ...

                                                      (CONTINUED)

                                    Final Revision - October, 2003 127.
CONTINUED:


                        SAM
             It's gone, Mr Frodo.

ANGLE ON: SAM crawls toward FRODO . . .

                        SAM (cont'd)
             The light's passed on, away towards the
             North . . . something's drawn it's gaze.

FRODO and SAM stagger to their feet and move off.

                                                             CUT TO:

EXT. BLACK GATES OF MORDOR - DAY

ANGLE ON: The MASSIVE ORC ARMY marching towards ARAGORN'S
MEN.

ANGLES ON: ARAGORN'S MEN . . . starting to WAVER as the ORCS
ENCIRCLE THEM. SOME MEN are backing away ... losing their
nerve.

ARAGORN GALLOPS in front of his ARMY . . .

                        ARAGORN
             Hold your ground - hold your ground! Sons
             of Gondor - of Rohan . . . my brothers!

ANGLE ON: ARAGORN . . . he seems to fix each and everyone of
his MEN with his eyes.

                       ARAGORN (cont'd)
             I see in your eyes the same fear that would
             take the heart of me. The day may come when
             the courage of Men fails; when we forsake
             our friends and break all bonds of
             fellowship; but it is not this day - an
             hour of wolves and shattered shields, when
             the Age of Man comes crashing down - but it
             is not this day!!! This day we fight! By
             all that you hold dear on this good earth -
             I bid you stand!

ARAGORN holds ANDURIL ALOFT!


                                                         (CONTINUED)

                                     Final Revision - October, 2003 128.
CONTINUED:


                        ARAGORN (cont'd)
             Men of the West!

                                                             CUT TO:

EXT. MOUNT DOOM - NIGHT

FRODO and SAM are CLIMBING the face of MOUNT DOOM ...

The LANDSCAPE is VIOLENT ... RED HEAT hisses out of FISSURES,
the ROCK is JAGGED ... RAZOR SHARP ... ASH blankets the LAND.

RED LIGHTNING FORKS across the SKY with a DEAFENING CRACK!.

CLOSE ON: FRODO and SAM'S FEET dragging across the ASH . . .
Their PARCHED LIPS . . . SWEATING, DUSTY FACES.

FRODO TRIPS ... falls FACE-FIRST into the DUST ... SAM drops
beside him.

                                                   INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

HIGH WIDE: Of ARAGORN'S ARMY, totally SURROUNDED by 300,000
ORCS . . . poised for the order to ATTACK!

                                                   INTERCUT WITH:

EXT. MT DOOM - NIGHT

FRODO slowly lifts his head and looks up . . .

FRODO'S POV: Looking .straight up the STEEP SLOPES of MOUNT
DOOM! . . . a huge mass of ash and slag and burned stone!

FRODO starts to CRAWL on his HANDS and KNEES! He hauls
himself a FEW PITIFUL FEET before SLUMPING in the ASH.

                                                             CUT TO:

EXT. BLACK GATES OF MORDOR - NIGHT

ANGLE ON: GIMLI as he surveys the ARMY of MORDOR . . .

                                                         (CONTINUED)

                                        Final Revision - October, 2003 129.
CONTINUED:


                        GIMLI
             Never thought I ' d die fighting side by side
             with an Elf.

                        LEGOLAS
                  (quietly)
             What about side by side with a friend?

GIMLI looks up into the EYES of LEGOLAS, with whom he has
shared so much. The GRUFF DWARF smiles quietly . . . .

                        GIMLI
             Aye - I could do that.

LEGOLAS drops his hand on GIMLI'S shoulder . . . SLOWLY they
turn and FACE the ENEMY TOGETHER.

                                                              CUT TO:

EXT. GORGOROTH PLAIN, MORDOR - NIGHT

CLOSE ON: SAM crawls to FRODO who lies SLUMPED against the
rock-face . . . he turns him over, holding him in his ARMS.

                         SAM
                  (softly)
             Do you remember the Shire, Mr Frodo?
             . . . It'll be spring soon, and the orchards
             will be in blossom; and the birds will be
             nesting in the hazel thicket; and they'11
             be sowing the summer barley in the lower
             fields; and eating the first of the
             strawberries with cream.
                  (looking down at FRODO)
             Do you remember the taste of strawberries?

CLOSE ON: FRODO shuts his eyes, his breath coming in GASPS.

                        FRODO
                  (weak whisper)
             No, Sam. I can't recall    the taste of food;
             nor the sound of water;     nor the touch of
             grass . . . I'm naked in   the dark.
                  (rising panic)
             There's no veil between    me and the wheel of
             fire. I can see it with    my waking eyes.
                                                         (CONTINUED)

                                    Final Revision - October, 2003 130,
CONTINUED:


CLOSE ON: SAM looks at FRODO with GRIM DETERMINATION.

                       SAM
             Then let us be rid of it - once and for
             all! Come on, Mr Frodo. I can't carry it
             for you ... but I can carry you! Come on!

With that, SAM lifts FRODO on to his shoulders and starts to
CLIMB MOUNT DOOM! His plain hobbit-face grows stern, almost
grim, as the will hardens in him.

WIDE ON: TWO TINY HOBBITS on the ENDLESS shale SLOPES of the
MOUNTAIN ...

                                                             CUT TO:

EXT. BLACK GATES OF MORDOR - DAY

ANGLE ON: ARAGORN and COMPANY watch as they are surrounded by
a tide of ORCS . . .

ARAGORN raises ANDURIL in the BROAD SWEEP as he walks forward
. . . he turns to FACE the OTHERS . . .

CLOSE ON: QUIET RESOLVE written on ARAGORN's face as he looks
into the EYES of the remaining members of the FELLOWSHIP ...

                          ARAGORN
                   (softly)
             For Frodo . . .

ANGLE ON: ARAGORN turning, SWORD-raised, he CHARGES FORWARD!

There is a moment of SILENCE . . . no-one else moves . . .
SUDDENLY a SHOUT goes up!

ANGLE ON: PIPPIN and MERRY charging forward . . . The rest of
the MEN following ...

ANGLE ON: ARAGORN crashing head on into a line of ORCS . . .

ANGLE ON: The blade of ANDURIL flashing as ARAGORN HACKS at
ORCS!

                                                             CUT TO:

                                   Final Revision - October, 2003 131,



EXT. SLOPES OF MOUNT DOOM - DAY

WIDE: Like a small grey insect, SAM creeps up the slope with
FRODO on his back . . . foot by foot.

The mantling CLOUD swirls, revealing the cruel pinnacles and
iron crown of BARAD-DUR, the Dark Tower, in the distance.

CLOSE ON: SAM staggering under FRODO'S weight . . . STRONG ash-
laden WINDS are buffeting him as he slowly CLIMBS MOUNT DOOM.

The PLAIN of GORGOROTH lies 1000 FEET BELOW, wrapped in fume
and shadow.

A TREMOR ripples through the GROUND . . . a RED FLAME explodes
into the SKY . . .

ANGLE ON: SAM looks up - fearful the MOUNTAIN could explode
at any moment!

SAM POV: Through the THICK, FUME-LADEN AIR a set of STAIRS
can be made out . . .

                      SAM
                (growing excitement)
           Look, Mr Frodo! We're almost there!       -.-.

SAM can't believe it - relief and joy flood through him . . .

                     GOLLUM
          Clever Hobbits to climb so high!

SMACK!. OUT OF NOWHERE the figure of SMEAGOL crashes into them
sending SAM and FRODO sprawling.

ANGLE ON: SMEAGOL pounces on FRODO . . . his fingers wrapping
around his throat, snapping FRODO'S neck from side to side!

ANGLE ON: FRODO as he struggles to unlock the BONY, WHITE
FINGERS around his neck but SMEAGOL'S grip is too strong.

CLOSE ON: SMEAGOL'S fingers tightening around FRODO'S neck -
squeezing the life out of him . . .

WHACK! A ROCK connects with the SIDE of SMEAGOL'S head . . .
                                                     (CONTINUED)

                                     Final Revision - October, 2003 132,
CONTINUED:


ANGLE ON: SAM jumps on a STUNNED SMEAGOL . . .

ANGLE ON: FRODO comes to . . .

                                                    INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

The BATTLE between MEN and ORCS rages on . . . From MORDOR,
high OVERHEAD, the NAZGUL fly out into the FRAY ...

                                                    INTERCUT WITH:

EXT. SLOPES OF MOUNT DOOM - DAY

All the old HATRED between SAM and SMEAGOL boils over as they
FIGHT . . . SAM falls back . . . SMEAGOL BITING at his SHOULDER!
SAM pushes SMEAGOL away with his feet . . . rolls to his KNEES,
as SMEAGOL charges at him . . .

SAM slashes out with STING! He cuts SMEAGOL across the
stomach! SMEAGOL staggers back, SCREAMING with PAIN . . .

SAM looks around desperately for FRODO ...

                        SAM
                  (yelling desperately)
             Frodo!

FRODO has GONE!

ANGLE ON: FRODO RUNNING UP THE MOUNTAIN!

                                                    INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

FELLOWSHIP fight BRAVELY . . . a hideous screech rends the AIR!

ANGLE ON: GANDALF looks up to a NAZGUL diving straight toward
him!

CLOSE ON: GANDALF eyes flicker as a small MOTH flutters
across his line of sight.

                                                       (CONTINUED)

                                     Final Revision - October, 2003 133.
CONTINUED:


ANGLE ON: THE FELL BEAST - JAWS OPEN, TALONS EXTENDED!

Another cry rends the air as . . .

SMACK! The GIANT EAGLE, GWAHIR, SMASHES into the FELLBEAST,
it's claws ripping into the HIDEOUS MONSTER'S NECK!

ANGLE ON: PIPPIN in the midst of BATTLE looks up.

                          PIPPIN
                   (disbelieving)
             Eagles . . .

Above the BATTLE attack formation, more EAGLES appear . . .

                     . . . PIPPIN (cont'd)
             The Eagles are coming! The Eagles are coming!

The EAGLES engage the NAZGUL!

                                                             CUT TO-

EXT. DOOR OF SAMMATH NAUR, MOUNT DOOM - DAY

ANGLE ON: SAM is GASPING, his lungs EXPLODING as he RACES up
the SLOPES of MOUNT DOOM searching for FRODO.

ANGLE ON: SAM arriving at the STONE DOORWAY of SAMMATH NAUR
. . . leading into the MOUNTAIN!

SAM staggers into it!

INT. THE CRACK OF DOOM TUNNEL - DAY

ANGLE ON: SAM flinches against the FIERCE HEAT blasting down
the TUNNEL.

                         SAM
                  (yelling)
             Frodo!

SAM lurches forward ... towards an ORANGE GLOW deep in the
HEART of the MOUNTAIN.

                                    Final Revision - October, 2003 134



INT. CRACK OF DOOM - DAY

The HEAT is almost UNBEARABLE ... SAM sees FRODO in the
DISTANCE ...

                       FRODO
            I'm here, Sam.

ANGLE ON: FRODO is standing on the EDGE of the CRACK OF DOOM
. . . a deep LAVA FILLED CHASM, in the very heart of ancient
SAURON'S FORGES, the greatest in Middle-earth.

The RAGING ORANGE GLARE from the CHASM turns FRODO into a
BLACK SILHOUETTE . . . standing TENSE and STILL.

FRODO holds the RING in his HAND . . . he RAISES IT, holding
it over the BUBBLING LAVA far below.-

                       SAM
                 (yelling)
            Destroy it - go on! Throw it in the fire!

CLOSE ON: FRODO . . . a STRANGE EXPRESSION on his face . . .

                       SAM (cont'd)
            What are you waiting for? Just let it go!

ON THE SOUNDTRACK: The HUM of the RING grows louder and
louder! FRODO PULLS the RING close to his body as he turns to
SAM.

FRODO looks at SAM, the RING has finally taken him.

                       FRODO
            The Ring is mine.

SAM SCREAMS as . . .

...    FRODO PUTS THE RING ON! He VANISHES!

                       SAM
            No!        :

                                                           CUT TO:

                                    Final Revision - October, 2003 135.



EXT. BLACK GATES OF MORDOR - DAY

With a storm of wings, the NAZGUL wheel around and hurtle
towards MOUNT DOOM!

In the midst of the BATTLE - GANDALF ... realising FRODO has
been seen . . .

                                                     INTERCUT WITH:

INT. CRACK OF DOOM - DAY

CLOSE ON: SAM is SCREAMING for FRODO . . .

ANGLE ON: FOOTPRINTS moving across the ASH COVERED CAVERN
FLOOR!

SUDDENLY! GOLLUM smashes a ROCK down on SAM'S HEAD, knocking
him to the GROUND!

GOLLUM LEAPS on to the INVISIBLE FRODO!

CLOSE ON: FRODO'S FOOTPRINTS . . . staggering about under
GOLLUM'S WEIGHT!

ANGLE ON: GOLLUM clawing FRANTICALLY, riding on the BACK of
the INVISIBLE FRODO . . .

                                                     INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

ARAGORN turns and is confronted by an ARMOURED TROLL,
wielding an ENORMOUS MALLET . . .

                                                     INTERCUT WITH:

INT. CRACK OF DOOM

GOLLUM suddenly LIFTS HIS HANDS to his face ... and BITES
HARD!

ANGLE ON: FRODO MATERIALIZES as he DROPS TO HIS KNEES,
clutching his BLEEDING HAND . . . he SCREAMS.

                                                         (CONTINUED)

                                   Final Revision - October, 2003 136,
CONTINUED:


The FIRES below roar in anger, RED LIGHT blazes, and all the
cavern is filled with a great glare and heat.

                                                   INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

ANGLE ON: LEGOLAS as ARAGORN falls to the GROUND . . .

                                                   INTERCUT WITH:

INT. CRACK OF DOOM - DAY

CLOSE ON: GOLLUM triumphantly HOLDS the RING ALOFT . . .
ECSTATIC!

CLOSE ON: GOLLUM dancing GLEEFULLY . . . PERILOUSLY close to
the EDGE OF THE CHASM!

                                                   INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

ARAGORN turns to see HUGE TROLL FEET moving CLOSER ...
LEGOLAS races toward him ...

INT. CRACK OF DOOM

GOLLUM still TRIUMPHANT . . . on the edge of the PRECIPICE ...
The FIERY LAVA casting an EVIL LIGHT . . . He jumps about in
DELIGHT . . .

                       GOLLUM
             Precious! Precious!

ANGLE ON: FRODO rises slowly . . . his EYES lock on GOLLUM . . .
time seems to stand still as each regards the other ...

CLOSE ON: the RING glinting in GOLLUM'S HAND . . . BEAUTIFUL
... POWERFUL ... EVIL . . .

SUDDENLY! FRODO lunges at GOLLUM ...

FRODO thuds into GOLLUM, lifting him off his feet . . .

                                                         (CONTINUED)

                                       Final Revision - October, 2003 137.
CONTINUED:


ANGLE ON: FRODO and GOLLUM locked in STRUGGLE plummet over
the EDGE OF THE CHASM.

                                                     INTERCUT WITH:



EXT. BLACK GATES OF MORDOR - DAY

THUD! The HUGE FOOT of the CAVE TROLL lands on ARAGORN'S
chest. He STABS at. it ineffectually . . .

ANGLE ON: GANDALF in despair ...

                                                     INTERCUT WITH:

INT. CRACK OF DOOM

SAM watches in HORROR as FRODO and GOLLUM ... disappear into
the CHASM! He staggers over . . .

SLOW MOTION: GOLLUM falls into the CRACK OF DOOM . . .
INSTANTLY engulfed in the CHURNING LAVA!

ANGLE ON: SAM leans into the CRACK OF DOOM . . .

ANGLE ON: FRODO clinging onto the ROCK FACE with his ONE GOOD
HAND!

The CAVERNS are SHAKING VIOLENTLY.

SAM desperately reaches for him . . . FRODO is too far down.

                        SAM
             Give me your hand.

CLOSE ON: FRODO looks at SAM, his face impassive.

                        SAM (cont'd)
             Take my hand!

FRODO struggles to reach SAM . . . he.can't reach WITH HIS
BLEEDING hand, and falls'back, still clinging valiantly to
the ROCK with his good hand . . .

                                                        (CONTINUED)

                                      Final Revision - October, 2003 138,
CONTINUED:


                       SAM (cont'd)
             No!

ANGLE ON: FRODO looks at SAM imploringly . . .

                        SAM (cont'd)
             Don't you let go! Don't let go.
                  (desperate)
             Reach!!!

ANGLE ON: FRODO reaches up once more and this time SAM GRASPS
his hand TIGHTLY .

CLOSE ON: The RING sits on the river of LAVA for a brief
moment, then SINKS away . . .

ANGLE ON: the EYE OF SAURON . . .

WIDE ON: Across the GREAT PLAINS - MOUNT DOOM is clearly
IMPLODING ...

                                                     INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

On the BATTLEFIELD, all eyes turn to MOUNT DOOM ...

ANGLE ON: The CAVE TROLL, with ARAGORN at his mercy, is
distracted by the SOUNDS emanating from MORDOR . . . he turns
in TERROR and RUNS OFF . . .

EXT. BARAD-DUR - DAY

ANGLE ON: The FELLOWSHIP turn to watch as the MASSIVE DARK
TOWER of SAURON shakes itself to pieces!

TOWERS FALL and WALLS CRUMBLE; vast spires of SMOKE and
spouting STEAM billow up!

The FOUNDATIONS explode apart ...

EXT. BLACK GATES OF MORDOR - DAY

The BLACK GATES collapse in a huge cloud of ASH!

                                                        (CONTINUED)

                                      Final Revision - October, 2003 139.
CONTINUED:


THE ORCS are FLEEING in all DIRECTIONS . . . As the very
foundations of MORDOR collapse!

THE COMPANY watch as MOUNT DOOM explodes ... the reason for
their MISERY is clear . . . it's plain FRODO and SAM can never
survive the cataclysm ...

                                                             CUT TO:

EXT. SLOPES OF MOUNT DOOM - DAY

The VOLCANO is ERUPTING, FIRE belches from it's riven summit,
sending LAVA streaming down it's sides..

ANGLE ON: FRODO and SAM stagger out of the SAMMATH NAUR DOOR
. . . all around ASH and MOLTEN ROCKS fall. The SKIES burst
into THUNDER, seared with LIGHTNING.

The screaming NAZGUL fall from the sky in FLAMES!

The ground is shaking so violently that FRODO and SAM can
barely stand.

FRODO stumbles . . . SAM helps him up . . . FRODO smiles.

                         FRODO                    .          ..
             It's gone . . . it's done.

SAM looks down at FRODO ... FRODO'S FACE is at PEACE ... his
BURDEN destroyed . . .

                        SAM
             Yes, Mr. Frodo ... it's over now.

FRODO and SAM crawl onto a ROCK as LAVA streams towards them
. . . in seconds THEIR ROCK is an island in a sea of MOLTEN
FIRE.                                                     ,'
                                                           .

FRODO shuts his eyes . . .

                        FRODO
                  (remembering)
             I can see the Shire ... The Brandywine
             River, Bag End, Gandalf's fireworks . . . the
             lights in the Party Tree . . .
                                                       (CONTINUED)

                                      Final Revision - October, 2003 140.
CONTINUED:


                          SAM
             Rosie Cotton dancing ... she had ribbons in
             her hair . . .
                   (sobs)
             . . . if ever I was to marry someone . . . it
             would have been her . . . it would have been
             her.

FRODO glances at SAM . . . he is WEEPING.

CLOSE ON: FRODO wrapping an ARM around SAM'S SHOULDER.

                        FRODO
                  (calm)
             I'm glad to be with you, Samwise Gamgee . . .
             here at the end of all things.

HIGH WIDE: TWO TINY HOBBITS waiting to die amid a cataclysmic
landscape . . . LAVA erupts around them ... FIREBALLS rain down
from the sky.

We SLOWLY FADE TO BLACK ...

FADE UP:

SLOW MOTION: GWAIHIR, the GREAT EAGLE flaps towards CAMERA
. . . He bears GANDALF on his back, and is followed by TWO MORE
EAGLES.

WIDE SHOT . . . The EAGLES bravely fly amid the RAINING ASH and
MOLTEN ROCKS ... and SNATCH FRODO and SAM from the ROCK!

CLOSE ON: FRODO'S FACE . . . as the FIERY VOLCANO recedes away
beneath him . . . the wind ruffles his hair . . . he PASSES OUT.

FADE TO BLACK.

INT. MINAS TIRITH, HOUSES OF HEALING - DAY

SLOW MOTION ... FRODO'S eyes flutter open ... looking around
slowly his eyes alight on GANDALF ...

                        FRODO
             Gandalf?


                                                        (CONTINUED)

                                     Final Revision - October, 2003 141.
CONTINUED:


GANDALF'S face breaks into a smile ... then laughter ...

. . . as MERRY and PIPPIN run in . . . jumping on the bed and
hugging FRODO . . .

GIMLI and LEGOLAS enter the room . . . their joy is PLAIN . . .

ARAGORN joins them - the FELLOWSHIP is complete . . .

. . . finally FRODO'S eyes fall upon a FIGURE standing apart
from the others . . . it is SAM ...

CLOSE ON: FRODO'S and SAM'S eyes meet . . .

                                                            CUT TO:

EXT. MINAS TIRITH, COURT OF THE KINGS - DAY

ANGLE ON: SWEEPING over the MINAS TIRITH WALLS, racing
towards the TOP of the CITY ... through a BLIZZARD of WHITE
FLOWER PETALS! MINAS TIRITH is restored . . . it gleams WHITE
in the BRIGHT SUN.

SOARING UP: to REVEAL the COURT OF THE KINGS, CROWDED with
4000 PEOPLE . . . cramming the WIDE PATH leading to the TOWER
HALL!                                                      ;

CLOSE ON: The CROWN of CONDOR glints in the BRILLIANT
SUNSHINE . . .

GANDALF places the CROWN upon ARAGORN'S head.

                        GANDALF
             Now come the days of the King ...

ARAGORN smiles up at GANDALF . . .

                        GANDALF (cont'd)                      :
                  (softly to Aragorn)
             May they be blessed.

ARAGORN slowly RISES, turning to face the CROWD, who CHEER
and CLAP for their KING . . .



                                                        (CONTINUED)

                                    Final Revision - October, 2003 142,
CONTINUED:


                       ARAGORN
             This day does not belong to one man but to
             all. Let us together rebuild this world
             that we may share in the days of peace.

The CHEERS of his PEOPLE are DEAFENING ...

ARAGORN sings for his people ... Then WALKS in SLOW
PROCESSION down the WHITE PAVED PATH as the CROWD BOW their
heads in respect to their NEW KING ...

ARAGORN passes EOWYN and FARAMIR who bow before him ... EOMER
steps FORWARD to bow in respect ...

TRUMPETS SOUND as a PROCESSION of ELVES, dressed in
shimmering SILVERS and WHITES, led by LEGOLAS approach the
KING ... LEGOLAS gestures behind him . . .

CLOSE ON: ARAGORN'S eyes scan amongst the ELVES

ANGLE ON: A BANNER carried aloft bearing the WHITE TREE of
CONDOR in FULL FLOWER . . . the RANKS of ELVES part revealing:

ARWEN, eyes shining ... MORTAL now, but deeply in love ...
carrying the STANDARD of CONDOR ... ARAGORN kisses her

ELROND looks on . . . his face breaks into a smile.

ARAGORN and ARWEN embrace.

ANGLE ON: ARAGORN and ARWEN walking through the CROWD towards
four SMALL FIGURES who stand nervously at the end of the
AVENUE . . .

ANGLE ON: ARAGORN and ARWEN look on FRODO, SAM, MERRY and
PIPPIN, as they stand before them . . .

The FOUR HOBBITS, dressed in their OLD CLOTHES, clean and
mended, bow their heads ...

ARAGORN raises his HAND.

                        ARAGORN (cont'd)
             My friends ... you bow to no-one.


                                                      (CONTINUED)

                                    Final Revision - October, 2003 143,
CONTINUED: ( 2 )


ANGLE ON: ARAGORN drops on ONE KNEE, kneeling before THE
HOBBITS, his head bowed ... followed by all assembled there.

CLOSE ON: TEARS spring into FRODO'S EYES. He clutches SAM'S
shoulder as 4000 PEOPLE pay homage to the courage of two
little Hobbits from the Shire.

CAMERA RISES INTO THE AIR ... away from the CROWDED CITADEL,
until MINAS TIRITH becomes a SPECK in the LANDSCAPE ...

                                                                 CUT TO:



EXT. MIDDLE EARTH MAP - DAY

DISSOLVING into the PARCHMENT MAP of MIDDLE-EARTH ... Slowly
drifting across the MAP towards the WEST ...

                      FRODO V/0
           And thus it was a Fourth Age of     Middle-
           earth began, and the Fellowship     of the
           Ring, though eternally bound by     friendship
           and love, was ended.
           Thirteen months to the day since    Gandalf      ,.
           sent us on our long journey . . .

                                                                 CUT TO:

EXT. HOBBITON - DUSK

                      FRODO V/0
           . . . we found ourselves looking upon a
           familiar sight . . . We were home!

MATCHING MOVE: Revealing HOBBITON bathed in a WARM SUNSET ...
As FRODO, SAM, MERRY and PIPPIN ride into SHOT on PONIES ...
past ODO PROUDFOOT who shakes his head at the STRANGENESS of
their appearance.

INT. THE GREEN DRAGON INN - NIGHT

FRODO brings a round of drinks to the TABLE.



                                                         (CONTINUED)

                                  Final Revision - October, 2003 144.
CONTINUED:


Nearby a HUGE FUSS is being made of a LARGE PUMPKIN which has
been brought in to be shown off.

ANGLE ON: The FOUR FRIENDS look at each other. A WORLD of
experience now separates from their fellow HOBBITS.

Seated at a long table, the FOUR FRIENDS raise their glasses
. . . SAM eye is suddenly caught!

ANGLE ON: ROSIE COTTON who is serving behind the BAR . . .

SAM steels himself and leaves to go and TALK to ROSIE ...

FRODO, MERRY and PIPPIN exchange smiles as . . .

                                                        CUT TO:



EXT. HOBBITON - DAY

On a BEAUTIFUL sunny day, SAM and ROSIE are MARRIED ... With
their dearest FRIENDS gathered around them . . .

ROSIE throws a beautiful bouquet of FLOWERS . . . it's caught
by PIPPIN who smiles in embarrassment ...

                                                   DISSOLVE TO:

INT. BAG END - DAY

FRODO walks through BAG END to his STUDY ...

                      FRODO V/0
          How do you pick up the threads of an old
          life? How do you go on, when in your heart
          you begin to understand. There is no going
          back. There are some things that time
          cannot mend. Some hurts that go too deep.
          That have taken hold.

ANGLE ON: FRODO . . . from behind. He is HUNCHED over a DESK...

PUSH IN . . . to reveal BILBO'S RED BOOK open on FRODO'S DESK.
He is WRITING in the LAST CHAPTERS ...
                                                    (CONTINUED)

                                     Final Revision - October, 2003 145,
CONTINUED:
in careful neat HANDWRITING. FRODO turns back the pages,
REVEALING: There and Back Again - A Hobbit's Tale, by Bilbo
Baggins. He writes below it as SAM GAMGEE calls out from the
door:

                      SAM O.S
          Mr Frodo?

CLOSE ON: FRODO WINCES with a sharp GASP of PAIN . . . He puts �
the PEN down and CLUTCHES at his SHOULDER . . .

SAM has entered the ROOM and stands BEHIND FRODO ...

                     SAM                 .
               (concerned)                       -
          What is it?                -

CLOSE ON: FRODO . . . He is DRAWN and PALE.

                     FRODO
          It's been four years to the day since
          Weathertop, Sam. It's never really healed.

CLOSE ON: SAM . . . at a loss for words. His EYES fall to the
BOOK.                               .....'�

                      SAM                         ,           "
               (reading)
          "There and Back Again . . . A      Hobbit's Tale,
          by Bilbo Baggins".

TILT DOWN: to FRODO'S HANDWRITING:

                      SAM (cont'd)
               (reading)
          " . . . And The Lord of the Rings, by Frodo
          Baggins".
               (delighted)                                    :
          You've finished it!                                 -

                     FRODO
               (closing the book)
          Not quite . . . There's room for a little
          more.

                                                              CUT TO:

                                   Final Revision - October, 2003 146.



EXT. HOBBITON FIELDS - EARLY MORNING

LYRICAL MUSIC OVER ...

A COLD WINTER'S MORNING ... Out of the FOG rattles a SMALL
COVERED WAGON; GANDALF is at the REINS.

ANGLE ON: FRODO, SAM, MERRY and PIPPIN are waiting on PONIES
for the WAGON . . . all are wearing their GREY ELVEN ROBES.

                      FRODO V/0
           Bilbo once told me, the great stories never
           end - that each of us must come and go in
           the telling. His part in this tale was now
           over. There would be no more journeys for
           Bilbo. Save one.

CLOSE ON: GANDALF arrives in his CART . . .

                                                     DISSOLVE TO:

EXT. WEST FARTHING - DAY

WIDE ON: The WAGON trundles along at a SEDATE PACE.

SAM, MERRY and PIPPIN ride behind, leading FRODO'S EMPTY
PONY.

                       BILBO O.S.
                (frail)
           Tell me again, lad. Where are we going?

                      FRODO O.S.
           To the harbour, Bilbo. The Elves have
           accorded you a special honour. A place on
           the last ship to leave Middle-earth.

INT. WAGON - DAY

CLOSE ON: FRODO is SITTING in the WAGON . . . his ARM around
his UNCLE BILBO.

BILBO is extremely OLD and FRAIL. He is DOZING . . . his head
slumped.


                                                       (CONTINUED)

                                     Final Revision - October, 2003 147.
CONTINUED:


BILBO'S eyes flutter OPEN . . . with effort he raises his head


                        BILBO
                  (frail)
             Frodo ... Any chance of seeing that old
             ring of mine ... the one I gave you?

                        FRODO
                  (quietly)
             Sorry, Uncle . . . I'm afraid, I lost it.

                        BILBO
                  (frail)
             Oh . . . pity. I should like to have held it
             one last time.                                   �

BILBO nods back to sleep ... FRODO rests his head against
him.

                                                         DISSOLVE TO:

EXT. THE GREY HAVENS - DUSK

ANGLE ON: FRODO, walking arm-in-arm with BILBO through a
beautiful ELVEN BOAT-HOUSE ... GANDALF follows with MERRY,
PIPPIN and SAM.

CLOSE ON: As BILBO looks up, he is STUNG by the BEAUTY before
hm . . .
 i

                        BILBO
             Oh! Well, here's a sight I have never�seen
             before.

TRACKING: Passing under a beautiful ELVEN ARCHWAY . . .

. . . to reveal a WHITE SHIP, ready to depart from a WHITE
STONE DOCK.

ANGLE ON: ELROND, CELEBORN and GALADRIEL are waiting for
them.

The SETTING SUN slowly dropping behind the SEA ... visible
between the HEADLANDS of a beautiful INLET.
                                                          (CONTINUED)

                                        Final Revision - October, 2003 148,
CONTINUED:


The lighting is beautiful . . . S U N streams through the sails,
casting an ethereal glow on THE GROUP as they walk onto the
DOCK.

BILBO bows in acknowledgement to ELROND, CELEBORN and
GALADRIEL, who return his GREETING.

                       GALADRIEL
             The power of the Three Rings is ended. The
             time has come for the Dominion of Men.

                        ELROND
                  (ELVISH: with subtitles)
             I Aear can ven na mar.

             T he Sea calls us ho me.


ELROND holds out his ARMS to BILBO who suddenly seems MUCH
YOUNGER and SPRIGHTLIER . . . He sets off down the PATH TOWARD
his HOSTS . . .

                        BILBO
             I think I'm quite ready for another
             adventure.

BILBO walks down toward the BOAT and BOARDS with ELROND . . .

ANGLE ON: FRODO looks up . . . GALADRIEL is watching him. She
SMILES, TURNS and BOARDS the BOAT . . .

GANDALF kneels before SAM, MERRY and PIPPIN - who are all
looking TEARFUL.

                       GANDALF
             Farewell, my brave Hobbits. My work is now
             finished. Here at last, on the shores of
             the sea, comes the end of our Fellowship.

There is GREAT SADNESS . . . MERRY SNIFFLES LOUDLY.

                        GANDALF (cont'd)
             I will not say: "do not weep", for not all
             tears are an evil.


                                                          (CONTINUED)

                                      Final Revision - October, 2003 149.
CONTINUED: (2)


CLOSE ON: GANDALF turns and walks away . . . FRODO is DOWNCAST
... SUDDENLY, GANDALF turns and looks toward him.

                      GANDALF (cont'd)
           It is time, Frodo.

ANGLE ON: GANDALF looks at FRODO then turns and slowly walks
towards the GANGPLANK to board the SHIP.

                      SAM
                (alarmed)
           What does he mean?

CLOSE ON: FRODO turns to SAM. . . .

                       FRODO
                (gently)
           We set out to save the Shire, and it has
           been saved ... but not for me . . .

                       SAM
                (shaken)
           You don't mean that - you can't leave.

ANGLE ON: SAM looks down . . . FRODO is holding BILBO'S RED
JOURNAL out towards him.

                      FRODO
           The last pages are for you, Sam.

SAM is SOBBING . . . MERRY and PIPPIN are DISTRAUGHT . . . .

FRODO hugs MERRY and PIPPIN, and last of all SAM . . . and
climbs on board the SHIP.

ANGLE ON: FRODO a look of WONDERMENT crosses his face . . . as
he STEPS FORWARD and ACCEPTS GANDALF'S HAND . . . finally
released from his pain, care falls from his face . . . he is
the young FRODO we first met so long ago.

SAM, MERRY and PIPPIN comfort each other as the WHITE SHIP
glides away from the DOCK ...

WIDE ON: The WHITE BOAT sails away towards the HEADLANDS,
disappearing into the GOLDEN LIGHT of the SETTING SUN.
                                                         (CONTINUED)

                                     Final Revision - October, 2003 150.
CONTINUED: ( 3 )


ANGLE ON: SAM in growing darkness, still follows the
departing SHIP with his eyes, MERRY and PIPPIN are already
preparing to leave.

                                                           CUT TO:

EXT. NO.3 BAGSHOT ROW - MORNING

ANGLE ON: SAM walks up the path towards his house . . .

A LITTLE GIRL toddles up to greet him.

                       SAM
            Elanor!

He hugs his daughter . . .

                       FRODO V/0
            My dear Sam. You cannot always be torn in
            two. You have to be one and whole for many
            years. You have so much enjoy and to be and
            to do. Because Sam, your part in the
            journey goes on.

ANGLE ON: ROSIE COTTON steps up and kisses SAM on the cheek
. . . she gives him a TINY BABY BOY to cradle.

                       SAM
            Hello, little Frodo!

ANGLE ON: SAM with his FAMILY . . . he draws a deep breath:

                      SAM (cont'd)
           Well ... I'm back.

SAM looks at his LOVELY FAMILY with GREAT HAPPINESS, tinged
with a little SADNESS . . .

SAM and ROSIE take the CHILDREN'S HANDS and enter BAGSHOT . . .
the BRIGHT YELLOW DOORWAY closes behind them.

                                                   FADE TO BLACK.

                                   Final Revision - October, 2003 151.




                        THE END.

Screenplay by:   Fran Walsh, Philippa Boyens, Peter Jackson
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)