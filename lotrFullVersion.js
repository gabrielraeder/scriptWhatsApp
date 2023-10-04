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
THE LORD OF THE RINGS: THE FELLOWSHIP OF THE RING

SUPER: New Line Cinema Presents

SUPER: A Wingnut Films Production

BLACK CONTINUES... ELVISH SINGING....A WOMAN'S VOICE IS
whispering, tinged with SADNESS and REGRET:

                    GALADRIEL (V.O.)
              (Elvish: subtitled)
          "I amar prestar sen: han mathon ne nen,
          han mathon ne chae...a han noston ned
          wilith."
              (English:)
          The world is changed: I feel it in the
          water, I feel it in the earth, I smell it
          in the air...Much that once was is lost,
          for none now live who remember it.

SUPER: THE LORD OF THE RINGS

EXT. PROLOGUE -- DAY

IMAGE: FLICKERING FIRELIGHT. The NOLDORIN FORGE in EREGION.
MOLTEN GOLD POURS from the lip of an IRON LADLE.

                    GALADRIEL (V.O.)
          It began with the forging of the Great
          Rings.

IMAGE: THREE RINGS, each set with a single GEM, are received
by the HIGH ELVES-GALADRIEL, GIL-GALAD and CIRDAN.

                    GALADRIEL (V.O.) (CONT'D)
          Three were given to the Elves, immortal,
          wisest...fairest of all beings.

IMAGE: SEVEN RINGS held aloft in triumph by the DWARF LORDS.

                    GALADRIEL (V.O.) (CONT'D)
          Seven to the Dwarf Lords, great miners
          and craftsmen of the mountain halls.

IMAGE: NINE RINGS clutched tightly by the KINGS OF MEN...as
if holding-close a precious secret.

                    GALADRIEL (V.O.) (CONT'D)
          And Nine...nine rings were gifted to the
          race of Men who, above all else, desire
          power.
                    (MORE)



                                                   (CONTINUED)

                                                              2.
CONTINUED:
                    GALADRIEL (V.O.) (CONT'D)
          For within these rings was bound the
          strength and will to govern each race.

                                                   FADE TO BLACK

                    GALADRIEL (V.O.) (CONT'D)
          But they were all of them deceived.

FADE UP: An ancient PARCHMENT MAP of MIDDLE EARTH...moving
slowly across the MAP as if drawn by an unseen force the
CAMERA closes in on a PLACE NAME...MORDOR.

                    GALADRIEL (V.O.) (CONT'D)
          ...for another ring was made.

TEASING SHOTS: SAURON forging the ONE RING in the CHAMBERS of
SAMMATH NAUR.

                    GALADRIEL (V.O.) (CONT'D)
          In the land of Mordor, in the fires of
          Mount Doom, the Dark Lord Sauron forged
          in secret a Master Ring to control all
          others.


IMAGE: The ONE RING reflecting FIERY LAVA!   FIRE WRITING
emerges on the plain BAND OF GOLD.

                    GALADRIEL (V.O.) (CONT'D)
          ...and into this Ring he poured his
          cruelty, his malice and his will to
          dominate all life.

IMAGE: THE ONE RING falls through SPACE and into flames...

                    GALADRIEL (V.O.) (CONT'D)
          One Ring to rule them all...

IMAGE: A GREAT SHADOW falls across the MAP...closing in
around the realm of GONDOR...

IMAGE: SCREAMING VILLAGERS, MEN, WOMEN, AND CHILDREN, RUN

from their homes, pursued by ARMIES OF HIDEOUS ORCS.

                    GALADRIEL
          One by one the Free lands of Middle earth
          fell to the power of the ring.

                                                   FADE TO BLACK

                    GALADRIEL (V.O.) (CONT'D)
          But there were some...who resisted.


                                                    (CONTINUED)

                                                              3.
CONTINUED:


FADE UP: ISILDUR, son of the KING OF GONDOR, leads an ARMY
ACROSS the PLAINS OF DAGORLAD...

                    GALADRIEL (V.O.) (CONT'D)
          A last alliance of Men and Elves marched
          against the armies of Mordor.

                    GALADRIEL (V.O.) (CONT'D)
          On the slopes of Mount Doom they fought
          for the freedom of Middle- Earth.

TEASING SHOTS: THE BATTLE OF DAGORLAD...THE ELF LORD, ELROND,

commands rank after rank of ELVEN ARCHERS...ORCS RETREATING
before the ARMY of the LAST ALLIANCE...ELENDIL holds aloft
the great sword....NARSIL!

                    GALADRIEL
          Victory was near!

IMAGES: THE HUGE, DARK FIGURE OF SARURON, bearing the ONE
RING on his finger, looms over the field of battle...

                    GALADRIEL (V.O.) (CONT'D)
          But the power of the Ring could not be
          undone.

IMAGE: SAURON lays waste to the armies of the LAST ALLIANCE.
With desperate courage, ELENDIL leads a charge...THE BLACK
MACE OF SAURON LASHES OUT!! IMAGE: ELENDIL'S body falls like
a crumpled rag doll... IMAGE: ISILDUR cradles the body of his
father in his arms. The SHADOW OF SAURON falls over him...

                    GALADRIEL (V.O.) (CONT'D)
          It was in this moment..when all hope had
          faded, that Isildur, son of the king,
          took up his father's sword.

ISILDUR snatches up the BROKEN BLADE OF NARSIL..The BLADE
severs SAURON'S FINGERS... AND THE ONE RING FLIES from his
body.

                    GALADRIEL (V.O.) (CONT'D)
          Sauron, the enemy of the Free Peoples of
          Middle Earth, was defeated. SAURON'S
          ARMOR clatters to the ground. His body

GONE....VAPORIZED! CLOSE ON: ISILDUR picks up the SEVERED
FINGER and removes the ONE RING...transfixed!

                    GALADRIEL (V.O.) (CONT'D)
          The Ring passed to Isildur...who had this
          one chance to destroy evil forever.

                                                    (CONTINUED)

                                                                 4.
CONTINUED:


IMAGE: GLADDEN FIELD...ISILDUR leads a small column of men
through DARKENING WOODS...the ONE RING glinting on a CHAIN
around his neck.

                      GALADRIEL (V.O.) (CONT'D)
            But the hearts of Men are easily
            corrupted. And the Ring of Power has a
            will of its own.

SUDDENLY!    ARROWS FLY!   They are ambushed by ORCS...ISILDUR
SCREAMS!

                                                     FADE TO BLACK

FADE UP: ISILDUR MATERIALIZES UNDER WATER...as THE RING slips
slowly from his finger. Ripples of LIGHT play across
ISILDUR'S PALE FACE...he is DEAD.

                      GALADRIEL (V.O.) (CONT'D)
            It betrayed Isildur to his death.

IMAGE: THE RING falls through the MURKY WATERS of the RIVER
ANDUIN.

                      GALADRIEL (V.O.) (CONT'D)
            And some things that should not have been
            forgotten...were lost.

                                                     FADE TO BLACK

                      GALADRIEL (V.O.) (CONT'D)
            History became legend...legend became
            myth.

FADE UP: The waters of the ANDUIN RIVER lie dark and
undisturbed.

                      GALADRIEL (V.O.) (CONT'D)
            And for two and a half thousand years the
            Ring passed out of all knowledge.

IMAGE: SILT SWIRLS...A THIN WHITE HAND reaches
down...grasping the RING...

                      GALADRIEL (V.O.) (CONT'D)
            Until, when chance came, it ensnared a
            new bearer!

IMAGE: THE THIN WHITE HAND opens to reveal one ring.

                      GOLLUM (V.O.)
            My Precious...

                                                                5.



IMAGE: MIST SHROUDED MOUNTAINS...

                    GALADRIEL (V.O.)
          The Ring came to the creature Gollum, who
          took it deep into the tunnels of the
          Misty Mountains.

IMAGE: THE GLOOM of a MOUNTAIN CAVERN..a MURKY POOL of
WATER...in the DARKNESS the SHADOWY OUTLINE of an EMACIATED
FIGURE.

                    GALADRIEL (V.O.) (CONT'D)
          And there, it consumed him. A RASPY VOICE
          mutters in the half light...

                    GOLLUM
          It came to me. My own.     My love...
              (ecstatic whisper)
          My preciousness.

                    GALADRIEL (V.O.)
          The Ring brought to Gollum unnatural long
          life. For five hundred years it poisoned
          his mind. And in the gloom of Gollum's
          cave...

                                                     FADE TO BLACK

                       GALADRIEL (V.O.)   (CONT'D)
          It waited.

FADE UP: Bathed in COLD MOONLIGHT, the WORLD lies DARK and
STILL...the unsettled quiet before the storm...

                    GALADRIEL (V.O.) (CONT'D)
          Darkness crept back into the forests of
          the world. Rumor grew of a Shadow in the
          East...whispers of a nameless fear. And
          the Ring of Power perceived...its time
          had now come. It abandoned Gollum.

SLOW MOTION: unseen by its KEEPER..THE RING falls to the
MUDDY FLOOR of a MOUNTAIN TUNNEL...

                    GALADRIEL (V.O.) (CONT'D)
          But something happened then the Ring did
          not intend...

                                                     FADE TO BLACK

IMAGE: FUMBLING in the dark, a SMALL HAND closes over the

                                                                 6.



RING.

                      GALADRIEL
            It was picked up by the most unlikely
            creature imaginable...

                      BILBO
                (to himself)
            What's this?

A YOUNGISH LOOKING BILBO BAGGINS peers down at what lies in
his hand...PERPLEXED by what he has found.

                      GALADRIEL (V.O.)
            A Hobbit....Bilbo Baggins of the Shire.

                      BILBO
                (surprised)
            A Ring.

SUDDENLY!   A VOICE SCREAMS...ITS ANGUISH RINGING through the

COLD, DANK TUNNELS...

                       GOLLUM (V.O.)
            Lost!   Lost! My Precious is lost!!

Frightened Bilbo quickly POCKETS the ONE RING and hurries on.

                                                      DISSOLVE TO:

WIDE ON: THE CAMERA SOARS AWAY FROM THE MOUNTAINS.      MOVING

FASTER AND FASTER...THEIR DARK GREEN FORESTS AND JAGGED

WHITE PEAKS RECEDING INTO THE SHROUD OF MIST

                      GALADRIEL (V.O.)
            For the time will soon come when Hobbits
            will shape the fortunes of all.

                                                    FADE TO BLACK

                                                          FADE IN:

EXT. HOBBITON WOODS -- DAY

ANGLE ON: TWO HOBBIT FEET

resting on a small rock...rising out of the LONG, OVERGROWN
GRASSES SUPER: THE FELLOWSHIP OF THE RING SUPER: THE
SHIRE....60 YEARS LATER CAMERA TRACKS TO: a Figure lies
beneath the dappled sunlight of an old tree.

                                                      (CONTINUED)

                                                              7.
CONTINUED:

White flowers are scattered among the Well seeded grasses.
An idyllic setting at the end of a long hot summer... the
figure is reading a book. ON THE SOUNDTRACK: In the distance,
growing louder..over the Gentle clip clop of an approaching
cart and horse can be heard the HUMMING OF A DEEP VOICE to
the tune of "The Road Goes Ever On and On..."

SUDDENLY! The figure in the grass sits up...looking straight
at camera is a handsome young HOBBIT, with dark curly hair
and deep blue eyes. This is FRODO BAGGINS...his EYES alight
with EXCITEMENT! Tossing away the long stem of grass in his
mouth, Frodo runs off.

                                                         CUT TO:

EXT. SHIRE LANE -- DAY

The cart rattles along a leafy lane, driven by a stooped
figure in Grey.

INTERCUT WITH; SHOTS OF FRODO RUNNING... CAREERING DOWN A

HILL. . .JUMPING OVER LOGS... DODGING TREE BRANCHES.

                                                       ANGLE ON:

The shambling OLD PONY snorts and rears as... SUDDENLY FRODO
appears on a bank above the cart.

                    FRODO
          You're late.

CLOSE ON: GANDALF glowers at the young Hobbit...

                    GANDALF
          A Wizard is never late, Frodo Baggins,
          nor is he early. He arrives precisely
          when he means to.

They look at each other a moment..then both start laughing as
FRODO'S face breaks into a smile and he leaps on to the front
seat of the cart.

                    FRODO
          It's wonderful to see you, Gandalf!

Next to Gandalf, we see how small Hobbits are...Frodo is 3
foot 6 inches tall.

                    GANDALF
          You didn't think I'd miss your Uncle
          Bilbo's birthday?

                                                         CUT TO:

                                                              8.



EXT. HOBBITON FIELDS -- DAY

Wide on: The cart rattles past a FIELD LUPIN being tended by

HOBBITS.

                     FRODO
           What news of the outside world? Tell me
           everything!

                                                       ANGLE ON:

Gandalf looks down at Frodo, a twinkle in his eye.

                     GANDALF
           What, everything? Far too eager and
           curious for a Hobbit. Most unnatural...

Wide on: The cart rattles over a Stone bridge towards a Busy
Hobbit Marketplace.

                      GANDALF (V.O.) (CONT'D)
           Well, what can I tell you? Life in the
           wide world goes on much as if it has past
           age. Full of its own comings and goings,
           scarcely even aware of the existence of
           Hobbits...

Close on: Gandalf as he surveys the peaceful scene before
him.

                     GANDALF (CONT'D)
           ...for which I am very thankful.

                                                       ANGLE ON:

Hobbits look up exclaiming in wonder and excitement as the
cart bearing Gandalf and Frodo rolls past the Green Dragon
Inn...towards... Wide on: The party field. Where scOrcs of
Hobbits are busy preparing for the big night.

                     GANDALF (CONT'D)
           Ah, the long expected party. So, how is
           the old rascal? I hear it's going to be
           a Party of Special Magnificence.

                     FRODO
           You know Bilbo...he's got he whole place
           in an uproar.

                     GANDALF
           Oh, well...that should please him.


                                                     (CONTINUED)

                                                              9.
CONTINUED:


                    FRODO
          Half the Shire's been invited...

                    GANDALF
          Good gracious, me.

                    FRODO
          He's up to something.

                    GANDALF
          Oh, really?

Frodo shoots a knowing look, as Gandalf averts his eyes.

                    FRODO
          Alright then..keep your secrets. Before
          you came along we Bagginses were very
          well thought of.

                       GANDALF
          Indeed?

                    FRODO
          Never had any adventures or did anything
          unexpected.

                    GANDALF
          If you're referring to the incident with
          the Dragon...I was barely involved...all
          I did was give your Uncle a little nudge
          out the door.

                    FRODO
          Whatever you did...you've been officially
          labelled as a Disturber of the Peace.

                    GANDALF
          Oh, really?

                                                       ANGLE ON:

ODO PROUDFOOT looks up as the Cart passes by, deeply
suspicious.

                                                         CUT TO:

EXT. HOBBITON -- DAY

                                                       CRANE UP:

As the cart rattles into the small village of Hobbiton...a
quaint rustic settlement, nestled amongst rolling green hills
and large trees.

                                                    (CONTINUED)

                                                           10.
CONTINUED:

The Hobbits live in Hobbit Holes: neat burrows dug into the
grassy hillside, with round doors and cute front gardens.

                                                     ANGLE ON:

Excited children, chasing after the cart.

                                                     CLOSE ON:

Gandalf ignOrcs the children's cries. The children stand
deflated, watching Gandalf disappear up the lane. At that
moment: spinning balls of bright color suddenly leap out of
the cart, fizzing over the heads of the delighted children.

                                                     ANGLE ON:

Gandalf smiling to himself, well pleased with his joke. ODO
PROUDFOOT is unable to suppress a chuckle. Frodo stands up in
the cart as Gandalf reigns in the horse.

                    FRODO
          Gandalf... I'm glad you're back. Frodo
          leaps expertly from the cart. Gandalf
          smiles.

                    GANDALF
          So am I, dear boy...so am I

                                                       CUT TO:

EXT. BAG END -- DAY

Wide on: GANDALF'S CART pulls up outside the gate to BAG
END...a particularly fine example of a Hobbit hole, with a
large round front door set into a grassy hillside. There is
a sign on the gate which reads: "NO ADMITTANCE EXCEPT ON
PARTY BUSINESS." Gandalf strides up to the garden path of Bag
End. He raises his staff and raps on the front door...a
voice calls out:

                     BILBO (O.S.)
          No, thank you! We don't want any more
          visitors, well wishers, or distant
          relations.

                    GANDALF
          And what about very old friends?

Suddenly the door opens and BILBO BAGGINS stands before him.
He is a HOBBIT OF INDERTIMINATE AGE, with a mischievous
Twinkle in his eye. Wearing a dashing brocade waist coat, he
looks every inch the eccentric gentleman.



                                                   (CONTINUED)

                                                            11.
CONTINUED:


                     BILBO
          Gandalf?

                    GANDALF
          Bilbo Baggins!

                    BILBO
          My dear Gandalf!

Gandalf drops to his knee to embrace his old friend.

                    GANDALF
          It's good to see you. One hundred and
          eleven years old, who would believe it!

Gandalf looks at him more keenly.

                    GANDALF (CONT'D)
          You haven't aged a day! Gandalf and Bilbo
          laugh together and enter Bag End.

                    BILBO
          Come on, come in!   Welcome, welcome!!

                                                        CUT TO:

INT. BAG END LIVING ROOM -- DAY

Bilbo leads Gandalf into Bag End...cozy and cluttered with
souvenirs of Bilbo's travels. Gandalf has to stoop to avoid
hitting his head on the low ceiling. Bilbo hangs up Gandalf's
hat on a peg and trots off down the hall.

                    BILBO
              (Calling)
          Tea? Or maybe something stronger... I've
          a few bottles of the Old Winyard left,
          1296...a very good year, almost as old as
          I am. It was laid down by my father. What
          say we open one, eh?

Bilbo disappears into the kitchen as Gandalf looks
around..enjoying the familiarity of Bag End...he turns,
knocking his head on the light and then walking into the
wooden beam. He groans.

                    BILBO (O.S.) (CONT'D)
          I was expecting you some time last week.
          Not that it matters, you come and go as
          you please, always have done, always
          will.
                    (MORE)


                                                    (CONTINUED)

                                                             12.
CONTINUED:
                    BILBO (O.S.) (CONT'D)
          You've caught me a bit unprepared, I'm
          afraid...we've only got cold chicken, bit
          of pickle, some cheese here...ooh, no,
          that might be a little risky...

Gandalf stops in front of a framed map, charred in one
corner...it is Thorin's map of the Lonely Mountain, Gandalf
smiles to himself.

                    BILBO (CONT'D)
          Er, we've got raspberry jam and apple
          tart...got some custard somewhere. Not
          much for Afters, I'm afraid. Oh
          no...we're alright...I've just found some
          sponge cake. Nice little snack. Hope
          it's enough.
              (comes into view)
          I could do you some eggs if you like?

Bilbo jumps, a half eaten pork pie in his hand, as Gandalf
mysteriously appears behind him.

                    GANDALF
          Just tea, thank you.

                       BILBO
          Oh..right.     You don't mind if...?

                    GANDALF
          No, not at all. Go ahead. A sudden loud
          knock on the front door.

MRS. SACKVILLE BAGGINS (O.S.)

Bilbo Baggins, you open this door..I know you're in there.

                    BILBO
          I'm not home.

Gandalf watches, amused as Bilbo tries to hide.

                    BILBO (CONT'D)
          I've got to get away from these
          confounded relatives, hanging on the bell
          all day, never giving me a moment's
          peace. I want to see mountains
          again...mountains, Gandalf... and then
          find somewhere quiet where I can finish
          my book...Oh, Tea!

                    GANDALF
          So, you mean to go through with your
          plan, then?


                                                  (CONTINUED)

                                                           13.
CONTINUED:


                    BILBO
          Yes, yes...it's all inhand.   All the
          arrangements are made.

                    GANDALF
          Frodo suspects something.

                    BILBO
          'Course he does, he's a Baggins...not
          some block headed Bracegirdle from
          Hardbottle!

                    GANDALF
          You will tell him, won't you?

                      BILBO
          Yes, yes.

                    GANDALF
          He's very fond of you.

                    BILBO
          I know. He'd probably come with me if I
          asked him. I think, in his heart,
          Frodo's still in love with the Shire, the
          woods and the fields... little rivers.
          Bilbo stands gazing out of the kitchen
          window.

                    BILBO (CONT'D)
          I am old, Gandalf... Bilbo looks at
          Gandalf sadly...

                    BILBO (CONT'D)
          I know I don't look it, but I'm beginning
          to feel it in my heart.

                                                      CLOSE ON:

Bilbo's fingers close around his waistcoat pocket...gripping
a small, unseen object.

                    BILBO (CONT'D)
          I feel thin...sort of stretched, like
          butter scraped over too much bread. I
          need a holiday...a very long holiday and
          I don't expect I shall return...in fact,
          I mean not to.

                                                        CUT TO:

                                                          14.



INT. BAG END -- EVENING

Gandalf and Bilbo are sitting on the Bag End porch. Below
them, final preparations are being made on the Party field.
Bilbo strikes a match and lights his pipe.

                    BILBO
          Old Toby, the finest weed in
          Southfarthing!

Bilbo blows a perfect smoke ring and watches it rise into the
air. A tiny sailing ship with masts and sails glides through
the Center of Bilbo's smoke ring.

                    BILBO (CONT'D)
          Ohhhh,
              (smiles)
          Gandalf my old friend...this will be a
          night to remember!

                                                      CUT TO:

EXT. PARTY FIELD, HOBBITON -- NIGHT

BOOM! A FIREWORK explodes into the night sky high above
Hobbiton...in the shape of a great green tree with unfolding
branches. TILT DOWN: with glowing flowers as they rain down
from the branches...evaporating just above the up turned
faces of the delighted party-goers 144 Hobbits, feasting and
drinking Carts of beer and wine are scattered about, and the
tables are piled high with steaming scones and savories.
Gandalf hurries about, lighting fireworks with a blue spark
that dances magically from his staff... Bilbo is greeting
visitors. Frodo and SAM sit at a table drinking ale...Frodo
notices Sam's eyes keep flicking to another pretty Hobbit,
Rosie Cotton, sitting some distance away.

                    FRODO
          Go on, Sam, ask Rosie for a dance.

                     SAM
               (horrified)
          I think I'll just have myself another
          ale.

                    FRODO
          Oh, no you don't. Go on.

Sam goes to drain his glass... suddenly it is snatched out of
his hands as Frodo thrusts him into the middle of a passing
throng of dancers.

                                                            15.



ANGLE ON: SAM'S HORRIFIED FACE

as he is Swept away.   Frodo laughs and finishes Sam's beer.

                                                      ANGLE ON:

Gandalf as he sets alight a particularly spectacular firework
that draws gasps of admiration from the party guests.

Close on: Bilbo is relating stories of his adventure to a
group of young hobbit children.

                    BILBO
              (melodramatic)
          So, there I was...at the mercy of three
          monstrous trolls...Have you ever heard of
          a troll? Do you know what a Troll is?
          Great big nasty twenty foot high smelly
          things..and they're arguing...arguing
          about how they were going to cook us!

ANGLE ON: A LITTLE HOBBIT GIRL'S

upturned face...her eyes growing larger and larger.

                    BILBO
          Whether it be turned on a spit or minced
          in a pie or whether they were going to
          sit on us one by one and squash us into
          jelly! But they spent so long arguing
          the whether-to's and why-for's that the
          sun's first light crept over the top of
          the trees...and turned them all to stone!

STUNNED GASPS from his young Audience greet his astonishing
feat! Close on: MERRY AND PIPPIN, two mischievous Young
Hobbits in their late teens. Pippin scrambles on to the back
of Gandalf's wagon, snatching up a small firework

                    MERRY
              (urgent whisper)
          No, no..the big one...the big one! Pippin
          grabs a huge rocket. CLOSE ON: FIREWORK
          FUSE crackles with flame!

Merry is holding out the big rocket...he looks aghast at the
fizzing fuse that Pippin has just lit.

                    MERRY (CONT'D)
              (worried whisper)
          You're supposed to stick it in the
          ground!


                                                  (CONTINUED)

                                                           16.
CONTINUED:


                    PIPPIN
          It is in the ground.

Merry fearfully tosses the Rocket to Pippin!    The fuse
sizzles angrily.

                     MERRY
          Outside!

                    PIPPIN
          It was your idea.

Pippin attempts to throw the fizzing rocket back to Merry.
WHOOSH! The two hobbits are suddenly blown off their feet in
a shower of sparks as the rocket blasts off with frightening
power. The ROCKET ZOOMS over the Party..It suddenly bursts
apart, forming the shape of a great red golden Dragon! Fire
gushes from its nostrils as it turns back and Flies low
towards the startled crowd. Close on: Frodo watches the
Fireworks Dragon with alarm...but Bilbo is oblivious to the
Panicking crowd and impending danger!

                     FRODO
          Bilbo!   Watch out for the dragon!!

                    BILBO
          Dragon? Nonsense...hasn1t been a dragon
          in these parts for a thousand years!

ANGLE ON: FRODO

As he hurriedly pulls Bilbo to the ground, just as the dragon
roars a few feet above their heads like a flaming express
train! Hobbits dive to the ground, tables overturn, tents
collapse, food flies everywhere. The fireworks dragon turns a
somersault and explodes over the hills with a deafening bang!
This gets the biggest Cheer of the night.

ANGLE ON: MERRY AND PIPPIN,

clothes and hair smoking.

                    MERRY
          That was good!

                    PIPPIN
          Let's get another one!

LARGE HANDS suddenly clamp down on Merry and Pippin's ears.
Low angle: Gandalf looking DOWN STERNLY!




                                                   (CONTINUED)

                                                            17.
CONTINUED:


                    GANDALF
          Meridoc Brandybuck and Peregrin Took...I
          might have known!

                                                        CUT TO:

MERRY AND PIPPIN

Are leaning over a barrel, washing dishes in soapy
water...with Gandalf sitting nearby, smoking his pipe and
sipping an ale. Cries of "SPEECH! SPEECH" erupt from the
party.

                                                      ANGLE ON:

Bilbo stepping on a stool...he bows in gratitude at the
applause.

                       FRODO
          Speech!

                    BILBO
              (clearing throat)
          My dear Bagginses, and Boffins, tooks and
          Brandybucks...Grubbs, Chubbs,
          Hornblowers, Bolgers, Bracegirdles and
          Proudfoots...

ANGLE ON: A HOBBIT WITH PARTICULARLY BIG FEET

                       ODO PROUDFOOT
          Proudfeet!

                    BILBO
          Today is my one hundred and eleventh
          birthday. Yes, and alas...Eleventy- one
          years is far too short a time to live
          among such excellent and admirable
          Hobbits! Tremendous outburst of approval!

                    BILBO (CONT'D)
          I don't know half of you half as well as
          I should like; and I like less than half
          of you as well as well as you deserve.

SCATTERED CLAPPING as the guests try to work out if that was
a compliment or not. CLOSE ON: FRODO AND GANDALF smiling to
themselves. CLOSE ON: Bilbo...a strange hum seems to fill his
head. A bead of sweat rolls down his brow.

Bilbo's hand pulls something out of his waistcoat pocket and
holds it behind his back.


                                                 (CONTINUED)

                                                           18.
CONTINUED:


                    BILBO (CONT'D)
          I have..things to do and I have put this
          off for far too long... CLOSE ON: BILBO'S
          knuckles turn white as he tightens his
          grip on the small object behind his back.

                    BILBO (CONT'D)
          I regret to announce, this is the end. I
          am going now. I bid you all a very fond
          farewell!! Bilbo looks across at Frodo,
          hesitates... then...

                    BILBO (CONT'D)
              (whisper)
          Goodbye.

Bilbo instantly vanishes. The party explodes into an
uproar... the crowd leaps to its feet.

ANGLE ON: FRODO

staring at the empty stool in disbelief.

                                                        CUT TO:

EXT. BAG END -- NIGHT

The party is still in an excited uproar... some 50 yards away
as we pan across a moonlit lane to the front door of Bag End.
Door opens, pulled by an invisible hand.

INT. BAG END -- NIGHT

The door quietly closes...Bilbo materializes as he pulls a
plain gold ring off his finger. Bilbo laughs as he tosses the
ring in the air, then places it in his pocket.

                                                      ANGLE ON:

Bilbo emerges from the passage, carrying a walking stick. He
finds Gandalf looming over him.

                    GANDALF
          I suppose you think that was terribly
          clever?

                    BILBO
          Come on, Gandalf!   Did you see their
          faces?




                                                  (CONTINUED)

                                                             19.
CONTINUED:


                    GANDALF
          There are many magic rings in the world,
          Bilbo Baggins, and none of them should be
          used lightly.

                    BILBO
          It was just a bit of fun.   Oh, you're
          probably right as usual.

                    GANDALF
          You will keep an eye on Frodo, won't you?

                    BILBO
          I'm leaving everything to him.

                    GANDALF
          What about this ring of yours?   Is that
          staying too?

Close on: Bilbo...he gives Gandalf a look and nods toward the
mantelpiece.

                    BILBO
          Yes, yes, it's in an envelope...over
          there on the mantelpiece. Gandalf frowns
          at the empty mantelpiece...Bilbo suddenly
          feels his waistcoat with a look of guilty
          surprise.

                    BILBO (CONT'D)
          No, wait. It's here in my pocket. Isn't
          that...isn't' that odd now? Yet, after
          all, why not? Why shouldn't I keep it?

                    GANDALF
          I think you should leave the Ring behind,
          Bilbo. Is that so hard?

                    BILBO
          Well, no...and yes. Now it comes to it,
          I don't feel like parting with it. It's
          mine. I found it. It came to me!

ANGLE ON: GANDALF LOOKS DOWN AT BILBO WITH RISING CONCERN.

                    GANDALF
          There's no need to get angry.

                    BILBO
          Well, if I'm angry, it's your fault! It's
          mine. My own, my precious.



                                                     (CONTINUED)

                                                            20.
CONTINUED:


                    GANDALF
          Precious? It's been called that before,
          but not by you.

                    BILBO
          So? What business is it of yours what I
          do with my own things? Bilbo's voice,
          shape and manner have suddenly changed.

                    GANDALF
          I think you've had that ring quite long
          enough.

                    BILBO
          You want it for yourself!

Gandalf rises to his full height, his eyes flash, his shadow
suddenly seems to fill the room

                    GANDALF
          Bilbo Baggins do not take me for some
          conjurer of cheap tricks! Bilbo cowers
          from Gandalf, disarmed by his power...a
          frightened Hobbit. Gandalf's expression
          softens.

                    GANDALF (CONT'D)
          I am not trying to rob you. I am trying
          to help you. Sobbing, Bilbo runs to
          Gandalf and hugs him.

                    GANDALF (CONT'D)
          All you long years we've been
          friends...trust me as you once did. Let
          it go!

                    BILBO
          You're right, Gandalf...the ring must go
          to Frodo.

Bilbo lifts his knapsack and heads for the front door.

                    BILBO (CONT'D)
          It's late, the road is long... yes, it is
          time.

                    GANDALF
          Bilbo?

                    BILBO
          Hmmm?



                                                    (CONTINUED)

                                                            21.
CONTINUED: (2)


                    GANDALF
          The ring is still in your pocket.

Bilbo hesitates...reaches into his pocket.

                     BILBO
          Oh, yes.

CLOSE ON: Bilbo pulls out the ring...he stares at it in his
palm. With all his will power, Bilbo allows the ring to
slowly slide off his palm and drop to the floor. CLOSE ON:
The tiny ring lands with a heavy thud on the wooden floor.

EXT. BAG END -- NIGHT

                                                      ANGLE ON:

Bilbo staggering out of Bag end...he braces himself in the
night air, Pale and Trembling, as if his loss of the ring has
weakened him. Gandalf steps up behind.

                    BILBO
          I've thought up and ending for my
          book..."And he lived happily ever after
          to the end of his days."

                    GANDALF
          I'm sure you will, my dear friend.

                    BILBO
          Goodbye, Gandalf.

                    GANDALF
          Goodbye Bilbo.

Bilbo walks away from Bag End, disappearing into the night,
softly singing: "The Road goes on and on."

                    GANDALF (CONT'D)
              (softly)
          Until our next meeting.

                                                        CUT TO:

INT. BAG END LIVING ROOM -- NIGHT

CLOSE ON: THE RING...Glinting on the floor...Gandalf circles
around it, a Puzzled look on his face. Gandalf slowly reaches
for the ring. His fingers barely touch the ring...the creepy
Hum rises on the soundtrack. Gandalf is sitting in front of
the fire, with his pipe...staring into the flickering flames.



                                                    (CONTINUED)

                                                             22.
CONTINUED:


                    BILBO (V.O.)
          It's mine, my own, my precious.

                    GANDALF
              (to himself)
          Riddles in the dark.

                    FRODO (O.S.)
          Bilbo! Bilbo!

Frodo rushes into Bag End...he stops and picks up the ring at
his feet. Gandalf continues staring into the fire, as if
locked in thought.

                    GANDALF
              (to himself)
          My precious...precious..

                    FRODO
              (quietly)
          He's gone, hasn't he? Frodo steps into
          the living room.

                    FRODO (CONT'D)
          He talked for so long about leaving...I
          didn't think he'd really do it.

                     GANDALF
              (mutters to himself)
          ...my own.

                     FRODO
          Gandalf?

Gandalf turns...his eyes locking onto the ring in Frodo's
fingers.

                    GANDALF
          Bilbo's ring.

Gandalf sorts hurriedly through Bilbo's papers...

                    GANDALF (CONT'D)
          He's gone to stay with the Elves. He's
          left you Bag End...

Gandalf holds out the envelope...Frodo drops the ring into
it.

                    GANDALF (CONT'D)
          ...along with all his possessions.

Gandolf seals the envelope with wax.   He hands it to Frodo.

                                                    (CONTINUED)

                                                            23.
CONTINUED: (2)


                    GANDALF (CONT'D)
          The ring is yours now. But it somewhere
          out of sight. Gandalf rises hurriedly and
          starts to gather his things.

                    FRODO
          Where are you going?

                    GANDALF
          I have some things I must see to.

                    FRODO
          What things?

                       GANDALF
          Questions.     Questions that need
          answering.

                    FRODO
          You've only just arrived!    I don't
          understand...

Gandalf is already at the door, he turns to Frodo.

                    GANDALF
          Neither do I. Keep it secret, keep it
          safe.

Gandalf hurries out the door...leaving FRODO standing alone
in the Bag End.

ANGLE ON: THE ENVELOPE

The camera pushes in...the hum of the ring comes up on the
soundtrack. The camera pushes through the white paper to the
ring...beneath the hum the whispered murmur of BLACK SPEECH
can be heard.

                                                      CUT TO:

EXT. BARAD-DUR -- NIGHT

The jagged ruins of" BARAD-DUR. THE DARK TOWER! TEASING
IMAGES: THE HUGE DARK TOWER OF BARAD-DUR is being rebuilt!
Thousands of ORCS crawl over the surface, hauling stone and
iron up the towering heights.

WIDE ON: MOUNT DOOM...A HUGE, BILLOWING CLOUD OF BLACK FILTH

grows and spreads across the red streaked sky...casting a
shadowy pall over the nightmarish landscape.



                                                  (CONTINUED)

                                                           24.
CONTINUED:


                      GOLLUM (O.S.)
          Baggins!    Shire!!

                                                        CUT TO:

EXT. MINAS MORGUL -- NIGHT

NINE BLACK RIDERS burst out of Minas Morgul and charge toward
Camera.

EXT. THE WEST ROAD, GONDOR -- DAY

WIDE ON: A LONE HORSEMAN gallops to the crest of a hill on
the west road. The main highway south to Minas Tirith...he
looks toward the saw toothed mountains of Mordor...
...seeping out across the blood red sky, his face grave. He
spurs his horse on.

                                                        CUT TO:

INT. CITADEL, MINAS TIRITH -- NIGHT

ANGLE ON: GANDALF

making is way down into the lower depths of the Citidel.

                                                        CUT TO:

INT. CITADEL CHAMBER, MINAS TIRITH -- NIGHT

CLOSE ON: Pages flipping as Gandalf searches ancient scrolls
and books placed high on a wooden table. His eyes settle on
one old parchment. He murmurs hurriedly to himself, reading.

                    GANDALF
              (reading)
          The year 3434 of the Second Age...here
          follows the account of Isildur, High King
          of Gondor, and the finding of the ring of
          power.

                                                   DISSOLVE TO:

CLOSE ON: ISILDUR, TRIUMPHANT, REACHES FOR THE ONE RING, HIS

EYES FIXATED ON IT.

                    GANDALF
              (reading)
          It has come to me...the ring of power!
                    (MORE)



                                                   (CONTINUED)

                                                             25.
CONTINUED:
                    GANDALF (CONT'D)
          It shall be an heirloom of my
          Kingdom...all those who follow in my
          bloodline shall be bound to its fate, for
          I will risk no hurt to the

                    GANDALF (CONT'D)
          ring...it is precious to me, though I buy
          it with great pain...

CLOSE ON: ELVISH LETTERING MARKS ON THE FADED OLD DOCUMENT

IN GANDALF'S HAND.

                    GANDALF
              (reading)
          The marking upon the band begin to
          fade...the writing which at first was as
          clear as red flame, has all but
          disappeared...a secret now that only fire
          can tell...

                                                      CUT TO:

EXT. HOBBIT FARMHOUSE -- EVENING

FARMER MAGGOT is chopping wood in his garden CLOSE ON:
SNORTING HORSE NOSTRILS...as the shadow of a black rider
looms over a Hobbit House. Terrified, FARMER MAGGOT cowers in
his doorway...FANG, his dog, Whimpers and backs away.

                    BLACK RIDER
              (hissing)
          Shire? Baggins?

                    FARMER MAGGOT
              (terrified)
          There's no Bagginses around here! They
          are all up in Hobbiton...that way.

The BLACK RIDER GALLOPS AWAY AT SPEED

                                                      CUT TO:

INT. GREEN DRAGON INN -- NIGHT

ANGLE ON: ROSIE COTTON

bids the last of the Patron's "Goodnight"...Sam meets her
eyes for a moment as he and Frodo leave the inn.

                                                            26.



EXT. BAG END -- NIGHT

WIDE ON: FRODO FAREWELLS SAM outside Bag End, and heads
towards the front door. Creepy POV from inside Bag end: Frodo
coming up the path.

                                                        CUT TO:

INT. BAG END HALLWAY -- NIGHT

                                                      ANGLE ON:

FRODO enters Bag End...he immediately Pauses, sensing that
something is amiss. All is quiet...Frodo peers uneasily into
the darkened living room. SUDDENLY! A large figure looms out
of the shadows, reaching for Frodo. Frodo lets out a
startled cry, pulls himself free and spins around to face his
Assailant. Gandalf steps into a shaft of moonlight. Paranoia
blazes in his eyes. His clothes are dirty and ragged from
much traveling. Hair and beard much longer an unkempt.

                    GANDALF
              (urgent whisper)
          Is it secret? Is it safe?

                                                        CUT TO:

INT. BAG END LIVING ROOM -- NIGHT

Frodo pulls the envelope out of an old chest. Gandalf,
suspicious, Alert. Without a word, Gandalf takes the envelope
and tosses it into the fireplace!

                    FRODO
              (bewildered)
          What are you doing?

Flames instantly consume the envelope...revealing the ring,
as it sinks into the red hot embers. Gandalf reaches into the
fire with a pair of tongs...he lifts the ring out.

                    GANDALF
          Hold out your hand, Frodo...it is quite
          cool.

Gandalf drops the ring into Frodo's hand...he reacts to its
weight.

                    GANDALF (CONT'D)
          What can you see? Can you see anything?

                    FRODO
          Nothing...there's nothing.   Wait...

                                                    (CONTINUED)

                                                            27.
CONTINUED:


CLOSE ON: The Gold Band of the ring as fiery letters begin to
appear...a tiny inscription glows red...as if burning from
within.

                    GANDALF
          ...these are markings.

CLOSE ON: GANDALF...STILL...TENSE

                    FRO DO
          It's some form of Elvish...I can't read
          it.

                    GANDALF
              (ominous)
          There are few who can...the language is
          that of Mordor, which I will not utter
          here.

Mordor?

                    FRODO
          GANDALF

In the common tongue it says, "One ring to rule them all, One
ring to find them, One ring to bring them all, and in the
darkness bind them."

                                                        CUT TO:

INT. BAG END KITCHEN -- NIGHT

CLOSE ON: The ring lies on Frodo's simple kitchen table.

                    GANDALF
          This is the one ring forged by the dark
          lord, Sauron, in the fires of Mt
          Doom...taken by Isildur from the hand of
          Sauron himself.

CLOSE ON: FRODO...STUNNED

                    FRODO
              (quiet realization)
          Bilbo found it...in Gollom's cave.

                    GANDALF
          For sixty years the ring lay quiet in
          Bilbo's keeping, prolonging his life,
          delaying old age...but no longer, Frodo.
          Evil is stirring in Mordor. The ring has
          awoken. It has heard its master's call.
                    (MORE)

                                                    (CONTINUED)

                                                            28.
CONTINUED:
                    GANDALF (CONT'D)
          AT THAT MOMENT: A FLEETING, LOW WHISPER
          of BLACK SPEECH

emanates from the Ring.   Frodo looks at Gandalf, each knowing
the other has heard it.

                     FRODO
          But he was destroyed...Sauron was
          destroyed.

ANGLE ON: THE RING

lies between them on the table.

                    GANDALF
          No, Frodo. The spirit of Sauron has
          endured. His life force is bound to the
          ring and the ring survived. Sauron has
          returned. His Orcs have multiplied...his
          fortress of Barad- dur is rebuilt in the
          land of Mordor. Sauron needs only this
          ring to cover all the lands in the second
          darkness. He is seeking it, seeking it,
          all his thought is bent on it. For the
          ring yearns, above all else, to return to
          the hand of its master: they are one, the
          ring and the dark lord. Frodo, he must
          never find out. SUDDENLY Frodo scoops up
          the Ring.

                     FRODO
          Alright!

                                                        CUT TO:

INT. BAG END LIVING ROOM -- NIGHT

ANGLE ON: FRODO

hurriedly entering the living room.

                    FRODO
              (thinking fast)
          We put it away, we keep it hidden! We
          never speak of it again. No one know
          it's here, do they? Gandalf shifts
          uncomfortably.

                    FRODO (CONT'D)
          Do they, Gandalf?

Gandalf looks at Frodo, sadly...



                                                    (CONTINUED)

                                                            29.
CONTINUED:


                     GANDALF
          There is one other who knew that Bilbo
          had the Ring. I looked everywhere for
          the creature Gollum, but the enemy found
          him first.

                                                        CUT TO:

INT. BARAD-DUR -- NIGHT

CLOSE ON: A teasing Glimpse of Gollum being tortured by the
Orcs. The wretched creature screams in pain.

                    GANDALF (V.O.)
          I don't know how long they tortured
          him...but amidst the endless screams and
          inane babble, they discerned two words.

                    GOLLUM
              (screaming)
          S...Shire! Baggins!

                                                        CUT TO:

INT. BAG END LIVING ROOM -- NIGHT

CLOSE ON: FRODO'S HORRIFIED FACE!

                     FRODO
          Shire!   Baggins!   That will lead them
          here!

                                                        CUT TO:

EXT. SHIRE LANE, SOUTH FARTHING -- NIGHT

IMAGE: On a dark country lane, a Hobbit bounder lifts his
watch lantern in alarm.

                      HOBBIT BOUNDER
          Halt!    Who goes there?

Out of the darkness thunder two BLACK RIDERS...A LETHAL SWORD
swings down at the small Hobbit bounder.

                                                        CUT TO:

INT. BAG END LIVING ROOM -- NIGHT

FRODO thrusts the ring at Gandalf.

                     FRODO
          Take it!   Take it!

                                                    (CONTINUED)

                                                           30.
CONTINUED:


                    GANDALF
          No, Frodo...

                    FRODO
          You must take it.

                    GANDALF
          You cannot offer me this ring.

                    FRODO
          I'm giving it to you!

                    GANDALF
          Don't tempt me, Frodo. I dare not take
          it, not even to keep it safe.

CLOSE ON: THE RING IN FRODO'S HAND...

                    GANDALF
          Understand, Frodo...I would use this Ring
          from a desire to do good...but through
          me, it would wield a power too great and
          terrible to imagine.

                    FRODO
          But it cannot stay in the Shire!

                    GANDALF
          No, no it can't.

CLOSE ON: THE RING IN FRODO'S CLENCHED HAND.

                    FRODO
          What must I do?

                                                       CUT TO:

INT. FRODO'S BEDROOM -- NIGHT

ANGLE ON: FRODO

throwing clothes into a knapsack...Gandalf watches him,
making plans...

                    GANDALF
          You must leave, and leave quickly. Get
          out of the Shire.

                     FRODO
          Where?   Where shall I go?

                    GANDALF
          Make for the village of Bree.

                                                   (CONTINUED)

                                                              31.
CONTINUED:


                       FRODO
            Bree?   What about you?

                      GANDALF
            I will, be waiting for you at the Inn of
            the Prancing Pony. Frodo packs his food
            into his knapsack.

                      FRODO
            And the ring will be safe there?

                      GANDALF
            I don't know, Frodo. I don't have any
            answers. I must see the Head of my
            Order. He is both wise and powerful.
            Trust me, Frodo. He'll know what to go.

                                                          CUT TO:

INT. BAG END LIVING ROOM -- NIGHT

Frodo is preparing to leave.

                      GANDALF
            You'll have to leave the name of Baggins
            behind you...for that name is not safe
            outside the Shire. GANDALF helps FRODO
            into his coat.

                      GANDALF (CONT'D)
            Travel only by day and stay off the road.

                      FRODO
                (thinking)
            I can cut across country easily enough.

Gandalf looks at the young Hobbit, moved by his courage.

                      GANDALF
            My dear Frodo, Hobbits really are amazing
            creatures. You can learn all that there
            is to know about their ways in a month,
            and yet, after a hundred years, they can
            still surprise you.

SUDDENLY!    A SOUND from outside.

                        GANDALF (CONT'D)
            Get down!

GANDALF FREEZES... he moves quietly towards the window, eyes
wide with tension. He raises his staff above the window, and
slams it down on the intruder. THERE IS A YELP OF PAIN!

                                                      (CONTINUED)

                                                             32.
CONTINUED:

Gandalf hauls a small figure into the room...SAM GAMGEE
sprawls across the floor! He looks up in terror as Gandalf
looms over him.

                    GANDALF (CONT'D)
              (angry)
          Confound it all! Samwise Gamgee, have
          you been eavesdropping?

                    SAM
          I ain't been dropping no eaves, sir!
          Honest. I was just cutting the grass
          under the window there, if you follow
          me...

                    GANDALF
          It's a little late for trimming the
          hedges, don't you think?

                    SAM
          I heard raised voices...

                    GANDALF
          What did you hear?   Speak!

                     SAM
              (panicked)
          Nothing important...that is, I heard a
          good deal about a ring...and a Dark Lord.
          And something about the end of the world,
          but...Please, Mr. Gandalf, sir, don't
          hurt me! Don't turn me into anything
          unnatural!

                    GANDALF
          No?

FRODO SMILES

                    GANDALF
          Perhaps not. I've thought of a better
          use for you.

                                                      CUT TO:

EXT. HOBBITON FIELDS -- PRE DAWN

Wide on: HOBBITON...shrouded in a white veil of MIST. WIDER:
To reveal Gandalf, Frodo and Sam hurrying across a ploughed
field, away from Hobbiton! Gandalf leads his Horse...Frodo
and Sam are carrying knapsacks.




                                                  (CONTINUED)

                                                             33.
CONTINUED:


                    GANDALF (V.O.)
          Come along, Samwise...keep up...

                                                        CUT TO:

EXT. HOBBITON WOODS -- DAY

Gandalf leads Frodo and Sam under the cover of Woods.

                    GANDALF (V.O.)
          Be careful, both of you. The Enemy has
          many spies in his service, many ways of
          hearing...birds, beasts...

Gandalf takes Frodo to one side...

                    GANDALF (CONT'D)
              (low voice)
          Is it safe?

FRODO NODS...he pats his pocket.

                    GANDALF (CONT'D)
          Never put it on, for then the agents of
          the Dark Lord will be drawn to its
          power...Always remember, Frodo, the ring
          is trying to get back to its master...it
          wants to be found. Gandalf wheels his
          horse and gallops away.

                                                        CUT TO:

EXT. GREEN HILL COUNTRY -- DAY

MONTAGE: FRODO AND SAM hiking over the gentle Shire
Countryside...wading through a shallow stream...heating a
kettle over a small fire...clambering over stone walls.

                                                        CUT TO:

EXT. GREEN HILL COUNTRY -- AFTERNOON

Sam stops short...taking stock of his surroundings.    Sam
looks back from where they came.

                    SAM
          This is it.

                    FRODO
          This is what?




                                                    (CONTINUED)

                                                             34.
CONTINUED:


                    SAM
          If I take one more step it'll be the
          farthest away from home I've ever been.

FRODO gives Sam a pat on the shoulder.

                    FRODO
          Come on, Sam.

Sam takes a deep breath and steps forward. CLOSE ON: SAM'S
brown, furry foot hits the ground.

FRODO IS SMILING.

                    FRODO
          Remember what Bilbo used to say...it's a
          dangerous business...

Frodo and Sam continue their journey.

                    BILBO (V.O.)
          ... it's a dangerous business, Frodo,
          going out your door...you step onto the
          road, and if you don't keep your feet,
          there's not knowing where you might be
          swept off to.

                                                      CUT TO:

EXT. ISENGARD VALLEY -- DAY

Gandalf is galloping along the outskirts of the ancient
forest of Fangorn. Nestled in a basin at the foot of the
distant Misty Mountains, the tall black tower of Orthanc is
clearly visible

EXT. ISENGARD VALLEY -- DAY

Gandalf gallops through the gate, into the fortress of
ISENGARD...a great ring-wall of stone, a mile from rim to
rim, encloses beautiful trees and gardens, watered by streams
that flow down from the mountains.

                    SARUMAN (V.O.)
          Smoke rises once more from the mountain
          of doom...the shadow takes shape in the
          darkness of Mordor; the hour grows
          late...and Gandalf the Grey rides to
          Isengard seeking my counsel...

The strange tower of Orthanc...hewn from a solid pillar of
black obsidian...rises up in the center of the Isengard
Circle. Gandalf arrives at the foot of the Orthanc Stairs.

                                                            35.



ANGLE ON: SARUMAN, THE WHITE WIZARD

he sweeps down the Orthanc stairs.

                    SARUMAN
          For that is why you have come, is it not,
          my old friend?

Gandalf moves quickly towards him, grimy and weary from his
long ride.

                     GANDALF
          Saruman!

                                                        CUT TO:

EXT. ISENGARD GARDENS -- DAY

Gandalf and Saruman walk slowly between the beautiful trees
of Isengard, Saruman's clean, white robe contrasts with
Gandalf's dusty grey robes.

                    SARUMAN
          Are you sure of this?

                    GANDALF
          Beyond any doubt.

                    SARUMAN
          So the ring of power has been found?

                    GANDALF
          All these long years it was in the Shire,
          under my very nose.

                    SARUMAN
          And yet you did not have the wit to see
          it! Your love of the Halfling's leaf has
          clearly slowed your mind.

                    GANDALF
          We still have time...time enough to
          counter Sauron...if we act quickly.

                     SARUMAN
          Time?   What time do you think we have?

                                                        CUT TO:

INT. ORTHANC ANTE-CHAMBER -- DAY

Saruman and Gandalf are seated in a small, cluttered room to
the side of the cavernous central chamber.

                                                    (CONTINUED)

                                                            36.
CONTINUED:


                    SARUMAN
          Sauron has regained much of his former
          strength. He cannot yet take physical
          form...but his spirit has lost none of
          its potency. Concealed within his
          fortress, the lord of Mordor sees all.
          His gaze pierces cloud, shadow, earth,
          and flesh. You know of what I speak,
          Gandalf...a great Eye, lidless, wreathed
          in flame.

                    GANDALF
              (softly)
          The eye of Sauron.

                    SARUMAN
          He is gathering all evil to him.

                    SARUMAN (CONT'D)
          Very soon he will have summoned an army
          great enough to launch an assault upon
          Middle earth.

                    GANDALF
          You know this? How?

                    SARUMAN
          I have seen it.

Gandalf and Saruman stride through Orthanc toward a stone
plinth on which a sphere like shape is draped with a cloth...

                    GANDALF
          A palantir is a dangerous tool, Saruman.

Saruman lifts the cloth to reveal the Palantir.

                     SARUMAN
          Why?   Why should we fear to use it?

                    GANDALF
          They are not all accounted for, the lost
          seeing-stones...we do not know who else
          may be watching. Gandalf throws the cloth
          back over the Palantir.

FLASH IMAGE: A FIERY EYE!

Saruman sits upon his throne.




                                                    (CONTINUED)

                                                            37.
CONTINUED:


                    SARUMAN
          The hour is later than you think.
          Sauron's forces are already moving...the
          Nine have left Minas Morgul.

                    GANDALF
              (shocked)
          The nine!

                    SARUMAN
          They crossed the river Isen in
          Midsummer's eve, disguised as riders in
          black.

                    GANDALF
              (alarmed)
          They have reached the Shire? Saruman
          shrugs...

                    SARUMAN
          They will find the ring...and kill the
          one who carries it.

Gandalf backs away and turns to run to the door...horrified
as the doors suddenly slam shut.

                    SARUMAN (CONT'D)
          You did not seriously think a Hobbit
          could contend with the will of Sauron?
          There are none who can.

Gandalf slowly turns to Saruman...a look of dawning horror.

                    SARUMAN (CONT'D)
          Against the power of Mordor, there can be
          no victory. We must join with him,
          Gandalf. We must join with Sauron. It
          would be wise, my friend.

                    GANDALF
              (deadly)
          Tell me, friend, when did Saruman the
          wise abandon reason for madness?

At that moment: Gandalf is suddenly blasted across the room!
He slams against the wall...pinned there by some unseen
force. With sudden effort, Gandalf wrenches himself off the
wall and swings his staff on Saruman...blasting him off his
feet! Gandalf and Saruman battle, powerful blasts throwing
them across the room. SARUMAN SCREAMS, EYES BLAZING!
Gandalf's staff is suddenly wrenched from his grasp...it
flies across the chamber into Saruman's hand! Gandalf is
flung to the floor.

                                                    (CONTINUED)

                                                            38.
CONTINUED: (2)


                    SARUMAN
          I gave you the chance of aiding me
          willingly, but you have elected the way
          of pain.

Gandalf is breathing hard on the floor, his eyes look into
the madness of Saruman... Commanding two staffs, Saruman
sends Gandalf into a sickening spin. Gandalf tumbles towards
the top of the chamber...as if falling in reverse. Rushing
POV: the roof of Orthanc rockets toward camera.

                                                        CUT TO:

EXT. FARMER'S FIELDS -- DAY

Wide on: Frodo and Sam walking along a country lane which
borders Farmer Maggot's Fields. Sam is looking up...Frodo has
disappeared around a corner in the lane.

                     SAM
               (panicked)
          Mr. Frodo. Mr. Frodo! Frodo turns,
          surprised as Sam comes running towards
          him.

                    SAM (CONT'D)
              (worried)
          I thought I lost you. Frodo looks at Sam
          suspiciously. Sam glances down,
          embarrassed.

                    FRODO
              (teasing)
          What are you talking about?

                    SAM
              (mumbling)
          It's just something Gandalf said...

                    FRODO
          What did he say?

                    SAM
          He said..."Don't you leave him, Samwise
          Gamgee."
              (looks at Frodo intently)
          And I don't mean to.

                    FRODO
              (laughing)
          Sam...we're still in the Shire...what
          could possibly happen?


                                                    (CONTINUED)

                                                               39.
CONTINUED:


SUDDENLY! A figure comes crashing out of a hedgerow sending
Frodo flying. Frodo picks himself up, only to be knocked back
down again by Pippin.

                     PIPPIN
          Frodo!   Merry, it's Frodo Baggins.

                    MERRY
          Hello Frodo

Merry, Pippin, and Frodo picking themselves up... a variety
of vegetables have scattered everywhere.

                    SAM
          What's the meaning of this!

                    MERRY
          Sam, hold this...

Merry gives Sam a large cabbage.

                    SAM
              (accusing)
          You've been into Farmer Maggot's crop!

A large pitchfork can be seen racing towards them along the
Hedgerow...angry shouts from Farmer Maggot.

                    FARMER MAGGOT    (O.S.)
          Who's that in my field!     Get out of it!
          Get out of my field, you    young varmits!
          I'll show you...get out    of my corn.

Merry and Pippin hurriedly gather their booty and race
away...with Frodo and Sam on their heels.

                    MERRY
              (looking behind him)
          I don't know why he's so upset, it's only
          a couple of carrots.

                    PIPPIN
          And some cabbages...and those three bags
          of potatoes that we lifted last week.
          And then the mushrooms the week before.

                    MERRY
          Yes, Pippin, my point is, he's clearly
          over reacting.

The BAYING OF LARGE DOGS sounds!



                                                       (CONTINUED)

                                                             40.
CONTINUED: (2)


                    PIPPIN
          Run!

                                                      CUT TO:

EXT. WOODED ROAD -- DAY

Frodo, Sam, and Merry and Pippin tumble head over heels down
a bank, onto a dark, wooded road. CLOSE ON: A winded Pippin,
his face inches away from a large pile of Horse droppings...

                    PIPPIN
          That was close.

Frodo picks himself up and looks around quickly.

                    MERRY
              (groaning)
          Ow...I think I've broken something.

Pulls a LARGE CARROT, almost broken through in the middle,
out from his back pocket.

                    MERRY (CONT'D)
          Oh.

                    SAM
              (turning on Merry and Pippin)
          Trust a Brandybuck and a Took.

                    MERRY
          What? That was just a detour...a
          shortcut.

                    SAM
          A shortcut to what?

Pippin has spied something under the trees on the far side of
the road.

                     PIPPIN
              (excited)
          Mushrooms!

CLOSE ON: SMALL, brown mushrooms growing amongst the Loamy
undergrowth. Sam, Merry, and Pippin race toward the
mushrooms! Frodo is tense and watchful. He realizes they are
on a wooded road. Scattered leaves rise into the air Whirling
down the road as if blown by an invisible wind...

                                                             41.



SUDDENLY... THE SOUND OF HORSES HOOVES...

                      FRODO
            I think we should get off the road.

A long drawn WAIL comes down the wind, like the cry of some
evil and lonely creature.

                      FRODO (CONT'D)
                (more urgency)
            Get off the road!

Sam grabs Merry and Pippin as the Hobbits quickly scramble
down the bank, hiding under a mossy log. THE SOUND OF HOOVES
is close... A sinister MOUNTED RINGWRATH steps into
view...hooded and faceless, mounted on a huge snarling black
horse with insane eyes ! Frodo freezes in terror. The
RINGWRAITH pauses right beside their hiding place...he sits
very still with his head bowed, listening. From inside the
hood comes a sniffing noise as if he is trying to catch an
elusive scent; his head turning from side to side.

CLOSE ON: FRODO

Beads of sweat gather on his brow. The ringwraith suddenly
slides off his horse, leaning over the mossy log, peering
suspiciously into the woods.

CLOSE ON: FRODO

He is drawing the ring out of his pocket, with trembling
hands...his face fevered and sweating as if in the grip of
some terrible INTERNAL STRUGGLE. The SOUND OF SNIFFING
intensifies as the ringwraith darts his head from side to
side like a bird of party.

CLOSE ON: FRODO SQUEEZING HIS EYES SHUT...

QUICK PSYCHIC BLASTS!   AND EVIL DARK TOWER...A GREAT EYE...A

BURST OF FLAME.

ANGLE ON:   SAM LOOKING AT FRODO WITH CONCERN

                      SAM
            Frodo?

Merry desperately hurls the mushrooms across the road...the
ringwraith spins around at the sound, and darts to the far
side of the road with frightening speed. Frodo instantly
slumps...as if a PSYCHIC LINK had been broken



                                                  (CONTINUED)

                                                             42.
CONTINUED:


                    MERRY
          What was that?

Frodo is staring, a look of shock on his face at the ring
lying in the palm of his hand.

EXT. FERRY LANE -- NIGHT

Frodo, Sam, Merry, and Pippin hurry through the
trees...slipping and sliding on the muddy ground.

                      SAM
          Anything?

                      FRODO
          Nothing.

                    PIPPIN
          What is going on?

Merry moves past pippin, toward Frodo, watching
intently...Sam keeps looking around nervously.

                    MERRY
          The Black rider was looking for
          something...or someone...Frodo?

                      SAM
          Get down!

The SILHOUETTE OF A BLACK RIDER looms against the skyline.
The Four Hobbits... sprawled on the ground, holding their
breath. The BLACK RIDER turns and departs.

                    FRODO
          I have to leave the Shire...Sam and I
          must get to Bree.

Merry looks at his friend...realizing Frodo is in deep
trouble.

                    MERRY
          Right...Buckleberry Ferry...follow me !

The Hobbits break cover. SUDDENLY, A RINGWRAITH bursts out of
the forest TOWARD THEM!

                    MERRY (CONT'D)
          There's another one!! Frodo, this way! !

The Hobbits run   THE RINGWRAITH SHRIEKS!

                                                    QUICK CUTS:

                                                    (CONTINUED)

                                                            43.
CONTINUED:


Black horse hooves... snarling horse mouths...a fleeting
black cowl.

                    MERRY (CONT'D)
          Frodo, follow me!

                                                         CUT TO:

EXT. BUCKLEBERRY FERRY -- NIGHT

FRODO, SAM, MERRY AND PIPPIN, are running towards the wide,
placid Brandywine river...and the FERRY.

                    MERRY
          Get the ropes, Sam.

QUICK ANGLES: STOMPING HOOVES...SNARLING HORSES...

Four RINGWRAITHS are speeding through the Fog...converging on
the FERRY CROSSING. The HOBBITS stampede across the Wharf and
Tumble onto the Ferry.

                    SAM
              (screaming)
          Frodo!

Frodo races across the Wooden Wharf, followed by the
ringwraiths. He leaps into the Ferry.

CLOSE ON: HOOVES THUNDER DOWN THE WOODEN WHARF!

Sam and Merry shove off with the poles...the ferry slides out
into the river, just as the ringwraiths arrive. They pull up
on the end of the wharf... shrieking with rage! The Hobbits
cover their ears. The Ringwraiths wheel their horses towards
the north and Gallop away along the river bank, quickly
disappearing into the fog.

                    FRODO
          How far to the nearest crossing?

                    MERRY
          The brandwine bridge...twenty miles.

                                                         CUT TO:

EXT. BREE GATE -- NIGHT

                                                       ANGLE ON:

Lights of Bree...a small village of stone and half timbered
houses nestled against a low wooded hill.


                                                  (CONTINUED)

                                                             44.
CONTINUED:

A thick hedge surrounds the village...a great gate bars the
western entrance.

                                                      CLOSE ON:

FRODO, SAM, MERRY AND PIPPIN approaching the gatehouse...wild
eyes, ragged, and out of breath.

                     FRODO
          Come on.

A SURLY GATEKEEPER glances down at them.

                    GATEKEEPER
          What do you want?

                    FRODO
          We're headed for the prancing pony.

The gatekeeper swings his lantern onto the hobbits, bathing
them in an uncomfortable yellow spotlight.

                    GATEKEEPER
          Hobbits! Four Hobbits, and what's more,
          out of the Shire by your talk. What
          business brings you to Bree?

                    FRODO
          We wish to stay at the inn...our business
          is our own. To Frodo's relief, the
          Gatekeeper unlocks the gate.

                    GATEKEEPER
          All right, young sir, I meant no offense.

The Hobbits gratefully enter Bree...the gatekeeper eyeing
them curiously in the lantern light.

                    GATEKEEPER (CONT'D)
          It's my job to ask questions after
          nightfall. There's talk of strange fold
          abroad...can't be too careful.

                                                        CUT TO:

EXT. BREE STREETS -- NIGHT

The tall BREE FOLK loom over the nervous little hobbits as
Frodo, Sam, Merry and Pippin make their way through the
Narrow Streets. Tall buildings tower above them...lights
glow dimly from behind thick curtains.




                                                 (CONTINUED)

                                                            45.
CONTINUED:

Close on: The sign of the "PRANCING PONY INN"...Frodo, Sam,
Merry, and Pippin hurry toward it.

                                                        CUT TO:

INT. "PRANCING PONY" RECEPTION -- NIGHT

Frodo, Sam, Merry and Pippin come rushing in.   Frodo attracts
the INN KEEPERS'S attention.

                       FRODO
          Excuse me.

                     BUTTERBUR
          Good evening, little masters. If you're
          seeking accommodation, we've got some
          nice, cozy Hobbit sized rooms available,
          Mr...ah...

                    FRODO
          Underhill...my name's Underbill.

                       BUTTERBUR
          Underhill?     Hmmmm.

                    FRODO
          We're friends of Gandalf the Grey...can
          you tell him we've arrived? BUTTERBUR
          frowns...

                    BUTTERBUR
              (Puzzled)
          Gandalf...Gandalf...Oh...
              (recognition)
          Oh yes! I remember...elderly chap...big
          grey beard...pointy hat? Frodo nods with
          relief...Butterbur shakes his head.

                    BUTTERBUR (CONT'D)
          Not seen him for six months. Frodo is
          shocked.

                    SAM
              (worried whisper)
          What do we do now?

INT. PRANCING PONY INN -- NIGHT

Wide on: the noise, smokey Inn. It is dimly lit, cheifly
from a blazing log fire...and crowded with a mixture of BIG
FOLK, LOCAL HOBBITS, and a couple of dwarfs. Frodo, Sam,
Merry and Pippin are sitting at a table against the wall...
clearly trying to remain Quiet and inconspicuous... Sam can't
help himself...he keeps casting nervous glances around.

                                                    (CONTINUED)

                                                             46.
CONTINUED:


                    FRODO
          Sam, he'll be here.    He'll come.

Merry ploinks himself down at a table, carrying a very large
mug of beer.

                    PIPPIN
          What's that?

                    MERRY
          This, my friend, is a pint.

                    PIPPIN
          It comes in pints?    I'm getting one!

Sam watches Pippin rise unsteadily to his feet and head to
the bar.

                    SAM
          You've had a whole half already. Merry
          watches Pippin go.

A COUPLE OF SWARTHY MEN leaning against the bar glance at
Frodo, then quickly look away.

                    SAM (CONT'D)
              (tense)
          That fellow's done nothing but stare at
          you since we've arrived.

Sam indicates a BROODING STRANGER who sits alone at a table
in the far corner, smoking a curiously carved long stemmed
pipe, peering from beneath a travel stained cowl with
gleaming eyes. Frodo gestures to Butterbur...

                    FRODO
          Excuse me, that man in the corner, who is
          he?

                    BUTTERBUR
          He's one of them Rangers; they're
          dangerous folk they are, wandering the
          wilds. What his right name is, I never
          heard, but round here he's known as
          Strider.

                    FRODO
              (to himself)
          Strider.

BENEATH TABLE: FRODO'S fingers are nervously TOYING WITH THE
RING.

                                                            47.



CLOSE ON: FRODO

Sweat runs down his brow.   The Strange hum of the Ring spills
into the Soundtrack.

"Baggins...Baggins..." a creepy whisper seems to fill Frodo's
head...sound that dissolves into Pippin's loud voice:

                    PIPPIN
          Baggins? Sure, I know a Baggins...he's
          over there...

ANGLE ON: PIPPIN

sitting at the bar, chatting with Locals.   Frodo leaps to his
feet and pushes his way towards the bar.

                    PIPPIN
              (loudly)
          Frodo Baggins. He's my second cousin
          once removed, on his mother's side and my
          third cousin twice removed on his
          father's side...if you follow me.

Frodo grabs Pippin's sleeve, spilling his beer.

                    FRODO
          Pippin!

                    PIPPIN
          Steady on, Frodo!

Pippin pushes Frodo away...he stumbles backwards, and falls
to the floor. At that instant, the Inn goes silent and all
the attention turns to Frodo...

                                                      CLOSE ON:

The ring...in agonizing Slow motion we watch as it seems to
hang in the air for a split second...then crashes down onto
his out stretched finger. FRODO VANISHES! There is a sharp
intake of breath...followed by total silence.

                                                        CUT TO:

EXT. BREE COUNTRYSIDE -- NIGHT

The RINGWRAITHS turn sharply in their saddles...Instantly
aware that the ring is being worn. They spur their horses
towards the distant lights of Bree.

                                                            48.



INT. "PRANCING PONY" INN -- NIGHT

Sam looks sick; Pippin instantly sobers, realizing his folly;
the brooding stranger frowns...and the inn erupts into
excited babble.

                                        IN THE TWILIGHT WORLD:

                                                      ANGLE ON:

FRODO: as he finds himself in the TWILIGHT WORLD of the ring:
THE EXCITED CROWD ARE suddenly moving in slow
motion...distorted voices...a weird photographic negative
quality. FRODO is moving in real time; against the slow
motion background. He suddenly clutches his head as he is
hit with quick images...of a GREAT EYE! AN EVIL CAT-LIKE
EYE, wreathed in flames.

VOICE OF SAURON

There is no life here in the void...only cold...only death...
FRODO is terrified! He rolls under a table, desperately
pulling the ring from his finger. FRODO MATERIALIZES into the
real world. AT THAT MOMENT: A LARGE HAND reaches under the
table and Grabs Frodo by the collar, and DRAGS HIM AWAY!

                                                        CUT TO:

INT. PRANCING PONY--CORRIDOR -- NIGHT

Frodo is roughly pushed against the wall.    The Brooding
stranger looms over him.

                    STRIDER
          You draw far too much attention to
          yourself...Mr. Underhill

                                                        CUT TO:

INT. HOBBIT'S ROOM, PRANCING PONY -- NIGHT

Frodo is pushed into the Hobbit's room by Strider.

                    FRODO
          What do you want?

                    STRIDER
          A little more caution from you...that is
          no trinket you carry.

                    FRODO
          I carry nothing.


                                                   (CONTINUED)

                                                           49.
CONTINUED:


                    STRIDER
          Indeed? I can usually avoid being seen
          if I wish, but to disappear entirely...
          that is a rare gift.

                    FRODO
          Who are you?

                    STRIDER
          Are you frightened?

                    FRODO
          Yes.

                    STRIDER
          Not nearly frightened enough. I know
          what hunts you. Frodo jumps at the sound
          of a noise in the corridor. Strider
          deftly draws his sword.

The door bursts open and Sam, Merry and Pippin appear on the
doorway. Sam is Squaring off with is fists, Merry brandishes
a candlestick, and Pippin a chair.

                    SAM
              (angry)
          Let him go or I'll have you, Longshanks!

STRIDER SHEATHS his sword, a slight smile playing on his
lips.

                    STRIDER
          You have a stout heart, little Hobbit,
          but that alone won't save you...You can
          no longer wait for the Wizard, Frodo.
          They're coming.

                                                      CUT TO:

EXT. GATEHOUSE, BREE -- NIGHT

The gate keeper comes out of his Lodgings with a lantern...a
look of fear on his face. He approaches the closed gate with
great apprehension. CLOSE ON: The Gatekeeper peers out of his
Peephole.

CRASH!!

The gate crashed down on the gatekeeper...as four RINGWRAITHS
ride into Bree!

                                                             50.



EXT. BREE STREETS -- NIGHT

The four RINGWRAITHS fly done the empty streets, like
horsemen of the apocalypse.

INT. PRANCING PONY INN -- NIGHT

LOW ANGLE: the front door FLIES OPEN. The FOUR RINGWRAITHS
rush into the PRANCING PONY with WICKED SWORDS DRAWN. CLOSE
ON: BUTTERBUR hiding behind his bar... trembling and sweating
in TERROR.

INT. HOBBIT'S ROOM, PRANCING PONY -- NIGHT

INSERT: MERRY SNORING SOFTLY ON HIS PILLOW.

INSERT: PIPPIN stirs slightly, then settles back to sleep.
WIDE ON: the door creaks open...THE FOUR RINGWRAITHS silently
slide into the Hobbit's room. The LOOM above each bed,
raising their SHINING SWORDS ABOVE THE SLEEPING HOBBITS.
QUICK INSERT: Sam's eyes open wide. In unison, the RINGWRAITS
STAB THE HOBBITS, in a Slashing, hacking frenzy.

INT. STRIDER'S ROOM -- NIGHT

Strider is grimly listening to the sounds from his room.

INT. HOBBIT'S ROOM, PRANCING PONY -- NIGHT

Wide on: the RINGWRAITHS step back from the slashed beds in
triumph. CLOSE ON: a hacked blanket is pulled back to reveal
nothing but a shredded pillow. The RINGWRAITHS SHRIEK WITH
RAGE!! INSERTS: Sam sits up with a start! Close on: Another
shredded pillow is revealed! More Shrieks of rage. INSERT:
PIPPIN AND MERRY wake with a start.

                                                        CUT TO:

INT. STRIDER'S ROOM -- NIGHT

WIDE ON: Sam, Merry, and Pippin have been sleeping on
Strider's bed. Frodo stands next to Strider by the window,
peering out nervously as furious Ringwraith screeches echo
across the courtyard from the Hobbits room.

                    FRODO
          Where are they?

                    STRIDER
          They were once men. Strider glances
          quickly at Frodo, then looks away...



                                                 (CONTINUED)

                                                           51.
CONTINUED:


                    STRIDER (V.O.) (CONT'D)
              (quietly)
          Great Kings of men. Then Sauron the
          deceiver gave to them Nine Rings of
          Power. Blinded by their greed they took
          them without question, one by one falling
          into darkness and now they are slaves to
          his will.

Strider looks from the window as the Ringwraiths gallop down
the Bree Streets. CLOSE ON: Strider turns back to the
Hobbits, his face lit faintly by the Glowing Embers of the
Fire.

                    STRIDER (CONT'D)
          They are the Nazgul, Ringwraiths, neither
          living or dead. At all times they feel
          the presence of the ring...drawn to the
          power of the one..they will never stop
          hunting you.

                                                        CUT TO:

EXT. CHETWOOD FOREST -- DAY

                                                      ANGLE ON:

STRIDER, MERRY, PIPPIN, AND FRODO march through a gloomy,
overgrown forest. Sam follows at the read leading "Bill", a
scrawny pony, who is laden with supplies.

                    FRODO
          Where are you taking us?

                    STRIDER
          Into the wild.

Frodo watches uneasily as Strider moves off into the cover of
the trees...

                    MERRY
              (whispered aside)
          How do, we know this Strider is a friend
          of Gandalf?

                    FRODO
          We have no choice but to trust him.

                    STRIDER
          But where is he leading us?

                                                      ANGLE ON:


                                                 (CONTINUED)

                                                             52.
CONTINUED:


Strider stops, casts a glance back at Sam.

                    STRIDER (CONT'D)
          To Rivendell, Master Gamgee...to the
          house of Elrond.

SAM looks excited.

                    SAM
          Did you hear that, Bill? Rivendell!
          We're going to see the Elves!

Strider leads the Hobbits through the gloom of the forest.

                                                       CUT TO:

EXT. MIDGEWATER MOORS -- DAY

Aerial on: Strider leading Frodo, Sam, Merry, and Pippin
across the windswept moors. The hobbits suddenly stop and
unstrap their knapsacks.

                     STRIDER
          Gentlemen, we do not stop until
          nightfall.

                    PIPPIN
          What about breakfast?

                    STRIDER
          You've already had it.

                    PIPPIN
          We've had one, yes...but what about
          Second Breakfast?

Strider stares at Pippin blankly, then turns away, shaking
his head.

                    MERRY
          I don't think he knows about second
          breakfast, Pip.

                    PIPPIN
          What about Elvenses, Luncheon, Afternoon
          Tea, dinner...he knows about them,
          doesn't he?

                    MERRY
          I wouldn't count on it.

An apple is thrown to Merry, who deftly catches it.   Another,
aimed at Pippin, catches him on the forehead.

                                                 (CONTINUED)

                                                            53.
CONTINUED:


                    MERRY (CONT'D)
              (exasperated)
          Pippin!

The hobbits trudge through rain, looking tired, hungry, and
miserable.

                                                        CUT TO:

INT. ORTHANC ANTE-CHAMBER -- NIGHT

Saruman stands over the Palantir, his hands cupping the
massive eye.

                    SARUMAN
              (whisper)
          The power of Isengard is at your command,
          Sauron, Lord of the Earth.

ON THE SOUNDTRACK: BLACK SPEECH FILLS THE ROOM...ADMIST THE

HARSH, GUTTURAL WORDS THE VOICE OF SARUMAN EMERGES.

                    SARUMAN
          Build me an army worth of Mordor.

INT. ORTHANC ANTE-CHAMBER -- NIGHT

Saruman is seated as his ORC OVERSEER approaches.

                    ORC OVERSEER
          What orders from Mordor, my Lord. What
          does the eye command?

                    SARUMAN
          We have work to do.

                                                        CUT TO:

INT. ISENGARD -- NIGHT

CLOSE ON: GANDALF...lying unconscious on a cold obsidian
floor. He wakes to the sound of ripping and tearing...rising
onto his knees...lifting his head... Gandalf stands as the
camera pulls back to reveal him stranded on the summit of
Orthanc. He is marooned on the tiny, flat peak, surrounded
on all sides by a sheer 500 FOOT DROP. Another whispering
wail rends the air. Gandalf crosses quickly to the edge and
peers down: POV: One of the beautiful Isengard trees is being
ripped from the ground by the ORCS. Gandalf looks on in
Horror as ORCS hack into the trunk with axes.

                                                      ANGLE ON:

                                                    (CONTINUED)

                                                             54.
CONTINUED:


SARUMAN stands in Rain looking out into the dark night...the
ORC overseer sidles up to him, axe in hand, sweating with
exertion.

                    ORC OVERSEER
          The trees are strong, my Lord.   Their
          roots go deep.

                    SARUMAN
          Rip them all down.

CAMERA CIRCLES SUMMIT: MORE AND MORE TREES are hauled down
and killed...as Gandalf looks on in helpless despair.

                                                   DISSOLVE TO:

EXT. WEATHERHILLS -- DAY

Wide on: The rugged countryside as the hobbits journey on,
lead by Strider. Strider stops before a distant hill, topped
by an Ancient Ruin.

                    SARUMAN
          This was once the great Watchtower of
          Amon Sul. We shall rest here tonight.

                                                        CUT TO:

EXT. WEATHERTOP HOLLOW -- DUSK

                                                     ANGLE ON:

FRODO, MERRY, AND PIPPIN collapse into a small hollow,
halfway up Weathertop...they are muddy and exhausted. Stider
drops 4 small swords at the Hobbits feet.

                    SARUMAN
          There are for you. Keep them close. I'm
          going to have a look around. Stay here.

                                                        CUT TO:

EXT. WEATHERTOP HOLLOW -- NIGHT

Close on: Frodo...eyes flickering open. He suddenly sits up,
sniffing the air. Sam, Merry, and Pippin huddled over a small
fire... Sausages and bacon sizzle in a hot frying pan.

                    FRODO
          What are you doing?

                    MERRY
          Tomatoes, sausages, and crispy bacon.

                                                   (CONTINUED)

                                                            55.
CONTINUED:


                    SAM
          We saved some for you, Mr. Frodo.

                    FRODO
          Put it out, you fools! Put it out! Frodo
          desperately kicks dirt on the fire!

                    PIPPIN
          Oh, that's nice...ash on my tomatoes!

A SUDDEN SHREIK!

                                                       ANGLE ON:

FIVE RINGWRAITHS ON FOOT, running up the steep slope
unnaturally fast.

                    FRODO
          Go! !

Frodo, Sam, Merry and Pippin clamber desperately towards the
summit, clutching their swords.

                                                         CUT TO:

EXT. WEATHERTOP SUMMIT -- NIGHT

Frodo, Sam, Merry, and Pippin race into a RING OF BROKEN
STONES on the summit or Weathertop...the ruined base of an
ancient tower. The hobbits stand back-to-back in the centre
of the Ring, waiting for the first assault... One by one, the
5 Ringwraiths appear...brandishing Gleaming swords, they move
slowly towards the hobbits. In the center is their
leader...the WITCH KING!

                    SAM
          Back, you devils!

Sam rushes forward with a cry. He swings his sword at the
Witch King, who blocks the blow with his own sword. Sam's
blade shatters...the WITCH KING lashes out with his fist,
sending Sam flying. Merry and Pippin, overcome with terror,
throw themselves flat on the ground. THE RINGWRAITHS close in
on Frodo...a Venomous whisper dances in his head...

Frodo shuts his eyes and staggers back, desperately resisting
the WRAITH'S WHISPERINGS... slow motion as his hand goes into
his pocket and pulls out the ring. The 5 Ringwraiths utter a
chilling SCREECH OF EXCITEMENT. Frodo is unable to resist any
longer, falls to his knees and slips on the ring. He
disappears.



                                                  (CONTINUED)

                                                          56.
CONTINUED:


                    SAM (CONT'D)
          No!

                                       IN THE TWILIGHT WORLD:

                                                     ANGLE ON:

Frodo finds himself in the weird twilight world...he looks
upon the Ringwraiths, now visible in their TRUE APPEARANCE:
Five Ghouls dressed in long Grey robes, with white hair, and
Pallid, ruthless faces. THE WITCH KING extends a haggard hand
towards Frodo, reaching for the ring on his finger. Frodo's
trembling hand extends forward as if by the pull of the
ring...he slides to the ground, unable to pull his hand away.
The witch king snarls and springs forward. He stabs at Frodo
with a wicked dagger! Frodo winces as the tip of the dagger
sinks into his shoulder. Suddenly, Strider charges at the
RINGWRAITHS, wielding his sword in one hand, a flaming torch
in the other. He moves in slow motion, visible through a sea
of mist. Frodo sinks to the ground. Behind him is a faint
image of a Ringwraith fleeing, his head engulfed in flames.
With draining strength, Frodo manages to pull the ring off
his finger...

                                           IN THE REAL WORLD:

...Appearing back in the real world, Sam rushes over to him.

                    SAM (CONT'D)
              (horrified)
          Frodo!

Another Ringwraith is burning and screaming...others screech
fearfully at the flames, turn and flee form the Weathertop
summit.

                    SAM (CONT'D)
              (panicked)
          Mr. Frodo!!

Strider kneels before Frodo. He snatches up the Witch King's
Dagger from the ground, staring gravely at the long, thin,
blade.

                    SAM (CONT'D)
          Help him, Strider!

                     STRIDER
              (grim)
          He's been stabbed by a Morgul blade. The
          Morgul Blade suddenly melts...vanishing
          into the air like smoke. Strider throws
          the hilt down in disgust...

                                                 (CONTINUED)

                                                             57.
CONTINUED: (2)


                    SAM
          Do something.

                    STRIDER
          This is beyond my skill to heal.
              (urgently)
          He needs Elvish medicine. Strider lifts
          Frodo onto his shoulders.

EXT. WEATHERHILLS -- NIGHT

Strider is jogging grimly, carrying an ailing Frodo on his
back. Sam, Merry, and Pippin are running to keep up. The
hobbits are carrying Flaming torches for protection.

                    STRIDER
          Hurry!

                    SAM
          We are six days from Rivendell. Frodo
          groans.

                    STRIDER
          Hold on, Frodo.

                     SAM
          He'll never make it! Close on:
          Frodo...head lolling about, barely
          conscious.

                    FRODO
              (fevered calling)
          Gandalf...Gandalf?

EXT. ISENGARD -- NIGHT

Low angle...looking up at ORTHANC...the tower of Isengard,
gleaming in the moonlight. The camera rises to reveal the
once beautiful gardens are not a pitted wasteland...with
smoke and fire billowing out

of numerous tunnels and vent holes that litter the forecourt
of ORTHANC. Strange guttural chants echo up from deep
underground. The camera is rising...a small moth flutters
into shot...and leads the camera towards the summit or
Orthanc. Gandalf lies slumped against the wall at the very
top of Orthanc, surrounded by a sheer 500 foot drop. He
looks Weak and Frail...and is seemingly asleep. The MOTH
flutters close to Gandalf. His hand suddenly moves at
lighting speed and SNATCHES THE MOTH. Gandalf brings his hand
close to his face and opens it. The moth sits on the palm of
his hand as Gandalf mutter strange words in a foreign tongue.
Close on: THE MOTH'S face... seemingly listening.

                                                    (CONTINUED)

                                                            58.
CONTINUED:

It suddenly flutters away. CAMERA FOLLOWS the moth off the
Orthanc summit, but drops past the moth...falling down, down,
towards the pitted wasteland, straight into a fiery red
tunnel!

INT. CAVERNS BELOW ISENGARD -- NIGHT

The dead trees of Isengard are fed into roaring
furnaces...molten metal pours into casts...red hot metal,
beaten my sweating orc blacksmiths...armor and weapons are
forged from the great furnaces. Saruman strides among the
ORCS and stands looking on a new born uruk-hai as it escapes
its birthing membrane...this is LURTZ, who rises up to stand
before his master.

                                                         CUT TO:

EXT. TROLLSHAW FOREST CLEARING -- NIGHT

Close on: Frodo...his eyes flicker open...clouded, red-
rimmed...his brow, beaded with sweat.

                    PIPPIN
          Is he going to die? Frodo's breathing is
          getting shallow. Strider looks out into
          the darkness.

                    STRIDER
          No. He is passing into the shadow world,
          he will soon become a wraith like them.

A DISTANT CRY of a RINGWRAITH carries through the air.

                    MERRY
              (nervous)
          They're close.

Frodo gasps in sudden pain.

                    STRIDER
              (thinking hard)
          Sam, do you know the Athelas plant? Sam
          looks blank.

                       SAM
          Athelas?

                       STRIDER
          Kingsfoil.

                       SAM
          Kingsfoil.     Aye.    It's a weed.



                                                    (CONTINUED)

                                                             59.
CONTINUED:


                      STRIDER
            It may help to slow the poison. Hurry!

                                                        CUT TO:

EXT. TROLLSHAW FOREST -- NIGHT

Sam and Strider desperately search the dark forest floor for
the Athelas plant. Close on: A small, white flowered plant!
Strider drops to one knee, carefully pulling it from the
ground.

SUDDENLY!    STRIDER FREEZES AS A SWORD BLADE TOUCHES HIS NECK.

                      ARWEN (O.S.)
            What is this? A Ranger caught off his
            guard?

Strider slowly looks up.

                                                        CUT TO:

EXT. TROLLSHAW FOREST CLEARING -- NIGHT

Frodo is breathing hard, desperately ill. Frodo's half-
conscious POV: Surreal impression...a SHIMMERING FIGURE IN
WHITE leaps off a horse.

FLASH INSERT: An ethereal vision of ARWEN, as she appears on
the other side...

                      ARWEN
                (ELVISH: with sub titles)
            Frodo, Im Arwen...telin let thaed. I am
            Arwen, I have come here to help you.
                (urgent)
            Lasto Beth nin, tolo Dan na ngalad. Hear
            my voice, come back to the light. Frodo's
            eyes close.

                      PIPPIN
            Who is she?

                      ARWEN
                (worried)
            Frodo?

                      SAM
            She's an elf.

                                                            60.



ANGLE ON: ARWEN

Who now appears in her earth bound form, a young Elven woman
with tousled hair, dressed in mud-splattered riding clothes.

                    ARWEN
          He's fading...he's not gong to last. We
          must get him to my father. Strider
          quickly lifts Frodo...placing him on the
          horse.

                    ARWEN (CONT'D)
          I have been looking for you for two days.

                    PIPPIN
          Where are you taking him?

                    ARWEN
          There are five Wraiths behind you, where
          the other four are, I do not know.

                    STRIDER
              (ELVISH: with subtitles)
          Dartho guin Berian...rych le ad
          tolthathon. Stay with the hobbits...I'11
          send horses for you. Close on: Arwen
          grabbing the Reins of the horse.

                    ARWEN
              (ELVISH: w/subtitles)
          Hon mabathon. Rochoh ellint im. I'll
          take him. I'm the faster rider. Strider
          clamps his hand over Arwen's.

                    STRIDER
              (elvish:subtitles)
          Andelu I ven. The road is too dangerous.

                    ARWEN
              (Elvish: subtitles)
          Frodo Fir. Ae anthradon I hir, tur
          gwaith nin beriatha hon. If I can cross
          the river, the power of my people can
          protect him.

                    PIPPIN
          What are they saying?

CLOSE ON: Arwen reaches for Strider's hand...looking deep
into his eyes.

                    ARWEN
          I do not fear them.

                                                 (CONTINUED)

                                                             61.
CONTINUED:


CLOSE ON: Strider...we see that it is hard for him to let her
go.

                                                     ANGLE ON:

Arwen mounts her horse, ALSFORTH...

                    STRIDER
          Arwen...ride hard, don't look back.

                                                     ANGLE ON:

Arwen looks down at Strider as she supports Frodo with one
hand.

                    ARWEN
              (elvish)
          Noro Lim, Asfaloth, Noro Lim!

                    SAM
          What are you doing!    Those Wraiths are
          still out there!

                                                     ANGLE ON:

Asfaloth springs away, bearing Arwen and Frodo into the
night.

                                                       CUT TO:

EXT. TROLLSHAW FOREST -- NIGHT

SPEEDING POV: through the forest from the back of the White
Horse.

ANGLE ON: FRODO, BOUNCING IN THE SADDLE,

he lifts his head weakly. SURREAL SLOW MOTION POV: THE HORSES
HEAD BOBBING...trees sliding by...moonlight flickers through
the trees.

                                                       CUT TO:

EXT. AERIAL OF ETTENMOORS ~ MORNING

AERIAL: of Arwen's white horse emerging from the trees...and
galloping across the open land as the sun rises.

                                                       CUT TO:

                                                             62.



EXT. PINE FOREST -- DAY

The white horse charges through a Pine Forest. Suddenly 2
Galloping Ringwraiths emerge from the trees behind! 2 more
Ringwraiths slide in from different directions to join the
chase. Arwen grits her teeth...urges the white horse to
greater speed.

                                                      CUT TO:

EXT. THE EAST ROAD -- DAY

The white horse speeds out of the pine trees...the 4
ringwraiths close behind PAN ONTO: 2 more ringwraiths
galloping down the hillside! AERIAL SHOT: 3 MORE RINGWRAITHS
enter frame from different directions...a total of 9
RINGWRAITHS now pursuing Frodo and Arwen! CLOSE ON: Panting
head of the WHITE ELVEN HORSE.

                    ARWEN
          Noro lim, Asfaloth!

                                                      CUT TO:

EXT. FORD OF BRUINEN -- DAY

CRANE DOWN: As the White Horse races towards Camera, to
Reveal the wide river Bruinen in the foreground.

Without hesitation, the white horse leaps into the shallow
water and thunders across the Ford. The 9 Ringwraiths pull up
short of the Ford, clearly nervous of the water. The white
horse reaches the other side...Arwen pulls up and turns to
defiantly face the Ringwraiths from across the Ford.

                    WITCH KING
          Give up the Halfling, she-elf! She draws
          her sword and yells at the Witch King.

                    ARWEN
              (yelling)
          If you want him, come and claim him.

THE WITCH KING SCREECHES ANGRILY, draws his sword, and leads
the Ringwraiths across the Ford. The water starts flowing
faster...a distant rumble can be heard. Arwen waits until
they are halfway across: she suddenly stands in the saddle
arms raised!

                    ARWEN (CONT'D)
              (Elvish)
          Non o Chithaeglir, lasto Beth daer: Rimmo
          nin Briunen Dan in Ulaer!
                    (MORE)
                                                  (CONTINUED)

                                                             63.
CONTINUED:
                    ARWEN (CONT'D)
          Nin o Chitaeglir, lasto Beth daer: Rimmo
          nin Bruinen Dan in Ulaer!

THE GROUND SUDDENLY TREMBLES...A MIGHTY ROAR FILLS THE AIR!

Frodo looks up weakly...to see a vast torrent of Water
flooding down the river towards the ford...as if a dam had
burst! The Foaming water seems to form the shape of Dancing
white horses with frothing manes! The Ringwraiths scream in
terror as they are swallowed up in the deluge. Their Piercing
cries are drowned in the roaring of the river as it carries
them away! CLOSE ON: FRODO as he loses consciousness...

                    ARWEN
              (upset)
          No, no...Frodo, no!     Frodo, don't give
          in...not now!

Arwen gathers the small Hobbit in her arms, feeling his life
slip away.

INT. FRODO'S DELIRIUM -- DAY

DELIRIOUS IMAGES AND SOUNDS....

                    ARWEN (V.O.)
          What grace is given me, let it pass to
          him. Let him be spared. Save him.

IMAGE: A BRIGHT LIGHT suddenly flares...Frodo squeezes his
eyes shut, gasping.

                    FRODO
              (frightened)
          Where am I?

A FAMILIAR VOICE cuts through the swirl of sound.

                    GANDALF (O.S.)
          You are in the House of Elrond, and it is
          ten o'clock in the morning on October the
          twenty-fourth, if you want to know.

INT. FRODO'S BEDROOM -- DAY

Frodo's eyes flicker Open He is lying in bed next to an Open
Window...Dappled sunlight plays on richly carved
timbers...the sound of a nearby waterfall drifts through the
Vista of Fir Trees.

                    FRODO
              (weak relief)
          Gandalf!

                                                           64.



ANGLE ON: GANDALF IS SITTING NEXT TO FRODO'S BED...

softly puffing on his pipe.    He smiles at Frodo.

                    GANDALF
          Yes, I'm here and you're lucky to be
          here, too. A few more hours and you
          would have been beyond our aid. You have
          some strength in you, my dear Hobbit.

Frodo sits up, looking at Gandalf questioningly...

                    FRODO
          What happened, Gandalf?    Why didn't you
          meet us?

                    GANDALF
          I'm sorry Frodo.

Close on: Gandalf... troubled.   His eyes drift away.

                    GANDALF (CONT'D)
          I was delayed.

                                                        CUT TO:

EXT. ORTHANC SUMMIT -- NIGHT

SARUMAN stands over Gandalf, gloating...

                    SARUMAN
          Get up! So much for the power of the
          Ring or embrace your own destruction!

With the power of his staff, Saruman raises Gandalf from the
ground, then sends him crashing to the floor.

                    GANDALF
          There is only one Lord of the Ring. Only
          one who can bend it to his will...and he
          does not share power.

SUDDENLY! GANDALF lurches to his feet and Throws himself off
the Tower! Saruman watches Gandalf fly away from
Isengard...on the Back of a GIANT EAGLE.

                    SARUMAN
              (chilling)
          So you have chosen death!

                                                        CUT TO:

                                                           65.



EXT. SKIES OVER MOUNTAINS--DAWN

Gwaihir the Eagle soars majestically over the mountains,
carrying Gandalf towards the dawn.

                                                        CUT TO:

INT. FRODO'S BEDROOM--RIVENDELL

Frodo raises himself up and looks at Gandalf.

                    FRODO
          Gandalf! What is it? Gandalf returns his
          attention to Frodo.

                    GANDALF
          Nothing, Frodo...

Sam runs to Frodo's bedside.   He is overjoyed to find Frodo
awake.

                     SAM
          Frodo!   Frodo!   Bless you, you're awake!!

                    GANDALF
          Sam has hardly left your side.

                    SAM
          We were worried about you--weren't we,
          Mr. Gandalf?

                    GANDALF
          By the skills of Lord Elrond, you're
          beginning to mend. ELROND, LORD OF THE
          HIGH ELVES, steps up to Frodo's

bedside...his face is neither old nor young, though in it is
written the memory of many things both glad and sorrowful.

                    ELROND
          Welcome to Rivendell, Frodo Baggins.
          Frodo sits up, looking at Elrond with
          awe.

                                                        CUT TO:

EXT. RIVENDELL VALLEY -- DAY

WIDE ON: RIVENDELL... a small cluster of elegant Elven
Buildings sitting in a Shangri-la like Valley below towering
cliffs and snow capped mountains.



                                                   (CONTINUED)

                                                            66.
CONTINUED:


                    ELROND (V.O.)
          You have found your way to the last
          homely house east of the sea. The elves
          of Imladris have dwelt within this valley
          for three thousand years through few of
          my kin now remain. Frodo looks out from
          his balcony.

                                                        CUT TO:

EXT. RIVENDELL GARDENS -- DAY

Frodo and Sam walk together. Suddenly, the voices of Merry
and Pippin can be heard as they bound up to Frodo and throw
their arms around him.

                     MERRY
          Frodo!   Frodo!

Sam looks past Frodo smiling... a bent figure sits alone on a
bench, in the Sun. Close on: Frodo turning, following Sam's
gaze...

                     FRODO
          Bilbo!

                                                        CUT TO:

EXT. RIVENDELL TERRACE -- DAY

Close on: BILBO BAGGINS! He breaks in to a broad grin as
Frodo rushes forward to embrace him. Bilbo has aged
significantly since we last saw him.

                    BILBO
          Hello, Frodo, my lad!

                     FRODO
          Bilbo!

LATER... Frodo is turning the neatly inscribed title page of
a red leather bound journal:

                    FRODO (CONT'D)
              (reading)
          "There and back again: A Hobbit's tale"
          by Bilbo Baggins.

Bilbo smiles Proudly. He is sitting with Frodo on a terrace
overlooking a Waterfall. Frodo looks at Page after page of
beautiful Handwriting, with intricate Maps and Drawings.



                                                    (CONTINUED)

                                                            67.
CONTINUED:


                    FRODO (CONT'D)
          This is wonderful.

                    BILBO
          I meant to go back...wander the paths of
          Mirkwood, visit Laketown, see the Lonely
          Mountain again...but age, it seems, has
          finally caught up with me.

Frodo turns a page...there before him, is a map of the Shire.

                    FRODO
              (quietly)
          I miss the Shire...I spent all my
          childhood pretending I was off somewhere
          else...off with you, on one of your
          adventures...
              (Looks at Bilbo)
          But my own adventure, turned out to be
          quite different...I'm not like you,
          Bilbo.

                    BILBO
          My dear boy...

                                                        CUT TO:

EXT. RIVENDELL TERRACE -- EVENING

Sam busily tries to stuff more and more things into his
already full pack...pots and pans, blankets, cooking
utensils, provisions, clothes.

                    SAM
          No, what have I forgotten? Pull back to
          reveal Frodo, hands in his pocket,
          watching Sam.

                    FRODO
          Packed already?

Sam looks up, startled.

                    SAM
              (slightly embarrassed)
          No harm in being prepared. Frodo strolls
          to the edge of the Balcony.

                    FRODO
          I thought you wanted to see the Elves,
          Sam?



                                                    (CONTINUED)

                                                           68.
CONTINUED:


                    SAM
          I do...

                    FRODO
          More than anything.

                    SAM
          I did. It's just...we did what Gandalf
          wanted, didn't we? We got the Ring this
          far, to Rivendell...and I thought...
          seeing as how you're on the mend, we'd be
          off soon. Off home.

                    FRODO
          You're right, Sam. Frodo looks at Sam...

                    FRODO (CONT'D)
          ...we did what we set out to do. Frodo
          opens his hand, the Ring sits in his
          Palm.

                    FRODO (CONT'D)
          The ring will be safe in Rivendell. I am
          ready to go home.

                                                       CUT TO:

EXT. ELROND'S CHAMBER, RIVENDELL -- DAY

Gandalf and Elrond watch Frodo and Sam from Elrond's balcony,

                    ELROND
          His strength returns.

                    GANDALF
          That wound will never fully heal. He will
          carry it the rest of his life.

                    ELROND
          And yet to have come so far still bearing
          the Ring...the hobbit has shown
          extraordinary resilience to its evil.

                    GANDALF
          It is a burden he should never have to
          had to bear. We can ask no more of Frodo.

                    ELROND
          Gandalf, the enemy is moving. Sauron's
          forces are massing in the east. His eye
          is fixed on Rivendell. And Saruman, you
          tell me, has betrayed us. Our list of
          allies grows thin.

                                                   (CONTINUED)

                                                          69.
CONTINUED:


                    GANDALF
          His treachery runs deeper than you know.
          By foul craft, Saruman has crossed Orc
          with Goblin Men...he is breeding an army
          in the caverns of Isengard. An army that
          can move in Sunlight and cover great
          distance at speed. Saruman is coming for
          the Ring.

Elrond turns and walks away...

                    ELROND
          This evil cannot be concealed by the
          power of the Elves...We do not have the
          strength to fight both Mordor and
          Isengard...Gandalf...the ring cannot stay
          here.

Gandalf turns and looks out the window.

Sounds of arrivals...Gandalf watches as Boromir rides through
Rivendell gate, followed by Legolas and Gimli.

                    ELROND (V.O.) (CONT'D)
          This peril belongs to all Middle earth.
          They must decide how to end it. Not just
          for themselves but for those who come
          after. Elrond approaches Gandalf.

                    ELROND (CONT'D)
          The time of the Elves is over. My people
          are leaving these shores. Who will you
          look to when we have gone? The dwarves?
          They hide in their mountains seeking
          riches. They care nothing for the
          troubles of others.

                    GANDALF
          It is in Men that we must place our hope.

                    ELROND
          Men? Men are weak.      The race of Men is
          failing. The blood     of Numenor is all but
          spent, its pride and    dignity forgotten.
          It is because of men    the Ring survives.

FLASH INSERT: With the broken sword, Isildur slices off
Sauron's finger. Elrond reacts.

                    ELROND (V.O.) (CONT'D)
          I was there, Gandalf...I was there three
          thousand years ago when Isildur took the
          ring.

                                                               70.



FLASH INSERT: ISILDUR PICKS UP THE RING AND STARES AT IT,

ENTRANCED.

                       ELROND
             I was there the day the strength of Men
             failed.

                                                           CUT TO:

INT. CRACK OF DOOM -- DAY

                       ELROND
             Isildur...hurry...follow me! IMAGES:
             ELROND leads Isildur into the steaming
             volcano.

                       ELROND (V.O.) (CONT'D)
             I let Isildur into the heart of Mount
             Doom, where the ring was forged: the one
             place it could be destroyed.

FLASH INSERT: ELROND AND ISILDUR STAND BEFORE THE FIRES OF

MT. DOOM.

                       ELROND
             Cast it into the fire...destroy it!

CLOSE ON: ISILDUR...CAPTIVATED BY THE RING.

                         ISILDUR
             No.

Isildur turns and walks away

                         ELROND
             Isildur!!

INT. ENROND'S CHAMBER, RIVERDELL -- DAY

Elrond turns to Gandalf.

                       ELROND
             It should have ended that day, but evil
             was allowed to endure. Isildur kept the
             Ring...and the line of Kings was broken.
             There's no strength left in the world of
             Men. They're scattered, divided,
             leaderless.




                                                       (CONTINUED)

                                                           71.
CONTINUED:


                    GANDALF
          There is one who could unite them, one
          who could re claim the thrown of Gondor.

                    ELROND
          He turned from that path a long time ago.
          He has chosen exile.

                                                       CUT TO:

INT. ELROND'S CHAMBER, RIVENDELL -- NIGHT

Strider watches from the shadows...as Boromir strolls through
the darkened gallery. Boromir's eyes are drawn to an old
Fresco on the wall...depicting Isildur defeating Sauron.
Boromir looks with Wonderment at Narsil, the Broken Blade of
Elendil, which lies on a cloth-covered plinth.

                    BOROMIR
              (quiet awe)
          The shards of Narsil...the blade that cut
          the Ring from Sauron's hand. Boromir
          picks up the sword and gently touches the
          Blade. Close on: a small bloom of blood
          appears on Boromir's finger...

                    BOROMIR (CONT'D)
          Still sharp.

Boromir senses Strider's presence...he looks from the blade
to Strider, as if sensing a connection.

                    BOROMIR (CONT'D)
          But no more than a broken heirloom.

                    BOROMIR (CONT'D)
          replaces the Broken blade, but it
          clatters to the floor. Boromir walks
          away, leaving Strider sitting alone.

Close on: Strider picks up the broken hilt, as Arwen appears
behind him.

                    ARWEN
          Why do you fear the past? You are
          Isildur's heir...not Isildur himself. You
          are not bound to his fate.

                    STRIDER
          The same blood flows in my veins...the
          same weakness...



                                                   (CONTINUED)

                                                            72.
CONTINUED:


                    ARWEN
          Your time will come. You will face the
          same evil...and you will defeat it.
              (Elvish: w/subtitles)
          A si i-duath u-orthor, Aragorn...u or le
          a u or nin. The shadow does not hold
          sway yet...not over you and not over me.

                                                       CUT TO:

EXT. RIVENDELL VALLEY -- NIGHT

Night falls upon the beautiful valley of Rivendell... still
and quiet.

EXT. RIVENDELL WATERFALL -- NIGHT

Strider and Arwen stand upon a stone bridge...the Evenstar at
Arwen's breast shines in the moonlight.

                    ARWEN
              (Elvish: with subtitles)
          Renech I lu I erui govannem?   Do you
          remember when we first met?

                    STRIDER
              (Elvish: with subtitles)
          Nauthannim I ned ol reniannen.   I thought
          I had strayed into a dream.

Arwen reaches up and gently touches the Grey at Strider's
temples.

                    ARWEN
              (Elvish: with subtitles)
          Gwenin in enniath...u-arnech in naeth I
          se celich. Long years have passed...you
          did not have the care you carry now.

Arwen looks into Strider's eyes.

                    ARWEN (CONT'D)
              (Elvish: with subtitles)
          Renech I Beth I pennen? Do you remember
          what I told you? Arwen reaches for
          Strider's hand...

                    STRIDER
              (quietly)
          You said you'd bind yourself to me,
          forsaking the immortal life of your
          people.


                                                  (CONTINUED)

                                                            73.
CONTINUED:


                    ARWEN
              (whisper)
          And to that I hold. I would rather share
          one lifetime with you than face all the
          ages of this world alone. Strider looks
          down. In his hand lies the Evenstar.

                    ARWEN (CONT'D)
          I choose a mortal live.

                    STRIDER
          You cannot give me this.

                    ARWEN
          It is mine to give to whom I will, like
          my heart.

Arwen closes Strider's fingers around the jewel.

Arwen leans towards Strider, gently kissing him.

                                                        CUT TO:

INT. COUNCIL CHAMBER, RIVENDELL -- DAY

Elrond addresses the council...

                    ELROND
          Strangers from distant lands ... friends
          of old. You have been summoned here to
          answer the threat of Mordor. Middle-earth
          stands upon the brink of destruction.
          None can escape it. You will unite...or
          you will fall. Each race is bound to this
          fate...this one doom...

Frodo sits amongst a council of free-peoples of Middle earth,
Elrond stands before them, addressing Gandalf, Strider,
Legolas, and 20 other elves, Dwarves, and men.

                    ELROND (CONT'D)
          Bring forth the ring, Frodo.

Frodo steps forward and moves towards a stone Plinth. He
places the ring on the plinth and returns to his seat.

                    BOROMIR
              (shocked)
          So it is true!

                    LEGOLAS
              (disbelief)
          Sauron's Ring! The ring of power!

                                                    (CONTINUED)

                                                            74.
CONTINUED:


                     GIMLI
              (grim)
          The doom of man!

                    BOROMIR
          It is a gift...a gift to the foes of
          Mordor! Why not use this Ring? Long has
          my father, the Steward of Gondor, held
          the forces of Mordor at bay...by the
          blood of our people are your lands kept
          safe. Give Gondor the weapon of the
          enemy...let us use it against him!

                    STRIDER
          You cannot wield it. None of us can.
          The one ring answers to Sauron alone...it
          has no other master. Boromir turns and
          looks at Strider, coolly.

                    BOROMIR
          And what would a ranger know of this
          matter?

Strider says nothing and Boromir turns away dismissively.
LEGOLAS stands...

                    LEGOLAS
          This is no mere Ranger. He is Aragorn,
          son of Arathorn. You owe him your
          allegiance.

Frodo looks at Strider questioningly...Boromir turns sharply.

                    BOROMIR
              (quiet disbelief)
          Aragorn? This is Isildur's heir?

                    LEGOLAS
          And heir to the throne of Gondor.

                    ARAGORN
              (Elvish: with subtitles)
          Havo dad, Legolas...Sit down, Legolas..

                    BOROMIR
          Gondor needs no king.

                    GANDALF
          Aragorn is right...we cannot use it.

                    ELROND
          You have only one choice..the ring must
          be destroyed.

                                                    (CONTINUED)

                                                            75.
CONTINUED: (2)


The HUM OF THE RING seems to grow louder in Frodo's ears.
Gimli suddenly stands, excited.

                    GIMLI
          Then...what are we waiting for?

Gimli suddenly rushes forward! He swings his axe down on the
ring. The axe shatters with a deafening crack! Gimli falls
backwards, staring in disbelief at the ring...unharmed! Frodo
winces as an angry image of the fiery eye hits him! He slumps
in this chair, clutching his forehead. Gandalf looks at him
with concern.

                    ELROND
          The ring cannot be destroyed, Gimli, son
          of Gloin, by any craft that we

                    ELROND (CONT'D)
          here possess. The ring was made in the
          fires of Mount Doom...only there can it
          be unmade. It must be taken deep into
          Mordor, and cast back into the fiery
          chasm from whence it came. One of you
          must do this.

Stunned silence...the council sits with downcast eyes, as if
a great dread has descended on them. Boromir addresses the
council in a quiet voice

                    BOROMIR
          One does not simply walk into Mordor. Its
          black gates are guarded by more than just
          Orcs. There is evil there that does not
          sleep and the Great Eye is ever watchful.
          It is a barren wasteland, riddled with
          fire and ash and dust...the very air you
          breathe is a poisonous fume. Not with
          ten thousand men could you do this. It
          is folly.

                    LEGOLAS
          Have you heard nothing Lord Elrond has
          said? The ring must be destroyed.

                    GIMLI
          And I suppose you think you're the one to
          do it?

                    BOROMIR
          And if we fail, what then? What happens
          when Sauron takes back what is his?

Gimli leaps to his feet!

                                                    (CONTINUED)

                                                              76.
CONTINUED: (3)


                    GIMLI
          I will be dead before I see the Ring in
          the hands of an Elf! A STORM OF ARGUMENT
          erupts around the room. CLOSE ON:
          FRODO...sound disappears as he watches in
          slow

motion...the angry faces, the shaking fists, the accusatory
fingers, his eyes move across to the ring...the hum grows
louder in his head.

                    GIMLI (CONT'D)
              (shouting)
          Never trust an Elf!

CLOSE ON: THE RING fills the screen...streams of blood flow
across the surface... flames flicker within the Gold Band.

                    GANDALF
          Do you not understand? While we    bicker
          among ourselves, Sauron's power   grows!
          No one will escape it. You will   all be
          destroyed, your homes burnt and   your
          families put to the sword!

CLOSE ON: FRODO...breathing rapidly, Caught in the grip of
his hideous vision. With a huge effort or will, Frodo tears
his gaze upon the ring. Frodo suddenly stands...he speaks in
a strong, clear voice.

                    FRODO
          I will take it...I will take it...I will
          take the Ring to Mordor.

Sudden silence...Frodo looks around the room at the astounded
faces.

                    FRODO (CONT'D)
              (quietly)
          Though...I do not know the way. Gandalf
          rises to his feet.

                    GANDALF
          I will help you bear this burden, Frodo
          Baggins, as long as it is yours to bear.

                    ARAGORN
          If, by my life or death, I can protect
          you, I will.
              (kneels before Frodo)
          ...you have my sword. Aragorn steps
          forward...followed by Legolas and Gimli.


                                                      (CONTINUED)

                                                          77.
CONTINUED: (4)


                    LEGOLAS
          And you have my bow.

                    GIMLI
          And my axe.

Boromir looks at them all then walks towards Frodo.

                    BOROMIR
          You carry the fate of us all, little one.

Boromir looks towards Elrond and Gandalf.

                    BOROMIR (CONT'D)
          If this is indeed the will of the
          Council, then Gondor will see it done.

Frodo stares in wonder as the Greatest Fighters in all Middle
earth stand at his side.

                    SAM
              (unseen)
          Here!

A Sudden Noise...Sam pops up from behind a Bush!

                    SAM (CONT'D)
          Mr. Frodo's not gong anywhere without me.

                    ELROND
          No, Indeed...it is hardly possible to
          separate you...even when he is summoned
          to a secret council and you are not.

Merry and Pippin jump up from behind another bush!

                    MERRY
          Oi! We're coming too! You'll have to
          send us home tied up in a sack to stop
          us.

                    PIPPIN
          Anyway...you need people of intelligence
          on this sort of
          mission...quest...thing...

                    MERRY
          Well, that rules you out, Pip.

                                                             78.



ELROND SURVEYS THE GROUP

                    ELROND
              (thoughtfully)
          Nine companions ... so be it.
              (announcing)
          You shall be the "Fellowship of the ring"

                     PIPPIN
          Great.   Where are we going?

                                                       CUT TO:

INT. FRODO'S BEDROOM, RIVERDELL---DAWN

Close on: An old sword sliding out of a shabby leather
Scabbard...its polished, well tendered Blade glitters cold
and bright.

                    BILBO
          My old sword "Sting"...here, take it!

Bilbo offers Sting to Frodo.

                    FRODO
          It's so light!

                    BILBO
          Yes, yes, made by the Elves, you know.
          The blade glows blue when Orcs are
          close...and it's times like that, my lad,
          when you have to be extra careful.

Bilbo unwraps a small shirt of close woven Mail.

                    BILBO (CONT'D)
          Here's a pretty thing. Mithril, as light
          as a feather, and as hard as dragon
          scales. Let me see you put it on. Come
          on.

CLOSE ON: Frodo peels off his shirt... revealing The Ring on
the Chain around his neck.

                    BILBO (CONT'D)
              (entranced)
          Oh! My old Ring... Frodo frowns as Bilbo
          moves toward him.

                    BILBO (CONT'D)
          I should very much like to hold it again,
          one last time. Bilbo reaches forward,
          eyes locked on the ring.

                                                   (CONTINUED)

                                                             79.
CONTINUED:


Suddenly! A shadow passes across Bilbo...for a split second
he becomes a wrinkled creature with a hungry face and Bony,
groping hands. Frodo pulls away, shocked...the shadow passes.
Bilbo slumps into a chair, his head in his hands. Bilbo
falters...his eyes filling with tears.

                    BILBO (CONT'D)
          Oh!

                    BILBO (CONT'D)
              (sad)
          I'm sorry, that I brought this upon you,
          my boy...I'm sorry that you must carry
          this burden. I'm sorry for everything.

Bilbo sobs and Frodo moves to comfort him.

                                                        CUT TO:

EXT. RIVENDELL VALLEY -- MORNING

                                                      ANGLE ON:

The Fellowship climb the long steep path out of the cloven
vale of Rivendell.

                                                        CUT TO:

EXT. ROUGH COUNTRY, SOUTH OF RIVENDELL -- DAY

                                                      ANGLE ON:

The fellowship trekking through a land of Deep Valleys and
turbulent waters...the misty mountains rise sharply to their
left.

                    GANDALF (V.O.)
          We must hold to his course west of the
          misty Mountains for forty days. If our
          luck holds, the Gap of Rohan will still
          be open to us. From there, our road
          turns east, to Mordor.

                                                        CUT TO:

EXT. EREGION HILLS--DAWN

CLOSE ON: Sam at the campfire. The sound of clashing swords!
Wider: Aragorn and Boromir are giving Pippin Sword tuition...




                                                    (CONTINUED)

                                                            80.
CONTINUED:


                    BOROMIR
          Get away from the blade, Pippin...on your
          toes...good, very good...I want you to
          react, not think.

                    SAM
          Should not be too hard...

                    BOROMIR
          Move your feet.

                    MERRY
          Quite good, Pippin.

                    PIPPIN
          Thanks.

CLOSE ON: GIMLI has managed to corner Gandalf....

                    GIMLI
          If anyone were to ask for my opinion,
          which I note they have not, I would say
          we are taking the long way round.
          Gandalf, we can pass through the Mines of
          Moria. My cousin, Balin, would give us a
          royal welcome. Gandalf clearly thinks
          that is a bad idea.

                    GANDALF
          No, Gimli. I would not take the road
          through Moria unless I had no other
          choice.

Boromir thrusts, catching Pippin on the hand. Pippin throws
down his sword, kicks and lunges at Boromir, tackling him to
the ground. Much laughter. Legolas' eyes are fixed on a
distant Dark Patch which darts about the sky, like flying
smoke in the wind.

                    SAM
          What is that?

                    GIMLI
          Nothing...it's just a wisp of a cloud.

                    BOROMIR
              (worried)
          It's moving fast...against the wind.

                    LEGOLAS
          Crebain from Dunland!



                                                    (CONTINUED)

                                                              81.
CONTINUED: (2)


                    ARAGORN
              (urgently)
          Hide!

                    BOROMIR
          Merry..Pippin...Sam...take cover! WIDE
          ON: THE FELLOWSHIP scramble under what
          little cover

there is...as a regiment of Large crows fly low overhead at
Great speed, wheeling and circling above. As their dark
shadow passes over the fellowship, a single harsh croak is
heard...and the crows suddenly wheel away, back towards the
south. Gandalf staggers to his feet.

                    GANDALF
              (worried)
          Spies of Saruman.    The passage South is
          being watched.

Gandalf looks at Aragorn, turns to the others...gesturing
towards a high mountain pass.

                    GANDALF (CONT'D)
          We must take the pass of Caradhras!

                                                          CUT TO:

EXT. SNOWY MOUNTAINSIDE -- DAY

                                                        ANGLE ON:

The Fellowship clamber through Rock and Snow. CLOSE ON: Frodo
slips on some shale...as he scrambles to his feet, the Ring
falls on the ground... CLOSE ON: the ring gleaming in the
snow! Boromir's Hand picks it up by the chain...he stands,
the ring dangling before his eyes. He seems to grow in
stature, as if absorbing its power. Aragorn warily approaches
Boromir...Boromir is motionless...he stares at the ring, as
if transfixed.

                     ARAGORN
          Boromir?

                    BOROMIR
          It is a strange fate that we should
          suffer so much fear and doubt over so
          small a thing...such a little thing.

                    ARAGORN
              (quietly)
          Boromir...give the ring to Frodo.
          ARAGORN'S HAND moves to his sword hilt.

                                                      (CONTINUED)

                                                            82.
CONTINUED:


Ring's POV...looking up at Boromir's face. The strange hum
vibrates on the soundtrack. CLOSE ON: a Weird beatific smile
lights up Boromir's face...The HUM grows to a Deafening roar!
Boromir suddenly snaps out of his trance and hands the ring
back to Frodo.

                    BOROMIR
              (lightly)
          As you wish. I care not.

Boromir smiles at Frodo, ruffling his hair. CLOSE ON: ARAGON
unhands his sword.

                                                        CUT TO:

EXT. ISENGARD -- DAY

Following the crows as they race deeper and deeper, passing a
vista of Industry, Hundreds of Orcs and writhing
Birthsacks...flying past Saruman, who stands upon a wooden
Gantry. CLOSE ON: Saruman, listening to the Cries of the
crows.

                    SARUMAN
          So, Gandalf...you try to lead them over
          Caradhras. And if that fails...where
          then will you go? THE FELLOWSHIP
          struggles through the snow.

                    SARUMAN (V.O.) (CONT'D)
          If the mountain defeats you, will you
          risk a more dangerous road?

                                                        CUT TO:

EXT. PASS OF CARADHRAS -- DAY

THE FELLOWSHIP are struggling through a blinding blizzard, up
towards the PASS OF CARADHRAS. Legolas the Elf moves lightly
across the top of the snow...he suddenly pauses. Saruman's
voice sweeps by in the wind.

                    LEGOLAS
              (urgent)
          There is a fell voice in the air.

                    GANDALF
          It's Saruman.

THUNDER RUMBLES...ROCK and Shale fall from above.




                                                    (CONTINUED)

                                                            83.
CONTINUED:


                    ARAGORN
              (urgently)
          He's trying to bring down the mountain.
          Gandalf! We must turn back!

                       GANDALF
          No!

GANDALF RAISES HIS STAFF...HE CHANTS INTO THE WIND.

                    GANDALF
              (YELLING)
          Losto Caradhras, sedho, hodo, nuitho I
          ruith. Sleep Caradhras, be still, lie
          still, hold your wrath.

                                                        CUT TO:

EXT. ISENGARD -- DAY

CAMERA SWEEPS PAST SARUMAN...he stands on the summit of
Orthanc, Chanting. CLOUDS ARE FLOWING FROM ALL DIRECTIONS...
converging on the distant mountains in a stormy Malestrom.

EXT. PASS OF CARADHRAS -- DAY

Saruman's voice strengthens...rolling past the fellowship
like thunder. A LIGHTNING CRACK explodes on the mountainside
above them. Frodo looks up in horror as a huge snow avalanche
thunders down towards them! The Fellowship throw themselves
against the cliff face as snow crashes onto the narrow ledge.
LEGOLAS pulls Gandalf to safety. Aragorn shields Frodo and
Sam as snow piles around them. Within moments, the pass is
blocked and the fellowship are enveloped in snow. Boromir
and Aragorn frantically dig for the hobbits...who are pulled
out Shivering and Fearful.

                    BOROMIR
              (urgent)
          We must get off the mountain! Make for
          the gap of Rohan and take the West road
          to my city.

                    ARAGORN
          The Gap of Rohan takes us too close to
          Isengard.

                    GIMLI
          We cannot pass over the mountain. Let us
          go under it. Let us go through the mines
          of Moria. Gandalf has a concerned look on
          his face.


                                                    (CONTINUED)

                                                             84.
CONTINUED:


                    SARUMAN (V.O.)
          Moria. You fear to go into those mines,
          don't you? The dwarves delved too
          greedily and too deep.

                    SARUMAN (V.O.) (CONT'D)
          You know what they awoke in, the darkness
          of Khazad-dum. Shadow and flame.

                    GANDALF
          Let the ringbearer decide.

CLOSE ON: FRODO, the weight of the decision weighing heavily
upon him. CLOSE ON: MERRY and PIPPIN shivering in Boromir's
arms.

                      GANDALF (CONT'D)
          Frodo?

Frodo meets Gandalf's eye.

                    FRODO
          We will go through the mines. Gandalf
          slowly nods.

                      GANDALF
          So be it.

                                                         CUT TO:

EXT. MORIA GATE -- NIGHT

The Fellowship are walking along the far shore of dark
lake...directly below great looming cliffs.

                    GIMLI
              (in awe)
          The walls of Moria!

Footing is treacherous on the narrow strip of green and
greasy stones. Gandalf touches the smooth rock wall between
the trees... slowly, faint lines appear like slender veins of
luminous silver running through the stone.

                     GANDALF
          Itidin...it mirrors only starlight and
          moonlight.

A large moon rises over the mountains... The lines grow
Broader and Clearer, forming a glowing arch of interlacing
ancient letters and symbols.



                                                   (CONTINUED)

                                                            85.
CONTINUED:


                    GANDALF (CONT'D)
          It reads, "The door of Durin, Lord of
          Moria. Speak, friend, and enter."

                    MERRY
          What do you suppose that means?

                    GANDALF
              (confident)
          It's quite simple. If you are a friend,
          speak the password and the doors will
          open.

Gandalf raises his arms...

                    GANDALF (CONT'D)
              (incanting)
          Annon edhellen, edro hi ammen!

The cliff towers into the night, the wind blows cold, Frodo
shivers... and the door stands fast!

                                                         LATER:

GANDALF CONTINUES...

Mumbling spells in his efforts to open the door. Sam packs
pots and pans at his feet...watching sadly as Aragorn un-
saddles Bill the pony. CLOSE ON: ARAGORN whispering to Bill
the Pony.

                    ARAGORN
              (whispering)
          Mines are no place for a Pony, even one
          so brave as Bill.

                       SAM
          Bye, Bill.

                    ARAGORN
          Go on, Bill, go on..don't worry, Sam...he
          knows his way home. Aragorn slaps Bill on
          the rump...Bill goes trotting off. CLOSE
          ON: Sam watching Bill disappear into the
          darkness.

                    SAM
          Goodbye, Bill.

SPLASH! Merry and Pippin are tossing stones into the lake.
Black Rippling rings slowly fan out. Pippin is about to
throw another stone, but Aragorn grabs his arm.


                                                    (CONTINUED)

                                                             86.
CONTINUED:


                    ARAGORN
              (ominous)
          Do not disturb the water.

Aragorn watches anxiously as the Ripples appear to grow....he
exchanges a look with Boromir.

Aragorn's hand creeps towards his sword. Gandalf gives up in
despair...he sits down beside Frodo. Close on: Frodo peers at
the Elvish inscription...his face breaks into a smile of
comprehension.

                    FRODO
              (quietly)
          It's a riddle...

Gandalf raises his eyebrows...

                    FRODO (CONT'D)
              (explaining)
          Speak, friend, and enter.   What's the
          Elvish for friend?

                    GANDALF
          Oh...mellon.

With that, the rock face silently divides in the middle and
two great Doors swing outwards... revealing a blackness
deeper than the night. As the Fellowship enter the Blackness,
something in the water stirs....

INT. MORIA GATE -- NIGHT

The Fellowship step warily into the darkness of Moria...a
Dank cavern, with winding steps leading deeper into the
mountain.

                    GIMLI
          So, master elf, you will enjoy the fabled
          hospitality of the dwarves; roaring
          fires, malt beer, red meat off the bone.
          This, my friend, is the home of my
          cousin, Balin...and they call this a
          Mine...
              (snorting)
          A mine!

A Glow from Gandalf's Staff suddenly lights    the chamber...
The Fellowship recoil in Horror! Many dwarf    Skeletons are
strewn about, clearly the dead of some old    battle...the
rusting armor and shields are peppered with    arrows and axes.



                                                    (CONTINUED)

                                                           87.
CONTINUED:


                    BOROMIR
              (grimly)
          This is no mine...it's a tomb!

                    GIMLI
              (in horror)
          Oh...no...no..no... ! Legolas pulls a
          crude arrow out of a skeleton.

                     LEGOLAS
          Goblins!

The Fellowship draw swords and back away, towards the
Entrance.

                    BOROMIR
          We make for the Gap of Rohan.    We should
          never have come here.

EXT. MORIA GATE -- NIGHT

Frodo is suddenly PULLED TO THE GROUND. A long sinuous
Tentacle is wrapped around Frodo's ankle and is dragging him
towards the lake. FRODO CRIES OUT as Aragorn and Boromir rush
forward! Aragorn severs the Tentacle holding Frodo, and pulls
him to safety...Boromir hacks at the other Writhing Limbs. 20
more tentacles ripple out of the Lake! The dark water Boils
as the hideous beast lashes out at the FELLOWSHIP! Again the
creature grabs Frodo and pulls him to the lake, Frodo is
flung in the air as the Fellowship battle the creature.
Aragorn hacks at a tentacle...Frodo is released, falling into
Boromir's arms.

                    GANDALF
          Into the mines!

                     BOROMIR
          Legolas!

Legolas shoots an Arrow into the creature's head, gaining a
few vital seconds for Aragorn and Boromir as they race out of
the water with Frodo. The FELLOWSHIP hurriedly back away from
the Creature... retreating into the Moria Chamber as many
Coiling arms seize the large doors.

INT. MORIA GATE -- NIGHT

With a shattering echo, the creature rips the doors away,
creating a rock slide that crashes down the Cliff Face.
Within seconds, tons of rock seal the doorway... throwing the
Fellowship into Pitch Blackness.



                                                   (CONTINUED)

                                                             88.
CONTINUED:


A faint light rises from Gandalf's staff, throwing a Creepy
Glow across the old wizards face.

                    GANDALF
              (ominous)
          We now have but one choice...we must face
          the long dark of Moria. Be on your
          guard...there are older and fouler things
          than the Orcs in the deep places of the
          world.

                                                      CUT TO:

INT. NEW CHAMBER, MORIA -- NIGHT

WIDE ON: the Fellowship crossing a precarious bridge above
deep mine workings.

                    GANDALF
          Quietly, now. It's a four day journey to
          the other side. Let us hope that our
          presence will go unnoticed.

INT. MORIA CEMETERY CAVERN -- NIGHT

They continue up a steep stair, passing through a dwarf
cemetery. The graves are despoiled...dwarf skeletons are
strewn about and Goblin Graffiti is scrawled on monuments in
dried Dwarf blood. The Atmosphere is very sinister.

                                                      CUT TO:

INT. MORIA TUNNEL FORK -- NIGHT

The path splits into three passages...each disappearing into
dark tunnels. Gandalf pauses, frowning.

                    GANDALF
          I have no memory of this place.

LATER... The Fellowship are nervously waiting...while Gandalf
sits, staring intently at the 3 tunnel mouths in front of
him. He appears to be in some kind of trance.

CLOSE ON: FRODO

He turns at the sound of a faint noise down the tunnel behind
them.

                    PIPPIN
          Are we lost?



                                                 (CONTINUED)

                                                             89.
CONTINUED:


                    MERRY
          No. I don't think we are.   Shhhh,
          Gandalf's thinking.

                    PIPPIN
          Merry!

                    MERRY
          What?

                    PIPPIN
          I'm hungry.

Frodo's POV: a sudden glimpse of a creature darting in the
darkness. Frodo is nervous...he approaches Gandalf.

                    FRO DO
              (whispers)
          There's something down there.

                    GANDALF
              (quietly)
          It's Gollum.

                    FRODO
          Gollum!

                    GANDALF
          He's been following us for three days.

TEASING SHOT: and emaciated, leering creature.

                    FRODO
              (disbelieving)
          He escaped the dungeons of Barad- dur?

                    GANDALF
          Escaped...or was set loose. And now the
          Ring has drawn him here...he will never
          be rid of his need for it. He hates and
          loves the ring, as he hates and loves
          himself. Smeagol's life is a sad story.
          Gandalf catches Frodo's look of surprise.

                    GANDALF (CONT'D)
          Yes...Smeagol he was once called...Before
          the ring came to him, before it drove him
          mad.

Gollum's withered fingers are gripping the cave wall...he is
large, Luminous eyes blinking with malice.



                                                   (CONTINUED)

                                                     90.
CONTINUED: (2)


                    FRODO
             (grim)
         It's a pity Bilbo didn't kill him when he
         had the chance.

                   GANDALF
         Pity? It was pity that stayed Bilbo's
         hand. Many that live deserve death, and
         some that die deserve life. Can you give
         it to them, Frodo? Frodo frowns.

                   GANDALF (CONT'D)
         Do not be too eager to deal out death in
         judgment...even the very wise cannot see
         all ends. My heart tells me that Gollum
         has some part to play yet, for good or
         ill, before this is over. The pity of
         Bilbo may rule the fate of many.

                   FRODO
         I wish the ring had never come to me...I
         wish none of this had happened.

                   GANDALF
         So do all who live to see such times, but
         that is not for them to decide. All we
         have to decide is what to do with the
         time that is given to us. There is a note
         of finality in Gandalf's voice.

                   GANDALF (CONT'D)
         There are other forces at work in this
         world, Frodo, besides the will of evil.
         Bilbo was meant to find the ring. In
         which case, you also were meant to have
         it...and that is an encouraging thought,
             (sudden brightness)
         Ah! That it's that way! Gandalf points
         at the right hand tunnel...the Fellowship
         scramble to their feet.

                   MERRY
             (relieved)
         He's remembered!

                   GANDALF
         No, but the air doesn't smell so foul
         down there. If in doubt, Meriadoc,
         always follow your nose!
             (laughs)
         Ye s...

                                                               91.



INT. DWAROWDELF CHAMBER, MORIA -- DAY

The Fellowship pass under an arched doorway into a black and
empty space. Gandalf pauses...

                    GALADRIEL
          Let me risk a little more light. Gandalf
          taps his staff...for a brief moment a
          light

blazes... like a silent Flash of Lightning.    Great shadows
spring up and flee...

                    GANDALF
          Behold! The great realm and Dwarf city
          of Dwarrowdelf! Frodo gasps at the brief
          sight of a vast roof, far above

their heads, upheld by many mighty pillars hewn of stone.
Before them stretches a huge empty hall, with black walls,
polished and smooth as glass.

                    SAM
          Well, there's an eye opener and no
          mistake!

Ahead of them, a wooden door has been smashed. Black arrows
are embedded in the timbers. Two goblin skeletons lie in the
doorway. Gimli rushes ahead...

                    GANDALF
          Gimli!!

                                                        CUT TO:

INT. BALIN'S TOMB, MORIA -- DAY

Gimli rushes into another vast empty chamber... lit with a
narrow shaft of sunlight, beaming in from a small hole near
the roof. Dwarf and Goblin skeletons are piled high. In the
far corner sits a stone walled Well. A shaft of light falls
directly onto a stone table in the middle of the room: a
single oblong block, about 4 feet high, topped with a great
slab of white stone. Gimli falls to his knees...

                    GIMLI
          No...no...oh, no!

Gimli sobs.

Gandalf quietly reads an inscription of runes, carved onto
the white stone slab.


                                                   (CONTINUED)

                                                             92.
CONTINUED:


                      GANDALF
            "Here lies Balin, son of Fudin, Lord of
            Moria." He is dead, then. It's as I had
            feared.

Gandalf carefully lifts the rotting remains of a book from
the white stone slab. It has been slashed and stabbed...and
appears to be covered in Dried Blood. The pages crack and
break as he opens it...

                      LEGOLAS
                (urgent whisper to Argorn)
            We must move on, we cannot linger.

                      GANDALF
                (reading)
            "They have taken the Bridge and the
            second hall: we have barred the
            gates...but cannot hold them for
            long...the ground shakes...drums in the
            deep...we cannot get out. A shadow moves
            in the dark. Will no- one save us? They
            are coming."

Unnerved, Pippin backs away nervously...He stumbles against
the well, sending a precariously balanced Armored skeleton
tumbling in! Merry reaches out, Grabbing hold of Pippin
before he falls. The Fellowship freeze in stunned silence as
the armored skeleton clatters down the deep well...echoing
loudly!

INT. MORIA CAVERNS -- DAY

Gandalf turns angrily on Pippin.

                      GANDALF
                (angry)
            Fool of a Took! Throw yourself in next
            time and rid us of your stupidity!

ANGLE ON:    PIPPIN, CHASTENED.

They fall silent. A low rolling boom rises from the depths
below...growing louder...BOOM...BOOM...as if the caverns of
Moria were turned into a vast drum. A great horn blasts
nearby...Answering horns ... running feet...harsh cries...
Sam's eyes glance at Frodo's belt...

                       SAM
                (worried)
            Mr. Frodo!



                                                     (CONTINUED)

                                                            93.
CONTINUED:


Frodo looks down. A cold blue glow is emanating from Sting's
Scabbard! Frodo draws the Sword...and stares at its glowing
blade!

                     LEGOLAS
          Orcs !

                    ARAGORN
              (to the hobbits)
          Get back! Stay close to Gandalf.

Aragorn and Boromir slam and wedge the doors. Boromir
catches sight of something; he turns to Aragorn with shock in
his eyes.

                    BOROMIR
          They have a cave troll!

Gimli snatches up two rusty dwarf axes and leaps onto the
tomb.

                    GIMLI
              (yelling)
          Let them come! There is one Dwarf yet in
          Moria who still draws breath!

BOOM! The Door bursts open in a shower of wood fragments,
and 20 Goblins charge into the tomb, followed by a huge cave
troll! Gimli ducks a blow and immediately buries his Axes in
2 Goblin helmets. Aragorn and Boromir wade into the mass of
Goblins with their swords. Legolas fires deadly arrows into
Goblin throats, desperately trying to Shield the Hobbits!
Gandalf is clutching his sword and joins in the battle! The
cave troll is sweeping his club at Aragorn...who stumbles
backwards...the huge club descends for the killing
blow...suddenly, in a flash of steel, Boromir's long sword
slices into the Scaly arm of the troll; it rears back,
spewing green blood! Sam is backing up against a wall...a
sword in one hand, a saucepan in the other. In desperation
he swings wildly at a Goblin with a saucepan! It keels
over...Sam looks surprised. He wallops another Goblin and it
too, drops.

                    SAM
          I think I'm getting the hang of this.

The Cave Troll lunges forward, thrusting at Frodo's chest
with his spear.

                     FRODO
          Aragorn!   Aragorn!



                                                  (CONTINUED)

                                                            94.
CONTINUED: (2)


Sam screams as Frodo is lifted off his feet by the spear tip
and slammed against the wall.

                    ARAGORN
              (shocked yell)
          Frodo!!

The hobbits go crazy. Sam slashes at the cave troll's knee,
bringing him down...Merry and Pippin jump on him...Legolas
fires an arrow...and the cave troll topples, dead. Aragorn
rushes to Frodo's side as he slumps to the floor...Frodo
appears to be dead. Close on: Gandalf, Aragorn, Hobbits
looking horrified... Suddenly Frodo coughs...takes a huge
breath.

                    SAM
          He's alive!

                    FRODO
          I'm alright. I'm not hurt.

                    ARAGORN
          You should be dead. That spear would've
          skewered a wild boar!

                    GANDALF
          I think there's more to this hobbit than
          meets the eye.

Frodo open his shirt to reveal the Mithril Vest.   The Troll
Spear did not pierce the mithril."

                    GIMLI
          Mithril! You are full of surprises,
          Master Baggins.

BOOM. BOOM. BOOM     the sound of the drums rings out again!
Gandalf turns to the others.

                    GANDALF
          To the bridge of Khazad-dum!

                                                         CUT TO:

INT. DWAROWDELF CHAMBER, MORIA -- DAY

Gandalf leads the fellowship into the huge Dwarrowdelf
Chamber.

                      GANDALF
          This way!



                                                   (CONTINUED)

                                                            95.
CONTINUED:


They hurry towards a distant door...as Goblins start
scuttling down the Pillars behind them, like cockroaches!
Frodo looks with horror at the overwhelming Goblin army
that's rushing toward them! SUDDENLY! A deafening roar fills
the air! A fiery light dances down the hallway... the
pillars casting eerie shadows. The Goblins freeze. They back
Fearfully away from the approaching beast...melting into the
darkness.

                    BOROMIR
          What is this new devilry?

A HUGE SHADOW, surrounded by flame, falls across the
hall..the ground shakes...an unearthly sound rumbles...

                    GANDALF
              (quietly)
          A Balrog..a demon of the ancient world!
          This foe is beyond any of you!
              (urgent yell)
          Run! Quickly!

                                                        CUT TO:

INT. STAIRWAY OF KHASAD-DUM, MORIA -- DAY

The BALROG, a massive creature rises from a chasm, a great
40 foot man-beast, with a mane of flames! In one hand is a
blade...like a stabbing tongue of fire; in the other, a WHIP
of many thongs. Aragorn leads the fellowship to the top of a
dizzying stairway...Gandalf follows, leaning heavily on his
staff. Close on: Aragorn looks at Gandalf, concerned.

                    GANDALF
          Lead them on, Aragorn.   The bridge is
          near.

Aragorn hesitates...Gandalf looks at him.

                    GANDALF (CONT'D)
          Do as I say; swords are no more use here.

THE FELLOWSHIP race down the stairway, Aragorn picks up
Frodo..leaping across a gaping chasm. A NARROW BRIDGE,
spanning a bottomless pit...Gandalf yells to the others:
Aragorn makes to throw Gimli across the Chasm.

                    GIMLI
          Nobody tosses a dwarf! The BALROG smashes
          through the wall and spreads its vast
          wings.
                    (MORE)


                                                    (CONTINUED)

                                                            96.
CONTINUED:
                    GIMLI (CONT'D)
          It swoops down past the Fellowship,
          disappearing into a flaming pit!

                                                        CUT TO:

INT. BRIDGE OF KHAZAD-DUM, MORIA -- DAY

The Fellowship run into a hall...the floor is split with
fissures that spit flame.

                    GANDALF
              (yelling)
          Over the bridge! Fly!

They race towards the slender bridge of stone...without kerb
or rail...at the far end of the hall. The Fellowship
recklessly hurry over the dizzying bridge..but Gandalf... the
last..pauses in the middle of the span...he faces the
Balrog...staff in one hand...Sword in the other! Frodo looks
back in horror:

                    GANDALF (CONT'D)
          You cannot pass!

                    FRODO
              (alarmed yell)
          Gandalf!

                    GANDALF
              (yelling)
          I am a servant of the Secret Fire,
          wielder of the flame of Anor. The dark
          fire will not avail you, flame of Udun.

Frodo watches as the Balrog puts one foot on the bridge and
draws up to Full Height, wings spreading from wall-to-wall.
Gandalf is a tiny figure, balanced precariously on the narrow
bridge.

                    GANDALF (CONT'D)
          Go back to the shadow! The BALROG slashes
          at Gandalf with its Sword of

flame...Gandalf blocks with his sword...a ringing clash and
the Balrog's sword shatters into molten fragments!

                    GANDALF (CONT'D)
              (booming)
          You shall not pass!! The Balrog places
          one foot onto the bridge. Aragorn and
          Boromir race forward, swords drawn.

GANDALF CRIES ALOUD as he summons up his LAST RESERVES OF
STRENGTH!

                                                    (CONTINUED)

                                                          97.
CONTINUED:

He thumps the bridge with his staff...a blinding sheet of
white flame springs up... the staff shatters...the bridge
breaks... right at Balrog's feet. The stone bridge drops away
into the gulf...from under the Balrog. For a moment, the
great Beast remains poised in the air...then it plunges down:
in slow motion Relief floods Frodo's face..Gandalf remains
trembling on the lip of the broken bridge. Slow motion: As
the Balrog falls, he lashes out with his whip of fire... Slow
motion: The thongs of the whip lash and curl around Gandalf's
knees, dragging him over the brink! Gandalf just manages to
hand on by his fingertips

                    FRODO
              (screaming)
          Gandalf!

                    GANDALF
              (fierce)
          Fly, you fools!

CLOSE ON: Gandalf lets go his grip and falls away...
following the Balrog into the bottomless Abyss! Frodo cries
out! Boromir scoops him up and carries him away.

                     FRODO
          No!

                     ARAGORN
          Gandalf!

They rush towards an archway.

                                                      CUT TO:

EXT. DIMROLL DALE DOOR -- DAY

The Fellowship tumble out of the Great Eastern Gate on to a
grassy sunlit hillside. Sam, Merry, and Pippin fall slowly to
the ground, Sobbing...Aragorn turns to Legolas and Gimli.

                    ARAGORN
              (urgent)
          Legolas, get them up!

                    BOROMIR
          Give them a moment...for pity's sake!

                    ARAGORN
          By nightfall these hills will be swarming
          with Orcs! We must reach the woods of
          Lothlorien. Come, Boromir, Legolas,
          Gimli, get them up. On your feet, Sam.
                    (MORE)


                                                  (CONTINUED)

                                                             98.
CONTINUED:
                     ARAGORN (CONT'D)
          Boromir glances towards Frodo, then back
          at Aragorn. Frodo is walking away, as if
          in a daze.

                     ARAGORN (CONT'D)
          Frodo?   Frodo!

CLOSE ON: FRODO SLOWLY TURNS...a look of numb shock on his
devastated face. The Fellowship marches on.

                                                        CUT TO:

EXT. DIMRILL DALE HILLSIDE--DUSK

Aragorn scours ahead of the company, as they stumble on in
the fading light...in the distance the shimmer of a large
forest can be seen...Lothlorien!

EXT. EDGE OF LOTHLORIEN--DUSK

WIDE ON: The fellowship run across a forest floor strewn with
yellow flowers..above is a roof of golden leaves, held up by
silver pillars...the trunks of huge, grey trees. Gimli looks
nervously around...

                    GIMLI
          Stay close, young hobbits..they say a
          Sorceress lives in these woods. An elf-
          witch of terrible power. All who look
          upon her fall under her spell...

Frodo hesitates...a STRANGE VOICE whispers in his head...

                       GALADRIEL (V.O.)
          Frodo...

                    GIMLI
          And are never seen again!

                    GALADRIEL (V.O.)
          ...your coming to us is as the footsteps
          of doom. You bring great evil here,
          Ringbearer.

                       SAM
          Mr. Frodo?

                    GIMLI
          Well, here's one dwarf she won't ensnare
          so easily. I have the eyes of a hawk and
          the ears of a fox!




                                                    (CONTINUED)

                                                           99.
CONTINUED:


The FELLOWSHIP are suddenly surrounded by ARMED ELVES.
Deadly arrows aimed at their heads. HALDIR, the Elvish
captain steps forward... he looks at Gimli with disdain.

                    HALDIR
          The dwarf breathes so loud we could have
          shot him in the dark.

                    ARAGORN
              (Elvish: with subtitles)
          Haldir of Lorien, we come here for your
          help. We need your protection.

                    GIMLI
          Aragorn! These woods are perilous. We
          should go back.

                    HALDIR
          You have entered the realm of the Lady of
          the Wood. You cannot go back.

Haldir's eyes lock onto Frodo.

                    HALDIR (CONT'D)
          Come, she is waiting.

                                                       CUT TO:

EXT. LOTHLORIEN HILLTOP -- DAY

Haldir leads the Fellowship onto a Hill Top.   They look with
wonderment at the vista spread before them.

Several miles towards the South, a Large Hill rises out of
the woods. Upon the hill rise many mighty Mallorn Trees,
taller than any others...Nestled high in the crown of the
mallorns is a Beautiful City. It Gleams in the low rays of
the late afternoon sun..green, gold, and silver. To the east
of Caras Galadhon, the Woods of Lorien run down the pale
gleam of Anduin, the great river. Beyond the River, the land
appears flat and empty, formless and vague, until far away,
it rises again like a dark and dreary wall. The Sun that lies
on Lothlorien has not power to enlighten the shadows that lie
beyond.

                                                       CUT TO:

INT. CELEBORN'S CHAMBER, CARAS GALADHON -- NIGHT

                                                          100.



ANGLE ON: THE FELLOWSHIP

step onto a wide fleet filled with a soft light. The walls
are green and silver, the roof gold and in its midst is the
trunk of the might Mallorn tree, now tapering toward its
crown. Celeborn steps forward to greet the guests. His hair
is long and silver, his face grave and beautiful, with no
sign of age upon it. Next to him stands Galadriel, the Lady
of the Elves. She has hair of deep gold and timeless,
unsurpassed beauty. Celeborn looks hard at Aragorn...

                    CELEBORN
          Eight there are, yet nine there were set
          out from Rivendell. Tell me, where is
          Gandalf, for I much desire to speak with
          him.

Frodo looks at Galadriel, standing silently beside Celeborn.

                    GALADRIEL (V.O.)
              (softly aloud)
          ...he has fallen into shadow. Galadriel
          looks to Aragorn.

                    GALADRIEL (CONT'D)
          The Quest stands upon the edge of a
          knife. Stray but a little and it will
          fail, to the ruin of all...Yet hope
          remains while the company is true.

Galadriel's eyes settle on Sam.

                    GALADRIEL (CONT'D)
          Do not let your hearts be troubled. Go
          now and rest for you are weary with
          sorrow and much toil. Galadriel's eyes
          turn to Frodo...her voice fades.

                    GALADRIEL (CONT'D)
          Tonight you will sleep in peace.
              (whispered v/o)
          Welcome, Frodo of the Shire... CLOSE ON:
          FRODO looks at GALADRIEL. SUDDEN INSERT:
          GALADRIEL as she is on the other

side... Powerful, divine...no longer of this world..a
Piercing white light surrounds her.

                    GALADRIEL (V.O.) (CONT'D)
          ...one who has seen the eye.

                                                        CUT TO:

                                                          101.



EXT. CARAS GALADHON LAWN -- NIGHT

Gimli, Legolas, Merry, Pippin, Frodo and Sam are in a
pavilion set among the trees near the fountain. They lie on
soft couches as Elves leave food and wine for them. MOURNFUL
SINGING drifts down from the trees above.

                    LEGOLAS
              (sadly)
          A lament for Gandalf...

                    MERRY
          What do they say about him?

                    LEGOLAS
          I have not the heart to tell you. For me,
          the grief is still too near. Boromir is
          sitting alone...Aragorn approaches him.

                     ARAGORN
          Take some rest..these borders are well
          protected.

Moonlight catches the trace of tears on Boromir's face.
Aragorn kneels down beside him.

                    BOROMIR
          I will find no rest here. I heard her
          voice inside my head...she spoke of my
          father and the fall of Gondor, and she
          said to me: "Even now, there

                    BOROMIR (CONT'D)
          is hope left. But I cannot see it...it
          is long since we had any hope.

CLOSE ON: BOROMIR looks at ARAGORN in despair.

                    BOROMIR (CONT'D)
          My father is a noble man, but his rule is
          failing and our..our people lose faith.
          He looks to me to make things right...and
          I would do it, I would see the glory of
          Gondor restored. Have you ever seen it,
          Aragorn? The White Tower of Ecthelion,
          glimmering like a spike of pearl and
          silver, its banners caught high in the
          morning breeze...have you ever been
          called home by the clear ringing of
          silver trumpets?

                    ARAGORN
          I have seen the white city..long ago.

                                                   (CONTINUED)

                                                             102.
CONTINUED:


Boromir feels Aragorn's love for Minas Tirith and takes
heart,

                      BOROMIR
            One day our paths will lead us there, and
            the tower guards shall take up the call
             "the Lords of Gondor have returned."

Aragorn returns Boromir's smile...betraying his disquiet
sadness only when Boromir looks away.

                                                          CUT TO:

LATER....

The Fellowship are asleep on their beds. Gimli is snoring
loudly. CLOSE ON: BARE FEET tread soundlessly across the
lawn. CLOSE ON: Frodo's eyes flicker open...as if by
instinct. GALADRIEL, her White dress glowing in the
moonlight, glances at him. Frodo follows her...as if drawn by
an invisible force.

                                                          CUT TO:

EXT. GALADRIELS GLADE, LORTHLORIEN -- NIGHT

Upon a low stone pedestal, carved like a branching tree, sits
a shallow Silver Basin. Galadriel leads Frodo into the small
Glade.

                      GALADRIEL
            Will you look into the mirror? Frodo
            looks with apprehension at the silver
            basin.

                      FRODO
                (warily)
            What will I see?

Galadriel pours water into the basin from a silver jug...a
glow rises from the water.

                      GALADRIEL
            Even the wisest cannot tell for the
            mirror shows many things...things that
            were ..things that are...and some things
            that have not yet come to pass.

Frodo slowly steps up to the pedestal...he peers     into the
glossy surface. The night sky is reflected into     the water...
suddenly a figure takes form...the bowed figure     of an old
man, clad in white robes. He walks down a long      road. Frodo
leans closer to the mirror's surface...

                                                          103.



CLOSE ON: GANDALF LIFTS HIS HEAD AND LOOKS DIRECTLY AT FRODO!

FRODO gasps, his face lighting up with hope.

                    FRODO
              (joyous)
          Gandalf!

Gandalf looks at Frodo with a fierce intensity. Frodo
reaches out his hand toward the surface of the mirror.
Suddenly the image flares, burning out to white. The vision
shifts...Frodo gasps in horror! The Shire is in ruins! The
image suddenly widens to fill the screen...buildings
burning...bodies strewn about...Dark Shapes of ORCS looting
and destroying...Bag End, billowing in flames! The Party
tree is hacked down. Frodo reels back as the mirror seems to
grow...the nightmarish image sweeps past his head, engulfing
him entirely.

IMAGE: Hobbiton...now an Industrial wasteland! The fields
and trees destroyed...replaced with Brick factories belching
smoke! IMAGE: ORCS brutally herd manacled Hobbits into the
Factories! We see Sam...Merry... and Rosie Cotton. Soot-
stained and sobbing, they disappear into the factory hell-
hole! Suddenly, the mirror goes dark...and out of the black
abyss a single eye grows. CLOSE ON: FRODO IS FROZEN. Unable
to move or cry out. The ring dangles from his neck, inches
above the water...not shimmering with curls of steam. Fire
erupts around the eye... With a Yell, Frodo pushes himself
away from the pedestal and collapses on the ground. Light
instantly fades from the mirror. Frodo comes to his
senses...he is shocked. Galadriel stands still as a statue,
unmoved, untouched by the horror.

                    GALADRIEL
          I know what it is you saw...for it is
          also in my mind. It is the future,
          Frodo. It is what will come to pass if
          you should fail.

Galadriel looks at Frodo intensely...Frodo looks down...in
his hand he is clutching the ring. Frodo looks up at
Galadriel.

                    GALADRIEL (CONT'D)
          The fellowship is breaking. It has
          already begun. He will try to take the
          ring. You know of whom I speak. One by
          one, it will destroy them all.

                    FRODO (V.O.)
          If you ask it of me, I will give you the
          One Ring.

                                                   (CONTINUED)

                                                         104.
CONTINUED:


                    GALADRIEL
          You offer it to me freely...I do not deny
          that my heart has greatly desired this.

Galadriel suddenly seems to rise in stature before Frodo's
eyes. Frodo is suddenly afraid of her.

                    GALADRIEL (CONT'D)
          In place of the Dark Lord, you would have
          a Queen, not dark, but beautiful and
          terrible as the Dawn. Treacherous as the
          Sea! Stronger than the foundations of
          the earth...all shall love me and
          despair! Frodo takes a step away from
          Galadriel...

Galadriel suddenly laughs...a slender Elf-woman once more,
clad in simple white, her voice soft and sad.

                    GALADRIEL (CONT'D)
              (gently)
          I pass the test.
              (laughs)
          I will diminish and go into the west and
          remain Galadriel. Frodo's confidence
          drains away.

                    FRODO
          I cannot do this alone...

                    GALADRIEL
          You are the ring-bearer, Frodo...to bear
          a ring of power is to be alone. This task
          was appointed to you, and if you do not
          find a way, no one will.

Frodo realizes what her message is.

                    FRODO
          Then I know what I must do. It's
          just...I'm afraid to do it. Galadriel
          kneels down to Frodo's height, staring at
          him intently.

                    GALADRIEL
          Even the smallest person can change the
          course of the future.

The Ring lies in the palm of Frodo's hand...his fingers close
over it.

                                                      CUT TO:

                                                         105.



INT. ORTHANC CHAMBER -- DAY

Naked, Lurtz's eyes follow Saruman, alight with a mean
intelligence.

                    SARUMAN (V.O.)
              (smiles)
          They were Elves once. Taken by the Dark
          Powers ... tortured and mutilated...a
          ruined and terrible form of life. And
          now...perfected. My fighting Uruk-Hai.
          Whom do you serve?

                    LURTZ
              (gutteral rasp)
          Saruman.

INT. CAVERNS BELOW ISENGARD -- DAY

QUICK CUTS: LURTZ is quickly armored...Breastplate...Leg
guards, Helmet...a sword is thrust in Lurtz's hand. The URUK-
HAI are smearing themselves in white paint...a creepy
ritualistic ceremony...the white hand of Isengard is smeared
on bodies, faces, and armor. SARUMAN address a crowd of 200
fully armed URUK-HAI.

                    SARUMAN
          Hunt them down. Do not stop until they
          are found. You do not know pain. You do
          not know fear. You will taste man-flesh.
          Saruman turns to Lurtz.

                    SARUMAN (CONT'D)
              (coldly)
          One of the Halflings carries something of
          great value...bring him to me...alive and
          unspoiled...kill the others.

EXT. ISENGARD -- DAY

Lurtz is leading 200 URUK-HAI out of Isengard..they run fast,
their powerful legs carrying them at speed.

EXT. SILVERLODE RIVER BANK--DAWN

The Fellowship are in small elven boats. They row away from
the Lothlorien Shore into the Silverlode river. Elves
quietly watch them depart. Galadriel gives Frodo a small
Crystal Phial.

                    GALADRIEL
          Farewell, Frodo Baggins. I give you the
          light of Earendil, our most beloved star.

                                                 (CONTINUED)

                                                            106.
CONTINUED:


As the Fellowship's boats drift past, Galadriel stands alone,
watching from the banks of the river. In his head, Frodo
still hears her voice...

                    GALADRIEL (V.O.) (CONT'D)
          May it be a light for you in dark places,
          when all other lights go out.

EXT. RIVER ANDUIN -- DAY

The boats pass into the great river Anduin. The Three Elven
boats carry the Fellowship steadily southward. Green trees
slowly give way to a brown and withered land.

EXT. FOREST -- DAY

The Uruk forces are running through the trees with deadly
purpose.

EXT. RIVER ANDUIN -- DAY

A flock of birds circle high above, Black against the pale
sky. Aragorn watches them with concern.

EXT. PILLARS OF THE KINGS, RIVER ANDUIN--DAWN

The Three Elven boats drift slowly through the steep rocky
gorge in the Pre-dawn light. CLOSE ON: ARAGORN, slowly
paddling in the stern.

                    ARAGORN
              (quietly)
          Frodo.

Frodo slowly looks up, his eyes widening with amazement. Wide
on: Two enormous rock statues, towering like 300 foot
pinnacles on either side of the river...carved images of
Gondorian kings of old. They loom over the boats with power
and majesty.

                    ARAGORN (CONT'D)
          The Argonath...

Close on: Aragorn...strangely moved by the beauty of the
silent sentinels. He speaks, almost as if to himself.

                    ARAGORN (CONT'D)
              (deeply moved)
          Long have I desired to look upon the
          kings of old...my kin.

The fellowship stare in stunned silence as the current takes
them through the narrow gap between the Statues' feet.

                                                 (CONTINUED)

                                                            107.
CONTINUED:


Wide on: Craning up past the statues vast crumbling heads, to
reveal a large lake only a mile down river...

EXT. SHORE OF NEN HITHOEL -- DAY

ANGLE ON: THE FELLOWSHIP

As they leap out of the boats and clamber onto the wooded
shore.

                    ARAGORN
          We cross the lake at nightfall, hide the
          boats and continue on foot..we approach
          Mordor from the North.

                    GIMLI
              (gloomy)
          Oh, yes, just a simple matter of finding
          our way through Emyn Muil, an impassable
          labyrinth of razor sharp rocks. And
          after that gets even better...a
          festering, stinking marshland, far as the
          eye can see.

                    ARAGORN
          That is our Road...I suggest you take
          some rest and recover your strength,
          Master Dwarf.

                    GIMLI
              (indignant)
          Recover my...

Legolas turns to Aragorn with urgency.

                    LEGOLAS
          We should leave now.

                    ARAGORN
          No. Orcs patrol the Eastern shore. We
          must wait for cover of darkness.

                    LEGOLAS
          It is not the Eastern shore that worries
          me.

Legolas casts a glance around into the Parth Galen forest...

                    LEGOLAS (CONT'D)
          A shadow and a threat has been growing in
          my mind. Something draws near, I can
          feel it.


                                                  (CONTINUED)

                                                           108.
CONTINUED:


Aragorn looks at Legolas, knowing full well what he means.
Sam has slumped asleep...Merry dumps a small pile of kindling
at Gimli's feet...

                    MERRY
          Where's Frodo?

Sam sits up with a start...Aragorn's head snaps round..his
eyes fly to Boromir's shield which lies abandoned by his camp
bed. CLOSE ON: ARAGORN.... as he realizes Boromir has gone!

EXT. SLOPES OF AMON HEN -- DAY

Frodo is walking beneath the trees...lost in thought. His
feet hit the rough edge of an ancient stone slab...his eyes
follow an overgrown path towards stone stairs leading to the
summit of Amon Hen...the seeing seat. A CRACKLING SOUND!
Frodo freezes....

                    BOROMIR
              (quietly)
          None of us should wander alone; you least
          of all. So much depends on you...Frodo?

Frodo turns slowly...he stares at Boromir, tense, cautious.

                    BOROMIR (CONT'D)
          I know why you seek solitude. You
          suffer, I see it day by day. Are you
          sure you do not suffer needlessly?

Frodo stands silent for a moment..the murmur of the Wind in
the trees and the distant roar of the falls of Rauros can be
heard

                    BOROMIR (CONT'D)
          Let me help you. There are other ways,
          Frodo..other paths that we might take.

                    FRODO
          I know what you would say, and it would
          seem like wisdom but for the warning of
          my heart.

                     BOROMIR
          Warning?   Against what?

Boromir has started forward towards Frodo, he pulls himself
up.




                                                    (CONTINUED)

                                                         109.
CONTINUED:


                    BOROMIR (CONT'D)
          We are all afraid, Frodo. But to let that
          fear drive us to destroy what hope we
          have...don't you see that is madness?

                    FRODO
          There is no other way.

                    BOROMIR
          I ask only for the strength to defend my
          people.
              (angrily drops the wood he has
               collected)
          If you would but lend me the ring...

                    FRODO
          No. . .

Frodo steps hurriedly away from Boromir.

                    BOROMIR
          Why do you recoil?   I am no thief.

                     FRODO
              (wary)
          You are not yourself.

                    BOROMIR
          What chance do you think you have? They
          will find you, they will take the ring
          and you will beg for death before the
          end.

Frodo turns to leave.

                    BOROMIR (CONT'D)
          You fool! It is not yours save by
          unhappy chance...it might have been mine.
          It should be mine. Give it to me! Give
          me the ring.

Boromir leaps on top of Frodo, grasping for the ring! Frodo
has only moments to act. Frodo rips the ring from around his
neck..and rams it on his finger.

                    FRODO DISAPPEARS
          Boromir spins wildly around, yelling into
          thin air!

                    BOROMIR
          I see your mind...you will take the ring
          to Sauron. You will betray us! You go to
          your death and the death of us all.
                    (MORE)
                                                  (CONTINUED)

                                                           110.
CONTINUED: (2)
                      BOROMIR (CONT'D)
            Curse you! Curse you and your Halflings!
            Boromir stumbles and falls. His body
            shakes as if in the Throes of a
            fit...slowly he comes to.

                      BOROMIR (CONT'D)
                (Disoriented)
            Frodo! Frodo! What have I done. Please,
            Frodo...

EXT. SEEING SEAT -- DAY

                                          IN THE TWILIGHT WORLD:

FRODO races through the misty twilight world, past the foggy
shapes of twisted trees. Somewhere behind him, Boromir's
distraught voice carries from another dimension:

                      BOROMIR (O.S.)
            I'm sorry, Frodo...Frodo...

Frodo suddenly finds himself on the stone steps...he clambers
up the stairs, onto a high seat, perched on four stone
pillars. Frodo cowers on the seat, like a lost child upon the
throne of mountain kings. The world of mist swirls around
him. Frodo peers out from the seat...the world seems to
shrink. In all directions, Views of far off lands telescope
towards him through the mist. IMAGES: ORCS spilling out of
holes in the misty mountains... flames rising from
Mirkwood...grim faced easterlings march to war...black ships
sailing into the south. All the power of the Dark Lord is in
motion. Frodo moves his gaze towards the east...fire explodes
against the smoke, as a huge mass of black battlements fills
Frodo's vision. A mountain of iron, immeasurably strong,
tower of adamant: Barad-dur, FORTRESS OF SAURON!

SUDDENLY!   SAURON'S EYE LEAPS TOWARD FRODO LIKE A FINGER OF

LIGHT.

SAURON (V.O.)

(IN BLACK SPEECH)

They will fall! Frodo leaps off the seat, and tumbles down
the stairs! The eye sweeps Amon Hen like a searchlight,
seeking its ring! With a huge effort, Frodo wrenches the ring
off his finger...

EXT. SUMMIT OF AMON HEN -- DAY

Frodo lies gasping on the summit of Amon Hen...below the
ancient ruins of the seeing seat.

                                                            111.



AT THAT MOMENT: A BLACK BOOT STEPS INTO SHOT!

Frodo looks up as Aragorn towers over him.

                       ARAGORN
          Frodo?

                     FRODO
              (numb)
          It has taken Boromir. ARAGORN moves
          towards Frodo...

                    ARAGORN
              (urgent)
          Where is the ring?

Frodo backs away from Aragorn...Aragorn is shocked by the
movement.

                       FRODO
          Stay away!

                    ARAGORN
          Frodo...I swore to protect you.

                    FRODO
          Can you protect me from yourself?

Frodo uncurls his fist...in is palm lies the ring! It
glints, gold and beautiful in the afternoon sun...Aragorn's
eyes are drawn to it.

                    FRODO (CONT'D)
          Would you destroy it?

                    ARAGORN
              (kneeling to Frodo)
          I would have gone with you to the end...
          into the very fires of Mordor.

                    FRODO
          I know...Look after the others,
          especially Sam...he will not understand.

Aragorn freezes!   He draws his sword.

                     ARAGORN
              (urgent)
          Go, Frodo!

Frodo hesitates.



                                                 (CONTINUED)

                                                           112.
CONTINUED:


                    ARAGORN (CONT'D)
              (yells)
          Run! Run!!

Frodo backs away into the trees...as 200 URUK-HAI SWARM onto
Amon Hen behind Aragorn!

Aragorn attacks the leading URUK-HAI like a madman... he
brings two down with his sword...leaping into the ruins as
others close in on him. Frodo scrambles down the hillside,
away from the fight. Aragorn battles the URUK-HAI, amongst
the pillars and blocks of Amon Hen. Despite his bravery, he
is quickly surrounded... SUDDENLY: ELVEN ARROWS smash into
the URUK-HAI. Legolas races out of the woods, firing his bow.
Gimli leaps into the battle, wielding his might axe.

EXT. PARTH GALEN HILLSIDE -- DAY

Frodo is darting down the steep hillside as heave feet
thunder down behind him.

                       SAM
          Mr. Frodo!

Sam looks around for Frodo. CLOSE ON: LURTZ ordering his
URUKS.

                     LURTZ
          Find the Halflings ... find the
          halflings!

Frodo stumbles and falls...quickly he crawls behind a
tree...above him the sound of Uruk-Hai crashing through the
forest rings out.

                    MERRY (O.S.)
              (urgent whisper)
          Frodo!

Frodo turns to see Merry and Pippin hidden in a hollow, a few
feet away.

                    MERRY (CONT'D)
          Hide here, quick!

                       PIPPIN
          Come on...

Frodo looks at his friends... slowly shakes his head, a great
sadness in his eyes...

                    PIPPIN (CONT'D)
          What's he doing?

                                                 (CONTINUED)

                                                          113.
CONTINUED:


Merry's eyes meet Frodo's.        Understanding.

                    MERRY
              (softly)
          He's leaving.

                        PIPPIN
          No!

Pippin stands and makes a move toward Frodo...Merry grabs at
his arm.

                        MERRY
          Pippin!

THE ECHO OF BOROMIR'S HORN reaches Aragorn, Legolas, and
Gimli...they are battling their way down the Slopes towards
the lake.

                    LEGOLAS
          The horn of Gondor!

                        ARAGORN
          Boromir!

Aragorn desperately slashes his way towards Boromir, felling
URUK-HAI in his path...while Legolas and Gimli fight a rear
guard action. MANY URUK-HAI fall to Boromir's sword as he
tries to protect Merry and Pippin...

                        BOROMIR
          Run!   Run!

Lurtz takes aim. A black arrow suddenly thuds into Boromir's
chest. Amazingly, Boromir continues fighting, but another
arrow...and another, brings him to his knees. Merry and
Pippin are scooped off their feet by URUK-HAI.

                        MERRY & PIPPIN
          Aaaaagh!      Boromir! Boromir!

Lurtz aims his bow at Boromir's heart... suddenly Aragorn
charges at him, smashing the Bow with his sword. They lock
into a deadly battle. Aragorn cuts Lurtz down and races
towards Boromir, who lies slumped against a tree...URUK-HAI
arrows sticking out of his chest. At least 20 dead URUK-HAI
lie heaped around Boromir. His horn lies at his feet...Cloven
in two.

                    BOROMIR
              (painful gasp)
          They took the little ones...
                    (MORE)

                                                   (CONTINUED)

                                                            114.
CONTINUED: (2)
                    BOROMIR (CONT'D)
          Aragorn quickly tries to staunch the flow
          of Blood from Boromir's shoulder.

                    BOROMIR (CONT'D)
              (panicked)
          Frodo...where is Frodo?

                    ARAGORN
          I let Frodo go.

Boromir holds Aragorn's gaze.

                    BOROMIR
          Then you did what I could not.   I tried
          to take the ring from him.

                    ARAGORN
          The ring is beyond our reach now.

                    BOROMIR
          Forgive me, I did not see..I have failed
          you all.

                    ARAGORN
          No, Boromir. You fought bravely. You
          have kept your honor. Aragorn tries to
          bind Boromir's wound.

                    BOROMIR
          Leave it! It is over...the world of Men
          will fall and all will come to darkness
          and my city to ruin..Aragorn..

                    ARAGORN
          I do not know what strength is in my
          blood, but I swear to you... I will not
          let the White City fall, nor your people
          fail...

                    BOROMIR
          Our people...our people...

Aragorn places Boromir's sword in his hand.   Boromir's
fingers tighten around the hilt.

                    BOROMIR (CONT'D)
          I would have followed you, my
          brother...my captain, my King. Aragorn
          lays Boromir down. He is dead.

                    ARAGORN
          Be at peace, son of Gondor. Aragorn bends
          and Kisses Boromir's forehead.
                    (MORE)

                                                     (CONTINUED)

                                                            115.
CONTINUED: (3)
                     ARAGORN (CONT'D)
           Legolas and Gimli appear behind
           him...Aragorn stands.

                     ARAGORN (CONT'D)
           They will look for his coming from the
           white tower...but he will not return.

EXT. SHORE OF NEN HITHOEL -- DAY

On the lakeshore Frodo stands in front of one of the Elvish
Boats, the ring in his palm. A distraught Sam...running as
hard as he can through the forest...

                        SAM
           Mr. Frodo!

Close on: Frodo looks to the far side of the river...the
camera moves in on the ring.

                     FRODO (V.O.)
           I wish the ring had never come to me..I
           wish none of this had happened...

Tears fall down Frodo's face...

                     GANDALF (V.O.)
           So do all who lie to see such times...but
           that is not for them to decide. All we
           have to decide is what to do with the
           time that is given us.

With renewed determination, Frodo tucks the ring inside his
vest pocket. The small figure of Frodo pushing the Elvish
boat into the water... Sam bursts through the trees and runs
toward the lake...Frodo is already paddling away.

                     SAM
               (anguished)
           Not alone, Frodo. Mr. Frodo! Frodo, in
           the boat, paddling steadfastly away from
           the

shore..tears in his eyes..the voice of Sam carried on the
wind. Frodo whispers to himself

                        FRODO
           No, Sam.

Sam looks at the water...then at the boat.

SPLASH!   FRODO turns to see Sam launching himself into the
water.



                                                     (CONTINUED)

                                                            116.
CONTINUED:


                    FRODO (CONT'D)
          Go back,Sam. I'm going to Mordor alone.

Sam splashes hopelessly toward the boat.

                    SAM
          Of course you are...and I'm coming with
          you!

                    FRODO
          You can't swim.

Sam starts to go under, spluttering and coughing...Frodo
drops his paddle and scrambles backwards in the boat...

                       FRODO (CONT'D)
                 (frightened)
          Sam!

Sam is underwater...hands flailing helplessly as he sinks.
Close on: Frodo's hand grasping Sam's... Frodo pulls a
bedraggled and half drowned Sam into the boat. Frodo and Sam
look at each other, out of breath, tears and water streaming
down both their faces.

                     SAM
          I made a promise, Mr. Frodo...a promise.
              (fierce passion)
          "Don't you leave him, Samwise Gamgee."
              (sobs)
          And I don't mean to...I don't mean to.

                    FRODO
              (crying)
          Oh, Sam!

Frodo starts to laugh through his tears...the two friends
hug.

                    FRODO (CONT'D)
          Come on then..

The two Hobbits row through the water...

EXT. FALLS OF RAUROS AERIAL -- DAY

Slow motion: Looking down on swiftly flowing
water...Boromir's body slides under camera.

He is lying in one of the boats, his arms across his
chest..his broken horn at his side. Suddenly... the boat
drops away from camera...as it plunges over the massive falls
of Rauros, disappearing into the vapor below.

                                                    (CONTINUED)

                                                           117.
CONTINUED:


                    LEGOLAS
          If we are quick, we will catch Frodo and
          Sam before nightfall.

Aragorn looks towards the far shore; Frodo and Sam's small
Boat can be seen lying on the distant Riverbank as Frodo and
Sam make off into the forest beyond. He doesn't react.
Legolas turns and looks at Aragorn.

                    LEGOLAS (CONT'D)
          You mean not to follow them...

                    ARAGORN
          Frodo's fate is no longer in our hands.

                    GIMLI
          Then it has all been in vain...the
          fellowship has failed.

                    ARAGORN
          Not if we hold true to each other. We
          will not abandon Merry and Pippin to
          torment and death, not while we have
          strength left.

Aragorn pulls a HUNTING KNIFE out of his pack and straps it
on.

                    ARAGORN (CONT'D)
          Leave all that can be spared behind...
          CLOSE ON: ARAGORN..a steely light in his
          eye.

                    ARAGORN (CONT'D)
              (grimly)
          We travel light. Let's hunt some Orc.

                       GIMLI
          Yes!   Ha!

Aragorn, Legolas, and Gimli disappear into the Woods,
following the URUK-HAI trail.

EXT. EMYN MUIL HILLTOP -- DAY

Frodo and Sam scramble onto a high ridge.

A distant line of Saw toothed mountains below a dark,
oppressive sky. Black volcanic smoke rises behind the
mountains....MORDOR!




                                                    (CONTINUED)

                                                            118.
CONTINUED:


                     FRODO
          Mordor!   I hope the others find a safer
          road.

                    SAM
              (simply)
          Strider'll look after them.

                    FRODO
          I don't suppose we'll ever see them
          again.

                    SAM
          We may yet, Mr. Frodo.   We may.

                     FRODO
          Sam?

Frodo looks at Sam with great affection..despite the grim
outlook, Sam is undeterred...

                    FRODO (CONT'D)
          I'm glad you're with me.

WIDE ON: THE TWO HOBBITS SETTING OFF TOWARD MORDOR.

THE END

========================================================
========================================================
========================================================


THE LORD OF THE RINGS: THE TWO TOWERS


                                      Screenplay by 
                       Peter Jackson, Fran Walsh and Philippa Boyens.

                          Based on "The Lord of The Rings" trilogy by
                                      J.R.R Tolkien.
 

                                 Transcription credits

                         Accela, Aina, Bad burn, Bridget Chubb, 
                         Brionn Equus (Lochrann), Drusilia, Elf 
                         Lady, �owyn Unquendor, Feanari, Finafyr, 
                         Flourish, Galadriel, Heri, Julamb, JustinsIce(Mdjasrie), 
                         Kazren, Krystal, Lady�owynKenobi, Lady 
                         Evenstar, Legolas�Bow, Lithorose, Melody, 
                         Mormegil, Nilmandra, Padfoot, Penwiper, 
                         Pilgrim Grey, Primula Baggins, Randy 
                         Savage, Samwise the Brave, Sirius Black, 
                         Tethra, The Lidless Eye, Turnar, Xyla, 
                         Yaksha
 
                         Elvish dialogue from The Elvish Linguistic 
                         Fellowship.
 



                           [TITLE:  THE LORD OF THE RINGS]



                         [Camera pans over the Misty Mountains 
                         as voices drift in from the background.]
 
                         
                                     GANDALF
                         You cannot pass!

                                     FRODO
                         Gandalf!

                                     GANDALF
                         I am a servant of the Secret Fire, wielder 
                         of the Flame of Anor!
 
                         [Camera pans closer to the mountain 
                         side.]
 
                                     GANDALF
                         Argh! Go back to the shadow. The Dark 
                         Fire will not avail you, Flame of Ud�n! 
                         [Camera zooms in through the mountain 
                         and focuses on Gandalf and the Balrog 
                         on the bridge of Khazad-d�m. The Balrog 
                         strikes down on Gandalf with its flaming 
                         sword. Gandalf parries the blow with 
                         Glamdring, shattering the Balrog�s sword.] 
                         YOU� SHALL NOT... PASS!!!
 
                         [Gandalf strikes his staff onto the 
                         bridge. As the Balrog steps forward, 
                         the bridge collapses from under it and 
                         the demon plunges backward into the 
                         chasm. Gandalf, exhausted, leans on 
                         his staff and watches the Balrog fall 
                         then turns to follow the others. At 
                         the last minute, the flaming whip lashes 
                         up from the depths of the abyss and 
                         winds around Gandalf�s ankle, dragging 
                         him over the edge. He clings onto the 
                         bridge but is straining to keep his 
                         grip.]
 
                                     GANDALF
                         Argh!

                         [Frodo rushes forward but Boromir restrains 
                         him.]
 
                                     BOROMIR
                         No! No!

                                     FRODO
                         Gandalf!

                                     GANDALF
                         Fly, you fools!

                         [Gandalf loses his grip and falls into 
                         the chasm]
 
                                     FRODO
                         Noooooooooooooooo!!!!

                         [Gandalf loses his grip and falls into 
                         the chasm]
 
                                     FRODO
                         [Calls after Gandalf as he falls into 
                         the abyss] Gaaandaaaaalf!!
 
                         [Gandalf falls after the Balrog and 
                         grabs hold of his sword Glamdring on 
                         his way down. As they continue to plunge 
                         into the depths, Gandalf hacks away 
                         at the Balrog even as it thrashes and 
                         bounces off the walls. They continue 
                         to plunge at great speed, sometimes 
                         with Gandalf clinging to the horn of 
                         the demon. The battling pair then falls 
                         into an enormous cavern and plunges 
                         into the water. Just then Frodo awakens 
                         as if from a nightmare.]
 
                                     FRODO
                         Gandalf!

                                     SAM
                         What is it, Mr. Frodo?

                                     FRODO
                         Nothing. Just a dream. [Lies back down.]
 
                         
                         [Frodo and Sam climbs over the rocky 
                         terrain Emyn Muil. They look into the 
                         distance at the Mountain of Fire.]
 
                         
                                     SAM
                         Mordor. The one place in Middle-earth 
                         we don�t want to see any closer, and 
                         the one place we�re trying to get to. 
                         It�s just where we can�t get. Let�s 
                         face it, Mr. Frodo, we�re lost. I don�t 
                         think Gandalf meant for us to come this 
                         way.
 
                                     FRODO
                         He didn�t mean for a lot of things to 
                         happen, Sam... but they did.
 
                         [Suddenly Frodo feels and sees the Eye 
                         zooming in on him. He gasps and pants 
                         as he backs away.]
 
                                     SAM
                         Mr. Frodo? It�s the Ring, isn�t it?
 
                         
                                     FRODO
                         It�s getting heavier. [Clutches the 
                         Ring by his chest and sits down, still 
                         panting. He then fumbles for his water 
                         bottle and takes a sip.]
 
                                     FRODO
                         What food have we got left?

                                     SAM
                         Well, let me see. [He takes out a package 
                         of lembas bread from his pack] Oh yes, 
                         lovely � Lembas bread. And look! [He 
                         digs deeper into his pack] More lembas 
                         bread.
 
                         [Sam shows another package. He then 
                         breaks off a piece and tosses it to 
                         Frodo, and munches on a piece himself.]
 
                         
                                     SAM
                         I don't usually hold with foreign food, 
                         but this Elvish stuff, it�s not bad.
 
                         
                                     FRODO
                         [smiles] Nothing ever dampens your spirits, 
                         does it Sam?
 
                         [Sam smiles back, and then looks ominously 
                         towards Mordor.]
 
                                     SAM
                         Those rain clouds might.

                         [They continue trekking through difficult 
                         terrain, often huddling underneath their 
                         cloaks.]
 
                                     SAM
                         [Looks around] This looks strangely 
                         familiar.
 
                                     FRODO
                         [Exasperated] It�s because we�ve been 
                         here before! We�re going in circles.
 
                         
                                     SAM
                         Ah! What's that 'orrid stink? I'll warrant 
                         there's a nasty bog nearby. Can you 
                         smell it?
 
                                     FRODO
                         Yes. I can smell it. [Drops to a whisper] 
                         We�re not alone.
 
                                     [NIGHTTIME
                         Frodo and Sam are sleeping. A dark shape 
                         appears on top of the cliff. The creature 
                         Gollum has appeared and is making his 
                         way down to the hobbits.]
 
                                     GOLLUM
                         The thieves! The thieves! The filthy 
                         little thieves! Where is it? Where isss 
                         it? They stole it from us. My preciousss. 
                         [Gollum creeps closer and closer.] Curse 
                         them! We hates them! It�s ours, it is... 
                         and we wantssss it!
 
                         [Gollum reaches out his hand towards 
                         the hobbits. Suddenly the hobbits spring 
                         up, grab hold of Gollum�s arms and pull 
                         him down. Amidst the struggle, Gollum 
                         wriggles loose and leaps onto Frodo. 
                         As Frodo falls back, the chain and Ring 
                         around his neck is revealed and Gollum 
                         jumps straight for the Ring. Sam tries 
                         to grab at him but is knocked away. 
                         Gollum now jumps on top of Frodo and 
                         tries to reach for the Ring even as 
                         Frodo grabs his hands and tries to push 
                         him away. Gollum�s cheeks puff with 
                         exertion as he struggles with Frodo, 
                         his enormous eyes fixed on the Ring. 
                         Sam grabs hold of Gollum again and tears 
                         him away from Frodo. Gollum then turns 
                         around and bites Sam on the shoulder, 
                         wriggles around and clasps his arms 
                         around Sam�s neck and legs around his 
                         waist in a death grip. Frodo unsheathes 
                         Sting and holds it to Gollum's throat.]
 
                         
                                     FRODO
                         [menacingly] This is Sting. You�ve seen 
                         it before, haven�t you... Gollum! Release 
                         him or I�ll cut your throat!
 
                         [Slowly, Gollum loosens his grip on 
                         Sam and as the latter disentangles himself, 
                         Gollum wails. In the next scene, Gollum 
                         is being dragged with Sam's Elvish rope 
                         around his neck, wailing and writhing 
                         in pain.]
 
                                     GOLLUM
                         It burns! It burns us! It freezes! Nasty 
                         Elves twisted it. Take it off us!
 
                         
                                     SAM
                         Quiet you!

                         [Sam tugs fiercely at the rope. Gollum 
                         cries some more and collapses onto his 
                         back. Sam turns to Frodo in dismay.]
 
                         
                                     SAM
                         It�s hopeless! Every Orc in Mordor�s 
                         going to hear this racket! Let�s just 
                         tie him up and leave him.
 
                                     GOLLUM
                         No! That would kill us! Kill us!

                                     SAM
                         It�s no more than you deserve!

                                     FRODO
                         Maybe he does deserve to die, but now 
                         that I see him, I do pity him.
 
                                     GOLLUM
                         [Begging] We be nice to them if they 
                         be nice to us. Take it off us. We swears 
                         to do what you wants. We swears.
 
                                     FRODO
                         There�s no promise you can make that 
                         I can trust.
 
                                     GOLLUM
                         We swears to serve the master of the 
                         preciousss. We swears on... on the precious. 
                         *Gollum. Gollum.*
 
                                     FRODO
                         The Ring is treacherous. It will hold 
                         you to your word.
 
                                     GOLLUM
                         Yes... on the preciousss. On the preciousss.
 
                         
                                     SAM
                         I don�t believe you! [Gollum backs away, 
                         frightened, and climbs onto a boulder] 
                         Get down! I said, down!
 
                         [Sam jerks strongly at the rope as Gollum 
                         tries to get away from him. He crashes 
                         onto the ground, choking.]
 
                                     FRODO
                         Sam!

                                     SAM
                         He�s trying to trick us! We let him 
                         go he�ll throttle us in our sleep!
 
                         
                         [Gollum lies panting and holding his 
                         throat. He backs away, frightened, as 
                         Frodo approaches him.]
 
                                     FRODO
                         You know the way to Mordor?

                                     GOLLUM
                         [nods warily] Yes...

                                     FRODO
                         You�ve been there before?

                                     GOLLUM
                         [nods again] Yes...

                         [Frodo reaches out and takes the rope 
                         noose off Gollum�s neck. Gollum seems 
                         surprised and relieved.]
 
                                     FRODO
                         You will lead us to the Black Gate.
 
                         
                         [Gollum scrambles off in the direction 
                         of Morannon and the hobbits follow in 
                         his wake.]
 


                         [A band of Uruk-hai marches across the 
                         plain, with two hobbits bound to the 
                         backs of two Uruk-hai. Pippin tries 
                         to call to Merry, who is unconscious 
                         with a gash on his right brow.]
 
                                     PIPPIN
                         Merry. Merry! [He receives no response.]
 
                         
                         [Suddenly, an Uruk-hai puts up his hand 
                         and signals a stop.]
 
                                     UGL�K
                         What is it? What do you smell?

                                     MAN-FLESH URUK
                         [sniffs the air] Man-flesh.

                                     PIPPIN
                         [quietly to himself] Aragorn!

                                     UGL�K
                         They've picked up our trail! Let's move!
 
                         
                         [The Uruk-hai quicken their pace. Pippin 
                         struggles to reach his Elven brooch 
                         with his teeth. He then tears it off 
                         his cloak and drops it onto the ground. 
                         A foot stomps onto the brooch but it 
                         remains unbroken and visible on the 
                         grass.]
 
                         [Aragorn is lying with his eyes closed 
                         and ear pressed to the ground, listening 
                         for the sound of footsteps.]
 
                                     ARAGORN
                         Their pace has quickened. [He looks 
                         up.] They must have caught our scent. 
                         Hurry! [He runs off.]
 
                                     LEGOLAS
                         Come on, Gimli! [Looks back at Gimli 
                         and then runs after Aragorn]
 
                                     GIMLI
                         [pauses in his steps and huffs] Three 
                         days� and nights� pursuit. No food. 
                         No rest. And no sign of our quarry but 
                         what bare rock can tell. [Runs after 
                         his companions.]
 
                         [The Three Hunters run across rocks 
                         and plains, with Aragorn in the lead, 
                         followed by Legolas and Gimli. From 
                         time to time, Legolas looks back to 
                         make sure that Gimli is keeping up. 
                         Aragorn suddenly bends down to pick 
                         up an Elven brooch from the ground.]
 
                         
                                     ARAGORN
                         Not idly do the leaves of L�rien fall.
 
                         
                                     LEGOLAS
                         [stops and turns to Aragorn.] They may 
                         yet be alive.
 
                                     ARAGORN
                         Less than a day ahead of us. Come! [Runs 
                         off again]
 
                         [Gimli stumbles from behind some rocks 
                         and rolls to the ground]
 
                                     LEGOLAS
                         Come, Gimli! We are gaining on them!
 
                         
                                     GIMLI
                         [Panting] I am wasted on cross-country! 
                         We dwarves are natural sprinters! Very 
                         dangerous over short distances!
 
                         [The trackers come over a hill and pause 
                         as they gaze across the plains below.]
 
                         

                                     ARAGORN
                         Rohan. Home of the horse-lords. There 
                         is something strange at work here. Some 
                         evil gives speed to these creatures, 
                         sets its will against us.
 
                         [Legolas runs ahead and looks out to 
                         the horizon.]
 
                                     ARAGORN
                         Legolas, what do your Elf eyes see?
 
                         
                                     LEGOLAS
                         The Uruks turn northeast. They�re taking 
                         the hobbits to Isengard!
 
                                     ARAGORN
                         Saruman.



                         [The tower of Orthanc stands amidst 
                         the smoking caverns of Isengard. Saruman 
                         stands in his chamber, communicating 
                         with the Dark Lord through the Palant�r.]
 
                         
                                     SARUMAN (V.O.)
                         The world is changing. [View changes 
                         to the tower of Barad-d�r, with its 
                         huge Orc armies on a bridge.] Who now 
                         has the strength to stand against the 
                         armies of Isengard and Mordor? To stand 
                         against the might of Sauron and Saruman 
                         and the union of the two towers?
 
                         [Camera pans upwards along the height 
                         of the tower of Barad-d�r until the 
                         flaming Eye is in view.]
 
                                     SARUMAN (V.O.)
                         Together, my lord Sauron, we shall rule 
                         this Middle-earth.
 
                         [The trees around Isengard are being 
                         ripped down, chopped up and used to 
                         feed huge furnaces. The caverns of Isengard 
                         glow with the fires of industry, sounds 
                         of hammering fill the air and molten 
                         iron is poured into casts to forge weapons.]
 
                         
                                     SARUMAN (V.O.)
                         The old world will burn in the fires 
                         of industry. The forests will fall. 
                         A new order will rise. We will drive 
                         the machine of war with the sword and 
                         the spear and the iron fists of the 
                         Orc. We have only to remove those who 
                         oppose us.
 
                         [Saruman stands in the midst of a gathering 
                         of Dunlanders.]
 
                                     SARUMAN
                         The horsemen took your land. They drove 
                         your people into the hills to scratch 
                         a living off rocks.
 
                                     DUNLAND MAN
                         Murderers!

                                     SARUMAN
                         Take back the lands they stole from 
                         you! Burn every village!
 
                                     CROWD
                         [Roars with approval] Argh!!

                         [They stomp off to destroy the villages 
                         of Rohan as Saruman stands coldly still 
                         among the stampede. A Rohan village 
                         is in pandemonium as people try to escape 
                         the on-coming pillage.]
 
                                     SARUMAN (V.O.)
                         It will begin in Rohan. Too long have 
                         these peasants stood against you. But 
                         no more.
 
                         [A woman with her hand on a horse calls 
                         out to her children.]
 
                                     MORWEN
                         �othain! �othain! You take your sister. 
                         You�ll go faster with just two.
 
                                     FREDA
                         [As Morwen puts her onto the horse in 
                         front of her brother] Papa says �othain 
                         must not ride Garulf, he is too big 
                         for him!
 
                                     MORWEN
                         Listen to me. You must ride to Edoras 
                         and raise the alarm. Do you understand 
                         me?
 
                                     �OTHAIN
                         Yes, Ma!

                                     FREDA
                         [starts to cry] I don�t wanna leave! 
                         I don't wanna go, Mama!
 
                                     MORWEN
                         Freda, I will find you there.

                         [A woman screams]

                                     MORWEN
                         Quickly!

                         [The children ride off.]

                                     MORWEN
                         [Looks after them] Go child!

                         [Dunlanders and Uruk-hai enter the village, 
                         burning everything in sights as the 
                         Rohirrim scream and run in all directions. 
                         �othain and Freda weep as they look 
                         back from a distance.]
 
                                     SARUMAN (V.O.)
                         Rohan, my lord, is ready to fall.

                         [A group of horsemen ride to Edoras. 
                         �omer is in the lead, carrying a gravely 
                         wounded Th�odred.]
 
                         [�owyn runs hastily up the stairs to 
                         the Golden Hall and enters a bedchamber. 
                         She runs to the bed.]
 
                                     �OWYN
                         Th�odred!

                         [Th�odred seems to hear her call but 
                         is unable to respond. He has a bloody 
                         gash on the side of his head. �omer 
                         nods to �owyn in the direction of Th�odred�s 
                         torso. �owyn draws back the covers and 
                         upon seeing Th�odred�s fatal wound, 
                         her lips tighten and eyes close. She 
                         looks up to catch �omer�s eye.]
 
                         [�omer and �owyn are speaking to Th�oden-king 
                         who sits motionless on his throne, wizened, 
                         and aged beyond his years.]
 
                                     �OWYN
                         Your son is badly wounded, my lord.
 
                         
                                     �OMER
                         He was ambushed by Orcs. If we don�t 
                         defend our country, Saruman will take 
                         it by force.
 
                                     GR�MA
                         That is a lie! [Appears from the shadows.] 
                         Saruman the White has ever been our 
                         friend and ally.
 
                                     TH�ODEN
                         [mumbles feebly] Gr�ma� Gr�ma� [Gr�ma 
                         leans down close to the King.]My son...? 
                         Gr�ma...?
 
                                     �OMER
                         Orcs are roaming freely across our lands. 
                         Unchecked. Unchallenged. Killing at 
                         will. Orcs bearing the white hand of 
                         Saruman. [He drops a helmet onto the 
                         ground, which topples over to reveal 
                         the white hand of Saruman.]
 
                                     GR�MA
                         Why do you lay these troubles on an 
                         already troubled mind. Can you not see? 
                         Your uncle is wearied by your malcontent, 
                         your war-mongering.
 
                                     �OMER
                         War-mongering?

                         [�omer grabs Gr�ma and pins him against 
                         a pillar.]
 
                                     �OMER
                         How long is it since Saruman bought 
                         you? What was the promised price, Gr�ma? 
                         When all the men are dead you will take 
                         your share of the treasure?
 
                         [Gr�ma�s eyes flicks to right, watching 
                         �owyn as she walks by. �owyn stops to 
                         stare back for a moment before departing 
                         form the hall. �omer jerks Gr�ma again 
                         and clutches his hand around Gr�ma�s 
                         jaw.]
 
                                     �OMER
                         Too long have you watched my sister, 
                         too long have you haunted her steps.
 
                         
                         [Gr�ma's eyes look to the left and relax 
                         as �omer is suddenly pulled off Gr�ma 
                         by his thugs.]
 
                                     GR�MA
                         You see much �omer, Son of �omund. Too 
                         much. [The thugs punch �omer n the stomach] 
                         You are banished forthwith from the 
                         kingdom of Rohan. Under pain of death!
 
                         
                                     �OMER
                         [Being dragged away] Argh!!



                         [Uruk-hai and Orcs continue to march 
                         across the plains with their hobbit 
                         captives, with Aragorn, Legolas, and 
                         Gimli hot on their pursuits.]
 
                                     GIMLI
                         Keep breathing! That�s the key! Breathe! 
                         Ho!
 
                                     LEGOLAS
                         They�ve run as if the very whips of 
                         their masters were behind them.
 
                         [They continue running over vast distances. 
                         The Uruk-hai and Orcs halt at nightfall, 
                         many panting with exertion.]
 
                                     MORDOR ORC
                         We�re not going no further till we�ve 
                         had a breather!
 
                                     UGL�K
                         Get a fire going!

                         [As the Orcs and Uruk-hai take their 
                         rest, Pippin crawls over towards Merry.]
 
                         
                                     PIPPIN
                         Merry! Merry!

                                     MERRY
                         [opens his eyes] I think... we might 
                         have made a mistake leaving the Shire, 
                         Pippin.
 
                         [A group of Orcs chops down the trees 
                         nearby for firewood. Low groans and 
                         rumbles start to emerge from the forest.]
 
                         
                                     PIPPIN
                         What�s making that noise?

                                     MERRY
                         [looks towards the forest] It�s the 
                         trees.
 
                                     PIPPIN
                         What?

                                     MERRY
                         Do you remember the Old Forest? On the 
                         borders of Buckland? Folk used to say 
                         that there was something in the water 
                         that made the trees grow tall... and 
                         come alive.
 
                                     PIPPIN
                         Alive?

                                     MERRY
                         Trees that could whisper. Talk to each 
                         other. Even move.
 
                                     MA�HUR
                         I'm starving. We ain't 'ad nothin' but 
                         maggoty bread for three stinkin' days!
 
                         
                                     SNAGA
                         Yeah. Why can�t we have some meat? [His 
                         eyes rest on the hobbits.] What about 
                         them? They�re fresh.
 
                                     UGL�K
                         They are not for eating!

                                     GRISHN�KH
                         What about their legs? They don't need 
                         those. Ooh� They look tasty!
 
                                     UGL�K
                         [Shoves at the Orcs] Get back, scum!
 
                         
                         [The other Orcs are getting restless.]
 
                         
                                     MORDOR ORC
                         Carve them up!

                                     SNAGA
                         [Moves towards the hobbits with his 
                         blade drawn] Just a mouth full.
 
                                     UGL�K
                         No!

                         [Pippin and Merry recoil in fright. 
                         Ugl�k jumps on the Orc and cuts off 
                         his head, which bounces off the hobbit's 
                         shoulders.]
 
                                     UGL�K
                         Looks like meat�s back on the menu, 
                         boys!!
 
                         [The Uruk-hai and Orcs cheer and started 
                         tearing into the fresh meat, intestines 
                         flying, taking their eyes off the hobbits 
                         for a while.]
 
                                     MERRY
                         Pippin, let�s go.

                         [Their hands still bound, the hobbits 
                         try to crawl away. Suddenly a foot comes 
                         down on Merry and Pippin is turned onto 
                         his back.]
 
                                     GRISHN�KH
                         [Brandishing a blade in front of Pippin�s 
                         face] Go on, call for help. Squeal! 
                         No one�s gonna save you now!
 
                         [Suddenly, a spear pierces the Orc's 
                         back. Mayhem ensues as Riders of Rohan 
                         burst out from their hiding places and 
                         ambush the Orcs.]
 
                                     MERRY
                         Pippin! [Gestures for them to make their 
                         escape.]
 
                         [The hobbits try to escape from the 
                         pandemonium to the forest, dodging bodies 
                         and stomping feet. Suddenly Pippin turns 
                         onto his face and looks up to a pair 
                         of thrashing hooves bearing down on 
                         him.]
 
                                     PIPPIN
                         ARGH!!!



                         [The Three Hunters are still chasing 
                         after the Uruk-hai. It is dawn.]
 
                                     LEGOLAS
                         [Pauses and looks up] A red sun rises. 
                         Blood has been spilled this night.
 
                         
                         [Camera pans over the rock and plains, 
                         alternating between the band of Uruk-hai 
                         and the Three Hunters giving chase. 
                         The trackers hear the sound of horses. 
                         Aragorn and company hide behind some 
                         boulders. A large group of horse-men 
                         appears, galloping quickly with their 
                         banners flying. Aragorn comes out of 
                         hiding as they pass, followed by Legolas 
                         and Gimli.]
 
                                     ARAGORN
                         Riders of Rohan, what news from the 
                         Mark?
 
                         [At a signal from �omer at the lead, 
                         the riders make a quick turn and head 
                         towards them, surrounding them in ever-tightening 
                         circles. As they stop, they point their 
                         long spears menacingly at them.]
 
                                     �OMER
                         What business does an Elf, a man and 
                         a Dwarf have in the Riddermark? Speak 
                         quickly!
 
                                     GIMLI
                         Give me your name, Horsemaster, and 
                         I shall give you mine.
 
                         [�omer hands his staff to another rider, 
                         and gets off his horse. Aragorn puts 
                         a hand on Gimli�s shoulder.]
 
                                     �OMER
                         I would cut off your head, Dwarf, if 
                         it stood but a little higher from the 
                         ground.
 
                         [Legolas, in a lightning fast move, 
                         points an arrow at �omer.]
 
                                     LEGOLAS
                         You would die before your stroke fell!
 
                         
                         [The riders all point their spears closer 
                         at the travellers. After a tense moment, 
                         Aragorn pushes down Legolas� arm.]
 
                         
                                     ARAGORN
                         I am Aragorn, son of Arathorn. This 
                         is Gimli, son of Gl�in and Legolas of 
                         the Woodland realm. We are friends of 
                         Rohan and of Th�oden, your king.
 
                                     �OMER
                         Th�oden no longer recognizes friend 
                         from foe. [Takes off helmet] Not even 
                         his own kin.
 
                         [The spears are withdrawn.]

                                     �OMER
                         Saruman has poisoned the mind of the 
                         king and claimed lordship over these 
                         lands. My company are those loyal to 
                         Rohan. And for that, we are banished. 
                         The White Wizard is cunning. He walks 
                         here and there, they say, as an old 
                         man, hooded and cloaked. And everywhere 
                         his spies slip past our nets.
 
                                     ARAGORN
                         We are not spies. We track a party of 
                         Uruk-hai westward across the plain. 
                         They�ve taken two of our friends captive.
 
                         
                                     �OMER
                         The Uruks are destroyed. We slaughtered 
                         them during the night.
 
                                     GIMLI
                         But there were two hobbits. Did you 
                         see two hobbits with them?
 
                                     ARAGORN
                         They would be small � only children 
                         to your eyes.
 
                                     �OMER
                         We left none alive. We piled the carcasses 
                         and burned them. [Points to a smoking 
                         pile in the distance.]
 
                                     GIMLI
                         Dead?

                                     �OMER
                         [nods] I am sorry.

                         [Legolas puts a hand on Gimli�s shoulder 
                         in grief. �omer turns and whistles.]
 
                         
                                     �OMER
                         Hasufel! Arod! [Two horses move up.] 
                         May these horses bear you to better 
                         fortune than their former masters. Farewell.
 
                         
                         [�omer puts on his helmet and gets back 
                         on his horse]
 
                                     �OMER
                         Look for your friends. But do not trust 
                         to hope, it has forsaken these lands. 
                         [To the riders] We ride north!
 
                         [Aragorn, Legolas and Gimli look on 
                         as the Riders go off. They then ride 
                         towards the burning carcasses. Gimli 
                         starts to shift through the smoldering 
                         pile, and pulls out a charred belt and 
                         dagger sheath.]
 
                                     GIMLI
                         It�s one of their wee belts.

                                     LEGOLAS
                         [with his head bowed and eyes closed] 
                         Hiro �th� ab 'wanath... (May they find 
                         peace in death)
 
                                     ARAGORN
                         [Kicks a helmet and yells] AAARRGGHH!!! 
                         [He falls to his knees.]
 
                                     GIMLI
                         We failed them.

                         [Aragorn looks to the side as some tracks 
                         catch his attention.]
 
                                     ARAGORN
                         A hobbit lay here, and the other. [Flashback: 
                         Pippin yells as he looks up at a pair 
                         of thrashing hooves bearing down on 
                         him. He rolls over, avoiding the hooves.] 
                         They crawled.
 
                                     [ARAGORN STARTS TO FOLLOW THE TRACKS, WITH LEGOLAS AND GIMLI BEHIND HIM. FLASHBACK
                         Merry and Pippin crawl frantically away 
                         from the battle.]
 
                                     ARAGORN
                         Their hands were bound. [Flashback: 
                         Merry rubs his bonds furiously against 
                         the sharp edge of a weapon.] Their bonds 
                         were cut. [Aragorn holds up a broken 
                         length of thick rope.]
 
                                     ARAGORN
                         They ran over here. They were followed.
 
                         
                                     [FLASHBACK
                         Their hands freed, the hobbits run away 
                         from the battle scene, dodging under 
                         a horse and trying to stay out of harms 
                         way. As they flee, Grishn�kh grabs Pippin 
                         by his belt and clings on.]
 
                                     MERRY
                         The belt!

                         [Pippin undoes his belt and Grishn�kh 
                         is left holding it.]
 
                                     MERRY
                         Run!

                                     ARAGORN
                         The tracks lead away from the battle... 
                         [They break into a run and then stop] 
                         into Fangorn Forest.
 
                         [The Three looks up into a dense and 
                         dark forest]
 
                                     GIMLI
                         Fangorn. What madness drove them in 
                         there?
 


                         [Scene moves from the trackers into 
                         the nighttime chase of Merry and Pippin. 
                         The hobbits run into the Fangorn, seeking 
                         to lose the pursuing Orc. They collapse 
                         onto the ground, out of breath.]
 
                                     PIPPIN
                         Did we lose him? [Looks around] I think 
                         we lost him.
 
                         [Suddenly, Grishn�kh appears from behind 
                         the trees, brandishing a blade.]
 
                                     GRISHN�KH
                         I�m gonna rip out your filthy little 
                         innards! Come here!
 
                         [Merry and Pippin run and hide behind 
                         a tree.]
 
                                     MERRY
                         Trees! Climb a tree!

                         [Pippin and Merry quickly scramble up 
                         a tree each.]
 
                                     MERRY
                         [Looks around and then sighs in relief.] 
                         He's gone.
 
                         [Suddenly, Merry is pulled by his legs 
                         and falls to the ground. Grishn�kh leans 
                         over him with his menacing blade. Merry 
                         tries to kick him off but to no avail.]
 
                         
                                     PIPPIN
                         Merry!

                         [Pippin looks down in horror but as 
                         he turns his head, he spots a pair of 
                         gleaming yellow eyes blinking in the 
                         tree he�s clinging to. The tree starts 
                         to move and groan.]
 
                                     TREEBEARD
                         Hooooo...

                                     PIPPIN
                         Argh!!

                         [Pippin loses his grip in fright and 
                         grabs at the air futilely as he falls. 
                         The tree catches him before he hits 
                         the ground.]
 
                                     GRISHN�KH
                         Let�s put a maggot-hole in your belly. 
                         [Suddenly he senses something behind 
                         him and as he looks up, the tree stomps 
                         and squashes him onto the forest floor.]
 
                         
                                     PIPPIN
                         Run, Merry!

                         [Merry tries to run away but is scooped 
                         by the tree.]
 
                                     TREEBEARD
                         [Looks at the creatures in his hands] 
                         Little Orcs! Bur�rum...
 
                                     PIPPIN
                         It�s talking, Merry. The tree is talking!
 
                         
                                     TREEBEARD
                         Tree?! I am no tree. I am an Ent. [Stomps 
                         slowly through the forest.]
 
                                     MERRY
                         A treeherder! A shepherd of the forest.
 
                         
                                     PIPPIN
                         Don�t talk to it, Merry. Don�t encourage 
                         it.
 
                                     TREEBEARD
                         Treebeard, some call me.

                                     PIPPIN
                         And whose side are you on?

                                     TREEBEARD
                         Side? I am on nobody�s side because 
                         nobody�s on my side, little Orc. Nobody 
                         cares for the woods anymore.
 
                                     MERRY
                         We�re not Orcs. We�re Hobbits!

                                     TREEBEARD
                         Hobbits? Never heard of a hobbit before. 
                         Sounds like Orc mischief to me! [Tightens 
                         his hold on the hobbits and squeezes 
                         them. Merry and Pippin whimpers in pain] 
                         They come with fire, they come with 
                         axes. Gnawing, biting, breaking, hacking, 
                         burning! Destroyers and usurpers, curse 
                         them!
 
                                     MERRY
                         No, you don�t understand. We�re Hobbits... 
                         Halflings! Shirefolk!
 
                                     TREEBEARD
                         Maybe you are and maybe you aren�t. 
                         The White Wizard will know.
 
                                     PIPPIN
                         The White Wizard?

                                     MERRY
                         Saruman.

                         [Treebeard drops them on the ground 
                         and the hobbits look up at the White 
                         Wizard.]
 


                         [Following Gollum, Frodo and Sam reach 
                         the end of Emyn Muil and see that Mordor 
                         is now closer.]
 
                                     GOLLUM
                         See, see, we have led you out! Hurry 
                         hobbitses hurry. Very lucky we find 
                         you.
 
                         [Gollum jumps on a rock. Frodo walks 
                         past, Gollum shrinks as Sam draws near.]
 
                         
                                     GOLLUM
                         Nice hobbit. [Leaps after Frodo, putting 
                         a wide berth between him and Sam.]
 
                         
                         [Sam�s foot slipped into muck.]

                                     SAM
                         Whoa, it�s a bog! He�s led us into a 
                         swamp!
 
                                     GOLLUM
                         A swamp, yes, yes. Come, master. We 
                         will take you on safe paths through 
                         the mist. Come, hobbits, come. We go 
                         quickly.
 
                         [Gollum looks back and gestures for 
                         the hobbits to follow.]
 
                                     GOLLUM
                         I found it, I did. The way through the 
                         marshes. Orcs don't use it. Orcs don't 
                         know it. They go round for miles and 
                         miles. Come quickly. Swift and quick 
                         as shadows we must be.
 
                         [The marsh lands stretch for miles and 
                         miles as far as the eye can see. The 
                         hobbits and Gollum appear as little 
                         specks. As the three pick their way 
                         gingerly though the marshes, they see 
                         faces floating in the water, still, 
                         rotting and pale, and flickering flames 
                         on the swamps.]
 
                                     SAM
                         There are dead things! Dead faces in 
                         the water!
 
                                     GOLLUM
                         All dead. All rotten. Elves and men 
                         and orcses. A great battle long ago. 
                         [Turns to face the hobbits.] The Dead 
                         Marshes. Yes, yes that is their name. 
                         This way. Don�t follow the lights.
 
                         
                         [Sam�s foot slips again into the water.]
 
                         
                                     SAM
                         Ohh!

                                     GOLLUM
                         Careful now, or hobbits go down to join 
                         the dead ones and light little candles 
                         of their own.
 
                         [Frodo is drawn to one of the faces 
                         in Elven armour. He stares at it intently, 
                         until suddenly its eyes open and Frodo 
                         falls face-down into the water.]
 
                                     SAM
                         Frodo!

                         [Frodo is in the water and sees many 
                         faces of the dead, no longer still but 
                         screaming and grasping, their rotten 
                         robes and hair flowing about their gruesome 
                         faces. Their hands are reaching for 
                         him. Suddenly he is grabbed from behind. 
                         Frodo sputters and gasps for air as 
                         Gollum pulls him out of the water.]
 
                         
                                     FRODO
                         [Looks at Gollum in perplexed gratitude 
                         and disbelief.] Gollum...
 
                                     GOLLUM
                         Don�t follow the lights! [Crawls away]
 
                         
                                     SAM
                         [Runs to Frodo�s side.] Mr. Frodo! Are 
                         you alright?
 
                         [Frodo lies panting, staring after Gollum]
 
                         


                                     [NIGHTFALL
                         Sam is asleep but Frodo is still awake. 
                         He is holding the Ring in the palm of 
                         his hand and stroking it, mesmerized. 
                         Suddenly he hears Gollum.]
 
                                     GOLLUM
                         Sooo bright. Sooo beautiful. [Frodo 
                         quickly puts the Ring back inside his 
                         shirt. He looks up to see Gollum crouching 
                         away from him, stroking the centre of 
                         his palm] our preciousss...
 
                                     FRODO
                         What did you say?

                                     GOLLUM
                         Master should be resting. Master needs 
                         to keep up his strength.
 
                                     FRODO
                         [Moves over and crouches in front of 
                         Gollum] Who are you?
 
                                     GOLLUM
                         Mustn�t ask us. Not its business. *Gollum, 
                         Gollum*
 
                                     FRODO
                         Gandalf told me you were one of the 
                         River Folk.
 
                                     GOLLUM
                         Cold be heart and hand and bone. Cold 
                         be travellers far from home.
 
                                     FRODO
                         He said your life was a sad story.
 
                         
                                     GOLLUM
                         They do not see what lies ahead, when 
                         sun has failed and moon is dead.
 
                                     FRODO
                         You were not so very different from 
                         a hobbit once, were you... Sm�agol?
 
                         
                                     GOLLUM
                         [Looks up slowly.] What did you call 
                         me?
 
                                     FRODO
                         That was your name once, wasn�t it? 
                         A long time ago.
 
                                     GOLLUM
                         My name... My name... S... S...Sm�agol�
 
                         
                         [Suddenly, the piercing cries of the 
                         Nazg�l are heard overhead]
 
                                     GOLLUM
                         Argh!!

                                     SAM
                         Black Riders!

                                     GOLLUM
                         Hide! Hide!

                                     FRODO
                         Argh!

                         [Suddenly Frodo feels the pain of the 
                         Nazg�l's sword piercing him and the 
                         call of the Ring. Images of the Ringwraiths 
                         come to him in flashes.]
 
                                     FRODO
                         Argh!!

                                     SAM
                         C�mon Frodo! C'mon!

                         [Frodo continues to clutch at the Ring 
                         on his chest, immobilized. Sam drags 
                         Frodo across to hide beneath some bramble 
                         bushes. The Nazg�l appears, tightening 
                         his hold on the reins. Camera then shows 
                         him riding a Fell Beast, swooping down 
                         across the marsh lands. Chilling screams 
                         of the Nazg�l fill the air.]
 
                                     GOLLUM
                         Quick! They will see us! They will see 
                         us!
 
                                     SAM
                         I thought they were dead!

                                     GOLLUM
                         Dead? No, you cannot kill them. No.
 
                         
                         [A loud screech from the Nazg�l flying 
                         high above the marshes.]
 
                                     GOLLUM
                         [cowering] Wraiths! Wraiths on wings! 
                         They are calling for it. They are calling 
                         for the preciousss.
 
                         [Frodo feels the call of the Ring and 
                         gropes for his necklace. Sam sees this 
                         and grabs hold of Frodo�s hand.]
 
                                     SAM
                         Mr. Frodo! It�s alright. I�m here.
 
                         
                         [The Nazg�l continues to circle overhead 
                         and then flies off towards Mordor.]
 
                         
                                     GOLLUM
                         Hurry, hobbits. The Black Gate is very 
                         close.
 


                         [Scene returns to Fangorn forest. Gimli 
                         fingers a dark stain on a leaf and brings 
                         it to his mouth.]
 
                                     GIMLI
                         [Spits] Ptui! Orc blood.

                                     ARAGORN
                         These are strange tracks.

                                     GIMLI
                         The air is so close in here.

                                     LEGOLAS
                         This forest is old. Very old. Full of 
                         memory... and anger.
 
                         [Groans reverberate through the forest 
                         and Gimli raises his axe.]
 
                                     LEGOLAS
                         The trees are speaking to each other.
 
                         
                                     ARAGORN
                         [Whispers] Gimli!

                                     GIMLI
                         Huh?

                                     ARAGORN
                         [Gestures] Lower your axe.

                                     GIMLI
                         [Lowering his axe slowly] Oh.

                                     LEGOLAS
                         Aragorn, nad n� ennas! (Something is 
                         out there.)
 
                                     ARAGORN
                         Man cenich? (What do you see?)

                         [Close-up of Legolas� eyes]

                                     LEGOLAS
                         The White Wizard approaches.

                                     ARAGORN
                         Do not let him speak. He will put a 
                         spell on us.
 
                         [Aragorn wraps his hand around the hilt 
                         of his sword, Gimli tightens his hold 
                         on his axes, and Legolas notches an 
                         arrow to his bow.]
 
                                     ARAGORN
                         We must be quick.

                         [With a yell, the three swing round 
                         to attack. Gimli�s axe and Legolas� 
                         arrow are deflected. Aragorn drops his 
                         sword as it becomes red hot in his grasp. 
                         They shield their eyes with their hands 
                         from the bright light emanating from 
                         the White Wizard.]
 
                                     WHITE WIZARD
                         You are tracking the footsteps of two 
                         young hobbits.
 
                                     ARAGORN
                         Where are they?

                                     WHITE WIZARD
                         They passed this way the day before 
                         yesterday. They met someone they did 
                         not expect. Does that comfort you?
 
                         
                                     ARAGORN
                         Who are you? Show yourself!

                         [The bright light dims, revealing Gandalf, 
                         all dressed in white. The three are 
                         astounded. Legolas and Gimli bow.]
 
                         
                                     ARAGORN
                         It cannot be. You fell.

                                     GANDALF
                         Through fire and water. [Flashback: 
                         Gandalf is battling the Balrog atop 
                         D�rin�s Tower.] From the lowest dungeon 
                         to the highest peak, I fought with the 
                         Balrog of Morgoth.
 
                         [Gandalf holds up Glamdring and a flash 
                         of lightning strikes it before he plunges 
                         the sword into the Balrog. With a final 
                         cry, the Balrog falls from the peak 
                         and lands, smoking, onto the icy mountainside.]
 
                         
                                     GANDALF
                         Until at last, I threw down my enemy 
                         and smote his ruin upon the mountainside.
 
                         
                         [On top of the mountain, Gandalf crawls 
                         a bit and then collapses.]
 
                                     GANDALF
                         Darkness took me. And I strayed out 
                         of thought and time. [Camera zooms in 
                         Gandalf�s eye and enters an amorphous 
                         realm of stars and galaxies, ending 
                         in a blinding white light] Stars wheeled 
                         overhead and everyday was as long as 
                         a life-age of the earth. But it was 
                         not the end. I felt life in me again.
 
                         
                         [Camera zooms out from Gandalf�s eye, 
                         lying naked and very still. His hair 
                         has turned white and wounds are completely 
                         healed. He suddenly shudders with a 
                         deep gasp and pants as life returns 
                         to him]
 
                                     GANDALF
                         I've been sent back until my task is 
                         done.
 
                                     ARAGORN
                         Gandalf!

                                     GANDALF
                         Gandalf? Yes... That's what they used 
                         to call me. Gandalf the Grey. That was 
                         my name. [He smiles]
 
                                     GIMLI
                         Gandalf!

                                     GANDALF
                         [With a twinkle in his eye] I am Gandalf 
                         the White. [Aragorn grins] And I come 
                         back to you now at the turn of the tide.
 
                         
                         [They walk through the forest, with 
                         Gandalf leading the way, now wearing 
                         a grey cloak over his white robes.]
 
                         
                                     GANDALF
                         One stage of your journey is over, another 
                         begins. War has come to Rohan. We must 
                         ride to Edoras with all speed.
 
                         [Outside the forest, Gandalf whistles 
                         piercingly. Soon an answering neigh 
                         is heard and a white horse appears from 
                         the plain, answering the call.]
 
                                     LEGOLAS
                         That is one of the Mearas, unless my 
                         eyes are cheated by some spell.
 
                         [The horse comes round to stop in front 
                         of Gandalf.]
 
                                     GANDALF
                         Shadowfax. [Gimli bows in the background.] 
                         He's the lord of all horses and he's 
                         been my friend through many dangers.
 
                         
                         [The Three Hunters and Gandalf ride 
                         across the plains to Edoras.]
 


                         [Back at Fangorn, Treebeard is walking 
                         through the forest with Merry and Pippin 
                         sitting on his shoulders.]
 
                                     TREEBEARD
                         My home lies deep in the forest near 
                         the roots of the mountain. I told Gandalf 
                         I would keep you safe and safe is where 
                         I�ll keep you. The trees have grown 
                         wild and dangerous. Anger festers in 
                         their hearts. They will harm you if 
                         they can. There are too few of us now. 
                         Too few of us Ents left to manage them.
 
                         


                         [Frodo and Sam are climbing a high rock 
                         overlooking Morannon.]
 
                                     GOLLUM
                         The Black Gate of Mordor.

                         [The enormous Black Gate comes into 
                         view with Orcs patrolling and standing 
                         guard on the towers and atop the walls. 
                         From the right, an army of Easterling 
                         soldiers is marching to the Black Gate.]
 
                         
                                     SAM
                         Oh save us. My ol' Gaffer'd have a thing 
                         or two to say if he could see us now.
 
                         
                                     GOLLUM
                         Master says to show him the way into 
                         Mordor, so good Sm�agol does. Master 
                         says so.
 
                                     FRODO
                         I did.

                         [Orcs are patrolling the Black Gate.]
 
                         
                                     SAM
                         That�s it then. We cannot get past that.
 
                         
                         [A command is heard and an Orc sounds 
                         a horn, signalling for the Gate to be 
                         opened. Two enormous cave trolls stretch 
                         and growl and then pull the mighty Gate 
                         open.]
 
                                     SAM
                         Look! The gate, it's opening! I can 
                         see a way down.
 
                         [He moves closer to the edge. Suddenly, 
                         the rock underneath him gives way and 
                         he falls.]
 
                                     FRODO
                         Sam, no!

                                     SAM
                         Argh!!

                         [Frodo goes after Sam.]

                                     GOLLUM
                         Master!

                         [Two Easterling soldiers see streams 
                         of dust coming down the cliff made by 
                         Sam and Frodo. They move away from the 
                         troop to investigate. Frodo reaches 
                         Sam who is stuck in the scree. As the 
                         Easterlings move closer and closer, 
                         Frodo throws his Elvish cloak over himself 
                         and Sam. The soldiers are now directly 
                         in front of Sam, but their eyes see 
                         nothing but rock. Frodo and Sam peer 
                         from underneath the cloak. The soldiers 
                         soon leave and after a moment, Frodo 
                         throws back the cloak and pulls Sam 
                         out.]
 
                                     FRODO
                         I do not ask you to come with me, Sam.
 
                         
                                     SAM
                         I know, Mr Frodo. I doubt even these 
                         Elvish cloaks will hide us in there.
 
                         
                         [They prepare to make a run for the 
                         Gate.]
 
                                     FRODO
                         Now!

                         [Gollum pulls them back.]

                                     GOLLUM
                         No! No, no master! They catch you! They 
                         catch you! Don�t take it to him! He 
                         wants the preciousss. Always he�s looking 
                         for it! And the preciousss is wanting 
                         to go back to him. But we mustn�t let 
                         him have it.
 
                         [Frodo tries to make a run for it.]
 
                         
                                     GOLLUM
                         No! [Pulls Frodo back again.] There�s 
                         another way. More secret. A dark way.
 
                         
                                     SAM
                         Why haven�t you spoken of this before?!
 
                         
                                     GOLLUM
                         Because Master did not ask!

                                     SAM
                         He�s up to something.

                                     FRODO
                         Are you saying there�s another way into 
                         Mordor?
 
                                     GOLLUM
                         Yes. There is a path, and some stairs, 
                         and then� a tunnel.
                          [Frodo and Sam watch as the Black Gate 
                         closes. Gollum is stroking Frodo�s arm 
                         and burying his face in his cloak.]
 
                         
                                     FRODO
                         He�s led us this far, Sam.

                                     SAM
                         Mr. Frodo, no.

                                     FRODO
                         He�s been true to his word.

                                     SAM
                         [Whispers] No!

                                     FRODO
                         Lead the way, Sm�agol.

                                     GOLLUM
                         Good Sm�agol always helps.

                         [Frodo follows Gollum as Sam stares 
                         after him in disbelief.]
 
                         [On the plains of Rohan. Gandalf, Aragorn, 
                         Legolas and Gimli stop as Edoras comes 
                         into view.]
 
                                     GANDALF
                         Edoras and the Golden Hall of Meduseld. 
                         There dwells Th�oden, King of Rohan, 
                         whose mind is overthrown. Saruman�s 
                         hold over King Th�oden is now very strong.
 
                         
                         [In the Hall, �owyn is kneeling before 
                         Th�oden, holding his hand in hers.]
 
                         
                                     �OWYN
                         My lord, your son, he is dead. My lord? 
                         Uncle?
 
                         [Th�oden just sits and stares ahead, 
                         his eyes clouded and unseeing.]
 
                                     �OWYN
                         Will you not go to him? [She weeps.] 
                         Will you do nothing?
 
                         [Scene returns to Gandalf and company.]
 
                         
                                     GANDALF
                         Be careful what you say. Do not look 
                         for welcome here.
 
                         [They ride on towards Edoras.]



                         [At Edoras, �owyn is weeping at the 
                         dead Th�odred's bed. She kisses his 
                         hand. Gr�ma appears at the door.]
 
                         
                                     GR�MA
                         Oh, he� he must have died sometime in 
                         the night. What a tragedy for the king 
                         to lose his only son and heir.
 
                         [He sits on the bed and puts a hand 
                         on �owyn�s shoulder.]
 
                                     GR�MA
                         I understand his passing is hard to 
                         accept, especially now that your brother 
                         has deserted you.
 
                                     �OWYN
                         [jumps back and throws off Gr�ma�s hand] 
                         Leave me alone, snake!
 
                                     GR�MA
                         [Rises from the bed and moves ever closer 
                         to �owyn] Oh, but you are alone! Who 
                         knows what you have spoken to the darkness. 
                         In bitter watches of the night, when 
                         all your life seems to shrink, the walls 
                         of your bower closing in about you, 
                         like a hutch to trammel some wild thing 
                         in.
 
                         [He puts a hand on her cheek and moves 
                         down to her throat.]
 
                                     GR�MA
                         So fair, so cold, like a morning of 
                         pale spring still clinging to winter's 
                         chill.
 
                         [�owyn and Gr�ma stare at each other 
                         intently.]
 
                                     �OWYN
                         Your words are poison!

                         [�owyn runs out of the hall. Weeping, 
                         she looks away into the distance. A 
                         flag comes off its pole and is carried 
                         by the breeze. �owyn sees riders coming 
                         towards Edoras. As Aragorn passes the 
                         entrance to Edoras, the flag floats 
                         down to land near him. Edoras is silent 
                         and somber. Everyone is dressed in black 
                         and staring at the newcomers in wary 
                         silence. Aragorn looks up at the hall 
                         and sees a lady in white standing on 
                         the steps. He looks around at more somber 
                         people.]
 
                                     GIMLI
                         You�ll find more cheer in a graveyard.
 
                         
                         [Aragorn looks up to the hall again 
                         but the lady has disappeared. The company 
                         climbs up the stairs to the hall and 
                         is met by guards.]
 
                                     GANDALF
                         [sees H�ma] Ah.

                                     H�MA
                         I cannot allow you before Th�oden-King 
                         so armed, Gandalf Greyhame. By order 
                         of Gr�ma Wormtongue.
 
                         [Gandalf nods in understanding and signals 
                         for the others to surrender their weapons. 
                         Aragon hands over his sword and knives. 
                         Legolas gives a little twirl to his 
                         knives before handing them over to the 
                         guards. Gimli hands over his axes reluctantly.]
 
                         
                                     H�MA
                         [gestures to Gandalf] Your staff.

                                     GANDALF
                         Hmm? [Glances at his staff.] Oh. You 
                         would not part an old man from his walking 
                         stick? [Looks at H�ma innocently.]
 
                         
                         [H�ma hesitates for a second and then 
                         gestures that they follow him into the 
                         hall. Gandalf gives Aragorn a tiny wink 
                         and enters the hall, leaning on Legolas� 
                         arm.]
 
                                     GR�MA
                         [Leaning down and whispering to Th�oden.] 
                         My lord, Gandalf the Grey is coming. 
                         He�s a herald of woe.
 
                                     GANDALF
                         The courtesy of your hall is somewhat 
                         lessened of late, Th�oden King.
 
                         [As Gandalf approaches Th�oden, Aragorn, 
                         Legolas and Gimli pull back and survey 
                         the hall and its hostile occupants. 
                         A group of men starts to follow their 
                         steps with hostility.]
 
                                     GR�MA
                         [Whispering to Th�oden.] He�s not welcome.
 
                         
                                     TH�ODEN
                         Why should I� welcome you, Gandalf� 
                         Stormcrow? [Looks to Gr�ma for affirmation.]
 
                         
                                     GR�MA
                         A just question, my liege. [He walks 
                         towards Gandalf.] Late is the hour in 
                         which this conjurer chooses to appear. 
                         Lathspell spell I name him. Ill news 
                         is an ill guest.
 
                                     GANDALF
                         Be silent! Keep your forked tongue behind 
                         you teeth. I have not passed through 
                         fire and death to bandy crooked words 
                         with a witless worm! [Raises his staff 
                         against Gr�ma.]
 
                                     GR�MA
                         His staff! [Backing away from Gandalf 
                         while addressing the guards] I told 
                         you to take the wizard�s staff!
 
                         [The hostile guards attack. Aragorn, 
                         Legolas and Gimli engage them in a fist-fight 
                         as Gandalf continues to approach Th�oden. 
                         Gamling tries to go forward but H�ma 
                         holds him back.]
 
                                     GANDALF
                         Th�oden, son of Thengel, too long have 
                         you sat in the shadows.
 
                         [Gr�ma tries to crawl away unnoticed, 
                         but Gimli catches him and pins him to 
                         the floor.]
 
                                     GIMLI
                         [Growls] I would stay still, if I were 
                         you.
 
                                     GANDALF
                         Hearken to me! I release you from the 
                         spell. [Gestures with his hand]
 
                                     TH�ODEN
                         [Menacingly] Hahahhhahahahah! [Gandalf 
                         opens his eyes in surprise.] You have 
                         no power here, Gandalf the Grey!
 
                         [Gandalf throws back his grey cloak, 
                         exuding blinding white light. Th�oden 
                         is thrown back against his seat.]
 
                         
                                     TH�ODEN
                         Argh!

                                     GANDALF
                         [Points his staff towards Th�oden.] 
                         I will draw you, Saruman, as poison 
                         is drawn from a wound.
 
                         [�owyn rushes in. Seeing her uncle threatened, 
                         she tries to go to him but is held back 
                         by Aragorn.]
 
                                     ARAGORN
                         Wait.

                                     TH�ODEN
                         [In Saruman�s voice.] If I go. . . Th�oden 
                         dies.
 
                         [Gandalf moves his staff sharply and 
                         Th�oden flies back against the chair 
                         again.]
 
                                     GANDALF
                         You did not kill me, you will not kill 
                         him!
 
                                     TH�ODEN
                         [in Saruman's voice] Rohan is mine!
 
                         
                                     GANDALF
                         Be gone!!

                         [Gandalf smites Th�oden as he lunges 
                         at him. Th�oden is thrown back into 
                         the chair and the shot changes to Saruman 
                         flying backwards from the Palant�r which 
                         he used to manipulate Th�oden. He lands 
                         landing hard on the floor of Orthanc, 
                         bleeding from a gash in his forehead. 
                         In the hall, Th�oden lets out a moan 
                         and slumps forward in the chair. �owyn 
                         runs to her uncle�s side as he falls. 
                         Th�oden�s head rises again and his face 
                         begins to change gradually into that 
                         of a much younger-looking man. Clarity 
                         and recognition returns to his eyes.]
 
                         
                                     TH�ODEN
                         [Looks closely at �owyn] I know your 
                         face. �owyn� �owyn.
 
                         [�owyn weeps with joy]

                                     TH�ODEN
                         Gandalf?

                                     GANDALF
                         Breathe the free air again, my friend.
 
                         
                         [The hall is shown to be filled with 
                         light again, as everyone marvels at 
                         the rejuvenation of the king.]
 
                                     TH�ODEN
                         [Standing up and looking around him.] 
                         Dark have been my dreams of late. [He 
                         looks down at his trembling hands.]
 
                         
                                     GANDALF
                         Your fingers would remember their old 
                         strength better... if they grasped your 
                         sword.
 
                         [H�ma runs up with his sword. Th�oden 
                         reaches for it with trembling hands. 
                         He wraps his fingers around it slowly 
                         and then draws it, gazing upon the shiny 
                         steel. In a corner, Gr�ma trembles and 
                         tries to escape but is pulled back by 
                         Gimli. Suddenly, Th�oden�s gaze turns 
                         to Gr�ma. Gr�ma is thrown out of the 
                         hall and down the stairs.]
 
                                     GR�MA
                         Argh! [Beseechingly to Th�oden] I've 
                         only ever served you, my lord!
 
                                     TH�ODEN
                         [Advancing towards Gr�ma, holding the 
                         sword firmly in his hand] Your leechcraft 
                         would have had me crawling on all fours 
                         like a beast!
 
                                     GR�MA
                         [Grovelling] Send me not from your side.
 
                         
                         [Th�oden raises his sword to kill Gr�ma. 
                         Aragorn holds him back.]
 
                                     ARAGORN
                         No, my lord! No, my lord. Let him go. 
                         Enough blood has been spilled on his 
                         account.
 
                         [Gr�ma scrambles to his feet and pushes 
                         through the crowd]
 
                                     GR�MA
                         Get out of my way!

                                     H�MA
                         Hail, Th�oden king!

                         [The crowd kneels in homage before Th�oden. 
                         Aragorn kneels also. Gr�ma rides out 
                         of Edoras. As Th�oden turns to go back 
                         into the hall, he looks up.]
 
                                     TH�ODEN
                         Where is Th�odred? Where is my son?
 
                         


                         [A white flower comes into view, held 
                         up by a hand. It is released and spirals 
                         down to land among similar flowers, 
                         in front of a tomb.]
 
                                     TH�ODEN
                         Simbelmyn�. Ever has it grown on the 
                         tombs of my forebearers. [Looks at Gandalf] 
                         Now it shall cover the grave of my son. 
                         Alas, that these evil days should be 
                         mine. The young perish and the old linger. 
                         That I should live to see the last days 
                         of my house.
 
                                     GANDALF
                         Th�odred�s death was not of your making.
 
                         
                                     TH�ODEN
                         No parent should have to bury their 
                         child.
 
                         [Th�oden starts to weep]

                                     GANDALF
                         He was strong in life. His spirit will 
                         find its way to the halls of your fathers. 
                         Westu h�l. Fer�u, Th�odred, Fer�u. (Be-thou 
                         well. Go-thou, Th�odred, go-thou.)
 
                         
                         [Gandalf turns to go back to the hall 
                         and leaves Th�oden to grieve in private. 
                         He spots two children on horseback. 
                         The boy collapses and falls off the 
                         horse. Later, inside the Golden Hall, 
                         the two children are eating at a table, 
                         and �owyn is with them.]
 
                                     �OWYN
                         They had no warning. They were unarmed. 
                         Now the wildmen are moving through the 
                         Westfold, burning as they go. Rick, 
                         cot and tree.
 
                                     FREDA
                         Where�s mama?

                                     �OWYN
                         Shh...

                                     GANDALF
                         This is but a taste of the terror that 
                         Saruman will unleash. All the more potent 
                         for he is driven now by fear of Sauron. 
                         Ride out and meet him head on. Draw 
                         him away from your women and children. 
                         [Leans forward and puts a hand on Th�oden�s 
                         chair. Th�oden looks at his hand warily.] 
                         You must fight.
 
                                     ARAGORN
                         You have two thousand good men riding 
                         north as we speak. �omer is loyal to 
                         you. His men will return and fight for 
                         their king.
 
                                     TH�ODEN
                         They will be three hundred leagues from 
                         here by now. �omer cannot help us. I 
                         know what it is that you want of me. 
                         But I will not bring further death to 
                         my people. I will not risk open war.
 
                         
                         [Gimli takes a bite of his bread as 
                         he watches the exchange between Aragorn 
                         and Th�oden.]
 
                                     ARAGORN
                         Open war is upon you. Whether you would 
                         risk it or not.
 
                                     TH�ODEN
                         When last I looked, Th�oden, not Aragorn, 
                         was king of Rohan.
 
                         [Gimli takes a drink and burps.]

                                     GANDALF
                         Then what is the king�s decision?

                         [Scene shifts to outside Meduseld]
 
                         
                                     H�MA
                         By order of the king, the city must 
                         empty. We make for the refuge of Helm�s 
                         Deep. Do not burden yourselves with 
                         treasures. Take only what provisions 
                         you need.
 
                         [People are moving about, gathering 
                         their belongings and preparing to move. 
                         Gandalf, Aragorn, Legolas and Gimli 
                         walk towards the stables.]
 
                                     GIMLI
                         Helm�s Deep! They flee to the mountains 
                         when they should stand and fight. Who 
                         will defend them if not their king.
 
                         
                                     ARAGORN
                         He�s only doing what he thinks is best 
                         for his people. Helm�s Deep has saved 
                         them in the past.
 
                         [They enter the stables]

                                     GANDALF
                         There is no way out of that ravine. 
                         Th�oden is walking into a trap. He thinks 
                         he�s leading them to safety. What they 
                         will get is a massacre. Th�oden has 
                         a strong will but I fear for him. I 
                         fear for the survival of Rohan. He will 
                         need you before the end, Aragorn. The 
                         people of Rohan will need you. The defences 
                         HAVE to hold.
 
                                     ARAGORN
                         They will hold.

                                     GANDALF
                         [Turns to Shadowfax and strokes him] 
                         The Grey Pilgrim... that�s what they 
                         used to call me. Three hundred lives 
                         of men I�ve walked this earth and now 
                         I have no time. With luck, my search 
                         will not be in vain. Look to my coming 
                         at first light on the fifth day. At 
                         dawn, look to the East.
 
                                     ARAGORN
                         [Opens the stall gates] Go.

                         [Legolas jumps back as Gandalf rides 
                         out of the stable and over the plains 
                         of Rohan.]
 


                         [�owyn opens a chest in which lies a 
                         sword. She unsheathes it and begins 
                         to practice. She swings around and is 
                         met by Aragorn, who blocks her parry.]
 
                         
                                     ARAGORN
                         You have some skill with a blade.

                         [With a swift move, �owyn swings her 
                         sword and renders Aragorn vulnerable, 
                         gaining the upper hand.]
 
                                     �OWYN
                         [Stepping back and sheathing her sword.] 
                         Women of this country learned long ago: 
                         Those without swords may still die upon 
                         them. I fear neither death nor pain.
 
                         
                                     ARAGORN
                         What do you fear, my lady?

                                     �OWYN
                         A cage. To stay behind bars until use 
                         and old age accept them and all chance 
                         of valor has gone beyond recall or desire.
 
                         
                                     ARAGORN
                         You are a daughter of kings, a shieldmaiden 
                         of Rohan. [He sheaths his knife.] I 
                         do not think that would be your fate.
 
                         
                         [He bows and �owyn gazes after him as 
                         he walks away.]
 


                         [The people of Rohan are moving out 
                         of Edoras towards Helm�s Deep, with 
                         Th�oden leading the way. At Isengard, 
                         Gr�ma confers with Saruman, holding 
                         a cloth to his mouth.]
 
                                     GR�MA
                         Th�oden will not stay at Edoras. It�s 
                         vulnerable, he knows this. He will expect 
                         an attack on the city. They will flee 
                         to Helm�s Deep, the great fortress of 
                         Rohan. It is a dangerous road to take 
                         through the mountains. They will be 
                         slow. They will have women and children 
                         with them.
 
                         [Saruman�s eyebrows rise in response. 
                         He walks through the depths of Isengard 
                         and gives orders to an Orc.]
 
                                     SARUMAN
                         Send out your warg riders.

                         [The Orc smiles. In a pit behind him, 
                         ferocious growls are heard and shadows 
                         dances.]
 


                         [Gollum is trying to catch a fish in 
                         the river. He slips and falls, grasping 
                         at a slippery fish as he goes. Frodo 
                         and Sam follow behind.]
 
                                     SAM
                         Hey Stinker! Don�t go getting too far 
                         ahead!
 
                                     FRODO
                         Why do you do that?

                                     SAM
                         What?

                                     FRODO
                         Call him names; run him down all the 
                         time.
 
                                     SAM
                         Because� because that's what he is, 
                         Mr. Frodo. There's naught left in 'im 
                         but lies and deceit. It's the Ring he 
                         wants. It's all he cares about.
 
                                     FRODO
                         [Glaring at Sam] You have no idea what 
                         it did to him. What it�s still doing 
                         to him. [He walks past Sam and stops.] 
                         I want to help him, Sam...
 
                                     SAM
                         Why?

                                     FRODO
                         Because I have to believe he can come 
                         back.
 
                                     SAM
                         You can�t save him, Mr. Frodo.

                                     FRODO
                         [Snapping at Sam]What do you know about 
                         it? Nothing!
 
                         [Sam walks away slowly.]

                                     FRODO
                         [With remorse] I'm sorry, Sam. I don't 
                         know why I said that.
 
                                     SAM
                         [Looks back at Frodo with tears in his 
                         eyes.] I do. It's the Ring. You can't 
                         take your eyes off it. I've seen you. 
                         You're not eating. You barely sleep. 
                         It's taken a hold of you, Mr Frodo. 
                         You have to fight it!
 
                                     FRODO
                         [Grows angry again] I know what I have 
                         to do Sam. The Ring was entrusted to 
                         me! It's my task! Mine! My own! [He 
                         walks away]
 
                                     SAM
                         Can�t you hear yourself? Don�t you know 
                         who you sound like?
 
                         [Frodo continues to walk away without 
                         looking back.]
 


                         [Nighttime, Frodo and Sam are asleep. 
                         Gollum is crouching in a corner by himself.]
 
                         
                                     GOLLUM
                         We wants it. We needs it. Must have 
                         the precioussss. They stole it from 
                         us. Sneaky little hobbitsesss. Wicked, 
                         trickssssy, falssse!
 
                                     SM�AGOL
                         No! Not Master.

                                     GOLLUM
                         Yes, precious. False. They will cheat 
                         you, hurt you, lie.
 
                                     SM�AGOL
                         Master�s my friend.

                                     GOLLUM
                         [Tauntingly] You don�t have any friends. 
                         Nobody likes YOU...
 
                                     SM�AGOL
                         [Covers his ears] Not listening. I�m 
                         not listening.
 
                                     GOLLUM
                         You�re a liar and a thief.

                                     SM�AGOL
                         [Shaking his head] Nope.

                                     GOLLUM
                         Mur�derer�!

                                     SM�AGOL
                         [Starts to weep and whimper] Go away.
 
                         
                                     GOLLUM
                         Go away! [Cackles] HAHAHAHA!!

                                     SM�AGOL
                         [Weeping and in a small voice] I hate 
                         you. I hate you!
 
                                     GOLLUM
                         [Fiercely] Where would you be without 
                         me? *Gollum, gollum*. I saved us. It 
                         was me. We survived because of me!
 
                         
                                     SM�AGOL
                         [Resolute] Not anymore.

                                     GOLLUM
                         [Startled] What did you say?

                                     SM�AGOL
                         Master looks after us now. We don�t 
                         need you.
 
                                     GOLLUM
                         What?

                                     SM�AGOL
                         Leave now and never come back.

                                     GOLLUM
                         No!!

                                     SM�AGOL
                         [Louder] Leave now and never come back!
 
                         
                                     GOLLUM
                         [Growls and bares his teeth] Arrrgh!!!
 
                         
                                     SM�AGOL
                         LEAVE. NOW. AND. NEVER. COME. BACK!
 
                         
                         [Sm�agol pants and then looks around.]
 
                         
                                     SM�AGOL
                         We... we told him to go away! And away 
                         he goes, preciousss. [He hops around 
                         in joy and does a little dance.] Gone, 
                         gone, gone! Sm�agol is free!
 
                         [The next day, while the hobbits were 
                         resting, Sm�agol comes back with two 
                         rabbits and drops them onto Frodo�s 
                         lap.]
 
                                     SM�AGOL
                         Look! Look! See what Sm�agol finds! 
                         Hehehe! Hahaha!
 
                         [Frodo looks at up him with bloodshot 
                         eyes. He smiles at Sm�agol and looks 
                         at Sam. Sm�agol raises a fist in self-congratulation 
                         and dances around. He then picks up 
                         one of the rabbits and snaps the rabbit's 
                         back in front of Frodo.]
 
                                     SM�AGOL
                         They are young. They are tender. They 
                         are nice. Yes they are! Eat them! Eat 
                         them!
 
                         [He bites and tears into the raw meat. 
                         Sam rushes over and snatches the rabbit 
                         out of Gollum�s hands]
 
                                     SAM
                         You�ll make him sick, you will, behaving 
                         like that! [Holding up the two rabbits] 
                         There�s only one way to eat a brace 
                         of coneys.
 
                         [A pot of stew is simmering over a fire.]
 
                         
                                     SM�AGOL
                         [Looking into the pot] Argh!! What�s 
                         it doing! Stupid fat hobbit! It ruins 
                         it!
 
                                     SAM
                         What�s to ruin? There�s hardly any meat 
                         on �em.
 
                         [A faint calling sound catches the attention 
                         of Frodo.]
 
                                     SAM
                         What we need is a few good taters.
 
                         
                                     GOLLUM
                         What�s taters, preciousss? What�s taters 
                         uh?
 
                                     SAM
                         PO-TAY-TOES! Boil �em. Mash �em. Stick 
                         �em in a stew. Lovely big golden chips 
                         with a nice piece of fried fish....
 
                         
                                     SM�AGOL
                         [Sticks out his tongue in disgust] Pbbbttt!!
 
                         
                                     SAM
                         Even you couldn�t say no to that. [He 
                         takes a sip of the stew]
 
                                     SM�AGOL
                         Oh yes we could! Spoil nice fish... 
                         [scrambles up close to Sam] Give it 
                         to usss rrraw... and wrrriggling! [Makes 
                         sickeningly happy face.] You keep nasty 
                         chips. [Hops away]
 
                                     SAM
                         You�re hopeless.

                         [Frodo follows the source of the sound. 
                         Sam suddenly notices that Frodo is no 
                         longer in his sight.]
 
                                     SAM
                         Mr. Frodo?

                         [He goes in search of Frodo and finds 
                         him lying down near some bushes looking 
                         at a Haradrim army marching across the 
                         land. He moves to lie low beside Frodo. 
                         Sm�agol also moves in beside Frodo.]
 
                         
                                     SAM
                         Who are they?

                                     GOLLUM
                         Wicked men. Servants of Sauron. They 
                         are called to Mordor. The Dark One is 
                         gathering all armies to him. It won�t 
                         be long now. He will soon be ready.
 
                         
                                     SAM
                         Ready to do what?

                                     GOLLUM
                         To make his war. The last war that will 
                         cover all the world in shadow.
 
                                     FRODO
                         We�ve got to get moving. Come on, Sam.
 
                         
                                     SAM
                         [Suddenly grabs Frodo�s arm] Mr Frodo! 
                         Look! It�s an Oliphaunt!
 
                         [Gigantic Oliphaunts appear, carrying 
                         soldiers and supplies on their backs.]
 
                         
                                     SAM
                         No one at home will believe this...
 
                         
                         [Sm�agol slips away unnoticed.]

                                     FRODO
                         [Looking around] Sm�agol?

                         [Suddenly, pandemonium breaks out from 
                         below; the soldiers are being ambushed. 
                         Cloaked rangers are firing deadly arrows 
                         at the soldiers and Oliphaunts from 
                         behind bushes. One of the Oliphaunts 
                         starts trumpeting and stomping towards 
                         Frodo and Sam, swinging his huge trunk 
                         and tusks. Faramir takes aim and shoots 
                         a soldier. He falls from the Oliphaunt 
                         and lands right behind Frodo and Sam, 
                         dead.]
 
                                     FRODO
                         We�ve lingered here too long. Come on, 
                         Sam!
 
                         [Frodo runs right into a Gondorian Ranger, 
                         who grabs hold of him and throws him 
                         onto his back. Sam sees Frodo in danger 
                         and grapples for his sword]
 
                                     SAM
                         Ah!

                         [He charges at Faramir but is grabbed 
                         by another ranger and thrown down. A 
                         sword appears at his throat. Faramir 
                         appears.]
 
                                     FARAMIR
                         Bind their hands.



                         [Meanwhile, the Rohirrim refugees are 
                         heading towards Helm�s Deep. Gimli is 
                         on a horse, chatting with �owyn who 
                         is leading it by the reins.]
 
                                     GIMLI
                         It�s true you don�t see many Dwarf women. 
                         And in fact, they are so alike in voice 
                         and appearance, haha that they�re often 
                         mistaken for Dwarf men.
 
                         [�owyn smiles and looks back at Aragorn.]
 
                         
                                     ARAGORN
                         [Gestures and whispers] It�s the beards....
 
                         
                                     GIMLI
                         And this, in turn, has given rise to 
                         the belief that there are no Dwarf women. 
                         And that dwarves just spring out of 
                         holes in the ground!
 
                                     �OWYN
                         [Laughs gaily] Hahahaha!!

                                     GIMLI
                         Hehehe! Which is of course ridiculous� 
                         Whoa!!
 
                         [The horse suddenly rears up and gallops 
                         away as �owyn loses her hold on the 
                         reins. Gimli falls off after a short 
                         distance and lands with a loud thump.]
 
                         
                                     �OWYN
                         Ooh! [She rushes forward to Gimli]
 
                         
                                     GIMLI
                         [Struggling to get up] It�s alright, 
                         it�s alright. Nobody panic. That was 
                         deliberate. It was deliberate.
 
                         [�owyn helps Gimli up. She laughs as 
                         she brushes him off and looks back at 
                         Aragorn with the sun behind her and 
                         the wind in her hair. At that particular 
                         moment, Aragorn seems enchanted by �owyn�s 
                         light-hearted image. That night. Aragorn 
                         could not sleep and smokes his pipe 
                         as he thinks of Arwen.]
 
                                     ARWEN (V.O.)
                         The light of the Evenstar does not wax 
                         and wane� It is mine to give to whom 
                         I will... Like my heart� Go to sleep...
 
                         
                                     [FLASHBACK
                         Aragorn is lying on a chaise in Rivendell. 
                         He opens his eyes and sees Arwen before 
                         him, smiling down at him.]
 
                                     ARAGORN
                         I am asleep. This is a dream.

                                     ARWEN
                         [Bends down to kiss him] Then it is 
                         a good dream. Sleep�
 
                         [She kisses him lightly on the lips 
                         and then steps away to look out upon 
                         Rivendell. Aragorn closes his eyes but 
                         for a while. He looks over at Arwen.]
 
                         
                                     ARAGORN
                         Min l� pennich nin i aur hen telitha. 
                         (You told me once that this day would 
                         come.)
 
                                     ARWEN
                         [Turns to look at Aragorn] � i vethed... 
                         n� i onnad. Boe bedich go Frodo. Han 
                         b�d l�n. (This is not the end... it 
                         is the beginning. You must go with Frodo. 
                         That is your path.)
 
                                     ARAGORN
                         [Walks over to Arwen] Dolen i v�d o 
                         nin. (My path is hidden from me.)
 
                         
                                     ARWEN
                         Si peliannen i v�d na dail l�n. Si boe 
                         �-dhannathach. (It is already laid before 
                         your feet. You cannot falter now.)
 
                         
                                     ARAGORN
                         Arwen�

                         [Arwen hushes him, resting her fingers 
                         on his lips. As her hands moves down 
                         to rest on the Evenstar pendant around 
                         Aragorn�s neck, he clasps her hand in 
                         his and they gaze into each other�s 
                         eyes.]
 
                                     ARWEN
                         Ae �-esteliach nad... estelio han. Estelio 
                         ammen. (If you trust nothing else... 
                         trust this. Trust us.)
 
                         [They kiss.]



                         [The next day, on the journey to Helm�s 
                         Deep. �owyn is walking alongside Aragorn.]
 
                         
                                     �OWYN
                         Where is she? The woman who gave you 
                         that jewel.
 
                                     [ARAGORN SMILES AND SAYS NOTHING. FLASHBACK
                         Elrond is speaking to Aragorn in Rivendell, 
                         before he sets out with the Fellowship.]
 
                         
                                     ELROND
                         Our time here is ending. Arwen�s time 
                         is ending. Let her go. Let her take 
                         the ship into the west. Let her bear 
                         away her love for you to the Undying 
                         Lands. There it will be evergreen.
 
                         
                                     ARAGORN
                         But never more than a memory.

                                     ELROND
                         I will not leave my daughter here to 
                         die.
 
                                     ARAGORN
                         She stays because she still has hope.
 
                         
                                     ELROND
                         She stays for YOU! She belongs with 
                         her people!
 
                         [Aragorn and Arwen are together before 
                         the Fellowship departs.]
 
                                     ARAGORN
                         Idhren emmen menna gui ethwel. Hae o 
                         auth a n�r a naeth. (You have a chance 
                         for another life. Away from war... grief... 
                         despair.)
 
                                     ARWEN
                         Why are you saying this?

                                     ARAGORN
                         I am mortal; you are Elfkind. It was 
                         a dream, Arwen, nothing more.
 
                         [He takes Arwen�s hand to return the 
                         Evenstar necklace to her.]
 
                                     ARAGORN
                         This belongs to you.

                                     ARWEN
                         [Closes Aragorn�s hand over the Evenstar] 
                         It was a gift. Keep it.
 
                         [Scene shifts back to Aragorn and �owyn]
 
                         
                                     �OWYN
                         My lord?

                                     ARAGORN
                         She is sailing to the Undying Lands, 
                         with all that is left of her kin.
 
                         
                         [Gamling and Ham� ride to the front. 
                         Legolas watches them as they pass.]
 
                         
                                     GAMLING
                         What is it? H�ma?

                         [Their horses become restless.]

                                     H�MA
                         [Looking around] I�m not sure.

                         [A warg scout appears on a slope above 
                         and charges at them. The warg attacks 
                         H�ma and kills him.]
 
                                     GAMLING
                         Wargs!

                         [Just as it starts to turn on Gamling, 
                         Legolas runs over and kills the warg 
                         with an arrow. He then draws his knife 
                         and kills the Orc.]
 
                                     LEGOLAS
                         Argh! [Shouts to Aragorn] A scout!
 
                         
                                     TH�ODEN
                         What is it? What do you see?

                                     ARAGORN
                         [Running back to Th�oden] Wargs! We 
                         are under attack!
 
                         [Hearing the alarm, the villagers begin 
                         to cry and panic.]
 
                                     ARAGORN
                         Get them out of here!

                                     TH�ODEN
                         All riders to the head of the column!
 
                         
                                     GIMLI
                         [Trying to mount Arod] Come on, get 
                         me up here, I�m a rider! Argh!
 
                         [Gimli gets onto the horse with some 
                         help. Legolas gazes into the distance 
                         and sees many warg-riders coming fast 
                         towards them, kicking up dust trails 
                         as they go.]
 
                                     TH�ODEN
                         [To �owyn] You must lead the people 
                         to Helm�s Deep. And make haste!
 
                                     �OWYN
                         I can fight!

                                     TH�ODEN
                         No! You must do this... for me.

                         [�owyn holds Th�oden�s gaze for a moment 
                         and then turn to attend to the villagers.]
 
                         
                                     TH�ODEN
                         [To his men] Follow me! Yah!

                                     GIMLI
                         [Tries to get Arod to move] Forward. 
                         I mean, charge forward! March forward! 
                         [Arod moves off with Gimli seated rather 
                         unsteadily.] That�s it! Go on!
 
                                     �OWYN
                         [To the villagers] Make for the lower 
                         ground! Stick together!
 
                         [She looks back at the Rohirrim and 
                         sees Aragorn on Hasufel. They hold each 
                         other�s gaze for a moment before Aragorn 
                         turns to join Th�oden. �owyn departs 
                         with the villagers in the opposite direction.]
 
                         
                         [Legolas takes aim at the distant target 
                         and fells a warg rider. He draws another 
                         arrow and kills another. Just as he 
                         reaches for a third arrow, he sees Th�oden 
                         and company approaching. He quickly 
                         runs and mounts Arod with a smooth leap 
                         and joins in the fray with Gimli behind 
                         him on horseback.]
 
                                     WARG-RIDERS
                         Argh!!

                                     TH�ODEN
                         CHARGE!!

                         [The Rohirrim and warg riders crash 
                         head on and the battle begins. Th�oden 
                         and company hack away at the warg riders. 
                         In the midst of fighting, Gimli falls 
                         off Arod. He turns to find a warg growling 
                         at him.]
 
                                     GIMLI
                         Bring your pretty face to my axe!

                         [Just as the warg leaps at Gimli, Legolas 
                         kills it with one shot.]
 
                                     GIMLI
                         [Jumping back as the warg falls, outraged] 
                         Argh! That one counts as mine!
 
                         [As Gimli swings his axe at another 
                         warg, it dies and falls onto Gimli, 
                         pinning him under.]
 
                                     GIMLI
                         Argh! Stinking creature. Argh!

                         [As he tries to lift the warg off him, 
                         an Orc leans over them both. Gimli kills 
                         him quickly, twisting his neck, and 
                         it lands on him also. Gimli sniffs at 
                         the Orc and makes a face. He tries to 
                         lift both the warg and Orc off him. 
                         Just then, another warg comes upon him 
                         and bares its teeth, ready to strike. 
                         ]
 
                                     GIMLI
                         [Eyes widening] Ooh..!

                         [Aragorn plucks a spear as he passes 
                         on horseback and throws it at the warg. 
                         It dies, landing on Gimli and adding 
                         to the pile on top of him.]
 
                                     GIMLI
                         [As the warg lands on him] Oooh!!

                         [Th�oden stabs at a warg rider. Aragorn 
                         is knocked off Hasufel and attacked 
                         by Sharku. Aragorn tries to kill the 
                         warg rider but Sharku blocks his attempt 
                         and grabs Aragorn by the neck, while 
                         the latter is half-dragged by the warg. 
                         In the struggle, Sharku is thrown off 
                         and he rips the Evenstar pendant from 
                         Aragorn�s neck as he falls. Aragorn 
                         tries to let go of the warg but finds 
                         his wrist tangled with the saddle straps. 
                         He tries unsuccessfully to disentangle 
                         himself and is dragged closer and closer 
                         to the edge of a cliff at great speed. 
                         The warg runs right off the cliff and 
                         they both disappear over the edge. The 
                         battle is winding down as the Rohirrim 
                         finish off the last few wargs and Orcs.]
 
                         
                                     LEGOLAS
                         [Looking around] Aragorn!

                                     GIMLI
                         Aragorn?

                         [They come near to the cliff and hear 
                         Sharku wheezing and laughing]
 
                                     GIMLI
                         [Standing over the dying Orc] Tell me 
                         what happened and I will ease your passing.
 
                         
                                     SHARKU
                         He�s [cough] dead. [Laughs evilly] Took 
                         a little tumble off the cliff.
 
                                     LEGOLAS
                         [Looks towards the edge of the cliff, 
                         and grabs Sharku] You lie!
 
                         [Sharku chortles and dies. Legolas looks 
                         down at Sharku�s fist and finds the 
                         Evenstar pendant. He takes it, runs 
                         to the edge of the cliff and looks down 
                         to see the great drop and rushing waters 
                         below, with no sign of Aragorn. Gimli 
                         comes to stand beside him.]
 
                                     TH�ODEN
                         [To his men] Get the wounded on horses. 
                         The wolves of Isengard will return. 
                         Leave the dead.
 
                         [Legolas turns to Th�oden, an expression 
                         of perplexed anger on his face.]
 
                                     TH�ODEN
                         [Puts a hand on Legolas' shoulder] Come.
 
                         
                         [He leaves Legolas and Gimli to stare 
                         down at the river.]
 


                         [The Rohan villagers are drawing close 
                         to Helm�s Deep. Cries of relief are 
                         heard as the refuge is within sight.]
 
                         
                                     REFUGEES
                         Helm�s Deep! At last! There it is!
 
                         
                                     OLD WOMAN
                         [To �owyn] We�re safe, my lady! Thank 
                         you!
 
                         [�owyn embraces the woman and they walk 
                         on towards Helm�s Deep. The gate is 
                         opened for the villagers. Many have 
                         already taken refuge within and are 
                         resting along the passage. �othain and 
                         Freda run towards their mother.]
 
                                     FREDA
                         Mama!

                                     MORWEN
                         �othain! Freda!

                         [The three hug and cry with joy. Th�oden 
                         and company returns from the battle 
                         with warg riders]
 
                                     GAMLING
                         Make way for Th�oden!

                                     SOLDIERS
                         Sire!

                                     GAMLING
                         Make way for the king!

                         [�owyn rushes down to meet them]

                                     �OWYN
                         [Looking about] So few. So few of you 
                         have returned.
 
                                     TH�ODEN
                         [Dismounting] Our people are safe. We 
                         have paid for it with many lives.
 
                         
                                     GIMLI
                         [Going up to �owyn] My lady...

                                     �OWYN
                         Lord Aragorn, where is he?

                                     GIMLI
                         He fell...

                         [�owyn is shaken and raises teary eyes 
                         to Th�oden. The latter looks down and 
                         then walks away, confirming her unasked 
                         question.]
 


                         [At the battlements]

                                     TH�ODEN
                         Draw all our forces behind the wall. 
                         Bar the gate, and set a watch on the 
                         surround.
 
                                     GAMLING
                         What of those who cannot fight, my lord? 
                         The women and children?
 
                                     TH�ODEN
                         Get them into the caves. [Walks down 
                         the steps and past a sewer gate] Saruman's 
                         arm would have grown long indeed if 
                         he thinks he can reach us here.
 
                         [Camera zooms in on the gate]

                                     GR�MA (V.O.)
                         Helm�s Deep has one weakness. Its outer 
                         wall is solid rock but for a small culvert 
                         at its base which is little more than 
                         a drain.
 
                         [Camera turns to Gr�ma and Saruman at 
                         Orthanc. Saruman is pouring some dark 
                         dry substances into a vessel. Gr�ma 
                         is holding a lit candle in his hand.]
 
                         
                                     GR�MA
                         How? How can fire undo stone? What kind 
                         of device could bring down the wall?
 
                         
                         [As he steps closer to the vessel, Saruman 
                         takes hold of Gr�ma�s hand and pushes 
                         the candle away from the vessel firmly.]
 
                         
                                     SARUMAN
                         If the wall is breached, Helm's Deep 
                         will fall.
 
                         [He walks away towards the balcony.]
 
                         
                                     GR�MA
                         [Following Saruman] Even if it is breached, 
                         it would take a number beyond reckoning, 
                         thousands to storm the keep.
 
                                     SARUMAN
                         Tens of thousands.

                                     GR�MA
                         But, my lord, there is no such force.
 
                         
                         [Both of them came onto the balcony 
                         of the tower. Gr�ma suddenly sees and 
                         hears the enormous armies laid out below 
                         in neat rows and is astounded and awed. 
                         He continues to hold the extinguished 
                         candle aloft as he gapes at the vast 
                         army below. A horn is sounded, announcing 
                         the appearance of Saruman. A loud cheer 
                         is heard from the army. Saruman raises 
                         a hand.]
 
                                     SARUMAN
                         A new power is rising. Its victory is 
                         at hand!
 
                         [The army cheers and roars.]

                                     SARUMAN
                         This night, the land will be stained 
                         with the blood of Rohan! March to Helms 
                         Deep! Leave none alive!
 
                         [The camera keeps zooming out from the 
                         balcony over the incredible size of 
                         Saruman�s army, past Uruk-hai, spears, 
                         and banners and yet more Uruk-hai. The 
                         camera focuses back on Saruman who then 
                         raises his hands in the air]
 
                                     SARUMAN
                         To war!!

                         [The army cheers and roars even louder.]
 
                         
                                     SARUMAN
                         [Sneers] There will be no dawn for Men.
 
                         
                         [A tear flows down Gr�ma�s cheek. The 
                         Uruk-hai army began their march to Helm�s 
                         Deep.]
 


                         [Merry and Pippin are travelling through 
                         the forest, carried by Treebeard.]
 
                         
                                     PIPPIN
                         Look! There�s smoke to the south!

                                     TREEBEARD
                         There is always smoke rising from Isengard 
                         these days.
 
                                     MERRY
                         Isengard?

                         [The two hobbits climb higher up onto 
                         Treebeard for a better view.]
 
                                     TREEBEARD
                         There was a time when Saruman would 
                         walk in my woods. But now he has a mind 
                         of metal and wheels. He no longer cares 
                         for growing things.
 
                         [Pippin and Merry are now on top of 
                         Treebeard and they see a massive army 
                         moving across the land]
 
                                     PIPPIN
                         What is it?

                                     MERRY
                         It�s Saruman�s army! The war has started.
 
                         


                         [Aragorn is floating in the river, unconscious. 
                         He is washed ashore and dreams of Arwen.]
 
                         
                                     ARWEN
                         [Kissing him on the lips] May the grace 
                         of the Valar protect you.
 
                         [A horse arrives and nudges Aragorn, 
                         turning him over and nuzzling him.]
 
                         
                                     ARAGORN
                         [Mumbles] Brego� [He grabs hold of Brego�s 
                         mane, pulls himself onto the horse and 
                         rides slowly to Helms Deep.]
 
                         [Arwen is lying on her bed, deep in 
                         thought.]
 
                                     ELROND
                         [Coming into her room] Arwen.

                         [Arwen hears him and sits up.]

                                     ELROND
                         Tollen i l�. I chair gwannar na Valannor. 
                         Si bado, no c�rar. (Arwen, it is time. 
                         The ships are leaving for Valinor. Go 
                         now... before it is too late.)
 
                                     ARWEN
                         I have made my choice.

                                     ELROND
                         He is not coming back. Why do you linger 
                         here when there is no hope?
 
                                     ARWEN
                         There is still hope.

                                     ELROND
                         [Walks towards window and looks out] 
                         If Aragorn survives this war, you will 
                         still be parted. If Sauron is defeated, 
                         and Aragorn made king and all that you 
                         hope for comes true, you will still 
                         have to taste the bitterness of mortality. 
                         Whether by the sword or the slow decay 
                         of time, Aragorn will die.
 
                         [Arwen sees a vision of her future as 
                         Elrond speaks. She is dressed as a queen 
                         in mourning garb and looking down upon 
                         Aragorn, a crown on his brow, And�ril 
                         in his hand, and dead. Mourners are 
                         walking around the altar, paying their 
                         final respects. Arwen is weeping.]
 
                         
                                     ELROND
                         And there will be no comfort for you. 
                         No comfort to ease the pain of his passing. 
                         He will come to death, an image of the 
                         splendor of the kings of men in glory 
                         undimmed before the breaking of the 
                         world.
 
                         [The body of Aragorn is now cast as 
                         a monument in stone. Arwen stands before 
                         the monument, veiled and in black.]
 
                         
                                     ELROND
                         But you, my daughter, you will linger 
                         on in darkness and in doubt. As nightfall 
                         in winter that comes without a star. 
                         Here you will dwell, bound to your grief, 
                         under the fading trees, until all the 
                         world is changed and the long years 
                         of your life are utterly spent.
 
                         [Still veiled in black, Arwen is walking 
                         alone through the deserted woods of 
                         Lothl�rien.]
 
                                     ELROND
                         [Tuning to Arwen] Arwen... there is 
                         nothing for you here, only death.
 
                         
                         [The vision ends and Arwen weeps with 
                         sadness and fear. Elrond comes to sit 
                         beside his daughter and raises a hand 
                         to her cheek.]
 
                                     ELROND
                         A im, �-'erin veleth l�n? (Do I not 
                         also have your love?)
 
                                     ARWEN
                         [Crying and moving into her father�s 
                         embrace] Gerich meleth n�n, ada. (You 
                         have my love, father)
 
                         [Elves, cloaked and carrying a lantern 
                         each, are setting off from Rivendell 
                         on their journey to the West. Elrond 
                         looks on as Arwen leaves with them. 
                         Arwen turns back to look at her father 
                         one last time before she departs. Elrond 
                         continues to stare after her with an 
                         expression of resigned sadness.]
 
                         [Elrond is standing by a window. He 
                         hears Galadriel speaking.]
 
                                     GALADRIEL
                         I amar prestar aen... han mathon ne 
                         nen, han mathon ne chae a han nostan 
                         ned gwilith. (The world has changed... 
                         I feel it in the water, I feel it in 
                         the earth, I smell it in the air.) The 
                         power of the enemy is growing. [Saruman 
                         is communicating with Sauron via the 
                         Palant�r.] Sauron will use his puppet 
                         Saruman to destroy the people of Rohan. 
                         Isengard has been unleashed. [View of 
                         Saruman's marching army] The eye of 
                         Sauron now turns to Gondor, the last 
                         free kingdom of men. [View of Osgiliath] 
                         His war on this country will come swiftly. 
                         He senses the Ring is close. The strength 
                         of the Ringbearer is failing. In his 
                         heart, Frodo begins to understand. [Close-up 
                         of Galadriel] The quest will claim his 
                         life. You know this. You have foreseen 
                         it. It is the risk we all took.
 
                         [Close-up of the Ring spinning in slow 
                         motion]
 
                                     GALADRIEL (V.O.)
                         In the gathering dark, the will of the 
                         Ring grows strong. It works hard now 
                         to find its way back into the hands 
                         of men.
 
                         [We see Faramir and Gondorian rangers 
                         with the captured Frodo and Sam.]
 
                         
                                     GALADRIEL (V.O.)
                         Men, who are so easily seduced by its 
                         power. The young captain of Gondor has 
                         but to extend his hands, take the Ring 
                         for his own and the world will fall. 
                         It is close now, so close to achieving 
                         its goal.
 
                         [Faramir and company have reached Henneth 
                         Ann�n. Frodo and Sam and being carries, 
                         blinded-folded into the cave.]
 
                                     GALADRIEL (V.O.)
                         For Sauron will have dominion of all 
                         life on this Earth, even unto the ending 
                         of the world. The time of the Elves 
                         is over.
 
                         [Close-up of Galadriel's luminous eyes 
                         with their deep pools of wisdom. We 
                         then see Elrond in his library, looking 
                         at the painting of Isildur facing down 
                         Sauron with the broken blade of Narsil.]
 
                         
                                     GALADRIEL (V.O.)
                         Do we leave Middle-earth to its fate? 
                         Do we let them stand alone?
 


                         [Scene returns to Henneth Ann�n. Faramir 
                         is conferring with his man. They unroll 
                         a map.]
 
                                     FARAMIR
                         What news?

                                     MADRIL
                         Our scouts report Saruman has attacked 
                         Rohan. Th�oden�s people have fled to 
                         Helm�s Deep. [Points at the map] But 
                         we must look to our own borders. Faramir, 
                         Orcs are on the move. Sauron is marshalling 
                         an army. Easterlings and Southrons are 
                         passing through the Black Gate.
 
                                     FARAMIR
                         How many?

                                     MADRIL
                         Some thousands. More come every day.
 
                         
                                     FARAMIR
                         Who�s covering the river to the north?
 
                         
                                     MADRIL
                         We pulled 500 men at Osgiliath, but 
                         if the city is attacked, we won�t hold 
                         it.
 
                                     FARAMIR
                         [Tracing on the map] Saruman attacks 
                         from Isengard. Sauron from Mordor. The 
                         fight will come to men on both fronts. 
                         Gondor is weak. Sauron will strike us 
                         soon. And he will strike hard. He knows 
                         now we do not have the strength to repel 
                         him.
 
                         [The hobbits are unbound and blindfolds 
                         taken off them by Damrod and another 
                         ranger. Sam and Frodo find themselves 
                         in a cave behind a waterfall, with Damrod 
                         sitting behind them on a rock constantly 
                         watching them. Faramir comes up to them 
                         and sits.].
 
                                     FARAMIR
                         My men tell me that you are Orc spies.
 
                         
                                     SAM
                         Spies?! Now wait just a minute!

                                     FARAMIR
                         Well if you�re not spies, then who are 
                         you?
 
                         [Frodo and Sam remain silent.]

                                     FARAMIR
                         Speak.

                                     FRODO
                         We are hobbits of the Shire. Frodo Baggins 
                         is my name and this is Samwise Gamgee.
 
                         
                                     FARAMIR
                         Your bodyguard?

                                     SAM
                         His gardener.

                                     FARAMIR
                         And where is your skulking friend? That 
                         gangrel creature. He had an ill-favoured 
                         look.
 
                                     FRODO
                         [The merest hesitation.] There was no 
                         other.
 
                         [Sam looks shifty-eyed and uncomfortable.]
 
                         
                                     FRODO
                         We set out from Rivendell with seven 
                         companions. One we lost in M�ria. Two 
                         were my kin. A Dwarf there was also, 
                         and an Elf. And two men, Aragorn, son 
                         of Arathorn, and Boromir of Gondor.
 
                         
                                     FARAMIR
                         [Intently] You�re a friend of Boromir?
 
                         
                                     FRODO
                         Yes... for my part.

                                     FARAMIR
                         It will grieve you then to learn that 
                         he is dead.
 
                                     FRODO
                         [Shocked] Dead? How? When?

                                     FARAMIR
                         As one of his companions, I�d hoped 
                         you would tell me. [Pause] He was my 
                         brother.
 


                         [Faramir is sitting alone, deep in thought. 
                         Suddenly someone comes up to him.]
 
                         
                                     GONDORIAN RANGER
                         Captain Faramir. [whispers] We found 
                         the third one.
 
                         [Frodo and Sam are sleeping. Frodo awakens 
                         as Faramir stands before him.]
 
                                     FARAMIR
                         You must come with me. Now.

                         [Frodo gets up and follow. They come 
                         to the edge of the waterfall, overlooking 
                         the Forbidden Pool.]
 
                                     FARAMIR
                         [Pointing down] Down there.

                         [Frodo looks down and sees Gollum diving 
                         into the water.]
 
                                     FARAMIR
                         To enter the forbidden pool bears the 
                         penalty of death. [He gestures to archers 
                         hidden in the bushes.] They wait for 
                         my command.
 
                         [The Rangers notch their arrows]

                                     FARAMIR
                         Shall I shoot?

                         [Frodo looks stricken. Gollum emerges 
                         from the pool onto a rock. He holds 
                         a fish in his hand and starts singing, 
                         slapping the fish on the rock as he 
                         goes.]
 
                                     GOLLUM
                         [singing] The rock and pool is nice 
                         and cool, so juicy sweet! I only wish 
                         [Whacks the fish on the rock] to catch 
                         a fish [whacks], so juicy sweet! [The 
                         fish almost wriggles out of his grasp 
                         and he whacks it some more.]
 
                         [Faramir has his hand raised to order 
                         his men to shoot. At the last moment, 
                         Frodo calls out.]
 
                                     FRODO
                         Wait! [Faramir stops] This creature 
                         is bound to me. And I to him. He is 
                         our guide. Please, let me go down to 
                         him.
 
                         [Faramir nods. Frodo descends to the 
                         Forbidden Pool and approaches Gollum 
                         who is gorging on the raw fish.]
 
                                     FRODO
                         Sm�agol. [Gollum turns round at Frodo�s 
                         voice.] Master is here. Come, Sm�agol. 
                         Trust master. Come!
 
                         [Frodo gestures for Gollum to follow 
                         him.]
 
                                     GOLLUM
                         We must go now?

                                     FRODO
                         Sm�agol, you must trust master. Follow 
                         me, come on. Come. Come, Sm�agol. Nice 
                         Sm�agol. That�s it. Come on.
 
                         [With the fish between his teeth, Gollum 
                         follows Frodo warily. Suddenly he looks 
                         up in alarm and is caught by Rangers.]
 
                         
                                     FRODO
                         Don�t hurt him! Sm�agol don�t struggle! 
                         Sm�agol listen to me!
 
                                     GOLLUM
                         [wails] Master!!

                         [A black cloth is brought over Gollum's 
                         head. Frodo stares after them with a 
                         stricken expression as Faramir leads 
                         Gollum and his men away. Back in the 
                         cave, Gollum is thrown down to the ground. 
                         Crying, he crawls into a corner and 
                         curls up into ball.]
 
                                     GOLLUM
                         No! No!

                                     FARAMIR
                         Where are you leading them? Answer me!
 
                         
                                     GOLLUM
                         [Cooing, his hand stroking his shoulder] 
                         Sm�a�gol... Why does it cry, Sm�agol?
 
                         
                                     SM�AGOL
                         [Sobbing] Cruel men hurts us. Master 
                         trickst us.
 
                                     GOLLUM
                         Of course he did. I told you he was 
                         tricksy. I told you he was false.
 
                         
                                     SM�AGOL
                         [Sobbing] Master is our friend... our 
                         friend.
 
                                     GOLLUM
                         Master betrayed us.

                                     SM�AGOL
                         No, not its business. Leave us alone!
 
                         
                                     GOLLUM
                         [Hits his fist against the wall] Filthy 
                         little hobbitses. They stole it from 
                         us.
 
                                     SM�AGOL
                         [Whimpers] No... No!

                                     FARAMIR
                         What did they steal?

                                     GOLLUM
                         [Turns to Faramir with a ferocious expression] 
                         Myyy� PRECIOUSSS!! [He bares his teeth 
                         and growls] Aaaarrrggghhh!!!
 


                         [Back in their holding area, Sam and 
                         Frodo are alone.]
 
                                     SAM
                         We have to get out of here. You go. 
                         Go, now! You can do it. Use the Ring, 
                         Mr. Frodo. Just this once. Put it on. 
                         Disappear.
 
                                     FRODO
                         I can�t. You were right, Sam. You tried 
                         to tell me, but� I�m sorry. The Ring�s 
                         taking me Sam. If I put it on, he�ll 
                         find me. He�ll see.
 
                                     SAM
                         Mr. Frodo...

                         [They both stand as Faramir enters.]
 
                         
                                     FARAMIR
                         [Unsheathes his sword] So... this is 
                         the answer to all the riddles. Here 
                         in the wild I have you. Two halflings 
                         and a host of men at my call. The Ring 
                         of power within my grasp.
 
                         [Faramir lifts the Ring from Frodo's 
                         neck with the tip of his sword.]
 
                                     FARAMIR
                         A chance for Faramir, captain of Gondor, 
                         to show his quality.
 
                         [Frodo is backed up fearfully against 
                         the wall. The Ring whispers and Frodo 
                         falls into a trance. Suddenly, he grabs 
                         the Ring in his hand and jerks himself 
                         away.]
 
                                     FRODO
                         No!! [He runs away from Faramir]

                                     SAM
                         Stop it! Leave him alone! Don�t you 
                         understand? He�s got to destroy it. 
                         That�s where we�re going. Into Mordor. 
                         To the mountain of fire.
 
                         [Faramir stares at Frodo. Just then 
                         Damrod enters.]
 
                                     DAMROD
                         Osgiliath is under attack. They call 
                         for reinforcements.
 
                                     SAM
                         Please. It�s such a burden. Will you 
                         not help him?
 
                                     DAMROD
                         Captain?

                                     FARAMIR
                         Prepare to leave. The Ring will go to 
                         Gondor. [He turns to leave.]
 
                         [Sam looks after Faramir sadly.]



                         [Aragorn is riding towards Helm�s Deep. 
                         On the way, he sees an enormous Uruk-hai 
                         army marching with great speed. He quickly 
                         makes haste towards Helm�s Deep and 
                         soon sees the refuge.]
 
                                     ARAGORN
                         [Patting Brego on the neck] Mae carnen, 
                         Brego, mellon n�n. (Well done, Brego, 
                         my friend)
 
                         [He rides into Helm�s Deep to the amazement 
                         of all.]
 
                                     REFUGEES
                         He�s alive!

                                     GIMLI
                         [Pushing his way through the crowd.] 
                         Where is he? Where is he? Get out of 
                         the way. I�m gonna kill him! [He sees 
                         Aragorn.] You are the luckiest, the 
                         canniest and the most reckless man I 
                         ever knew! [He hugs Aragorn.] Bless 
                         you, laddie!
 
                                     ARAGORN
                         Gimli, where is the king?

                         [Gimli gestures to the hall. As Aragorn 
                         makes his way in, he runs into Legolas 
                         who stands waiting.]
 
                                     LEGOLAS
                         Le ab-dollen. (You�re late.) [They smile. 
                         Legolas pauses and looks at Aragorn�s 
                         wounds.] You look terrible.
 
                         [To the side, �owyn sees Aragorn and 
                         smiles joyously and with relief. Legolas 
                         takes Aragorn�s hand and gives the Evenstar 
                         pendant. Aragorn looks at the Evenstar 
                         and claps Legolas on the shoulder.]
 
                         
                                     ARAGORN
                         Hannon le. (Thank you.)

                         [�owyn looks on and smiles even as tears 
                         fill her eyes.]
 
                         [Aragorn is in the keep, conferring 
                         with Th�oden]
 
                                     TH�ODEN
                         A great host, you say?

                                     ARAGORN
                         All Isengard is emptied

                                     TH�ODEN
                         How many?

                                     ARAGORN
                         Ten thousand strong at least.

                                     TH�ODEN
                         Ten thousand?!

                                     ARAGORN
                         It is an army bred for a single purpose: 
                         to destroy the world of men. They will 
                         be here by nightfall.
 
                                     TH�ODEN
                         Let them come! [Walks away resolutely]
 
                         
                         [Along the passage behind the Deeping 
                         Wall.]
 
                                     TH�ODEN
                         [to Gamling] I want every man and strong 
                         lad able to bear arms to be ready for 
                         battle by nightfall.
 
                         [Gamling nods and goes off. Th�oden 
                         stands at the gate of Helm�s Deep, speaking 
                         to Aragorn, Legolas and Gimli.]
 
                                     TH�ODEN
                         We will cover the causeway and the gate 
                         from above. No army has ever breached 
                         the Deeping Wall or set foot inside 
                         the Hornburg.
 
                                     GIMLI
                         This is no rabble of mindless Orcs. 
                         These are Uruk-hai. Their armor is thick 
                         and their shields broad.
 
                                     TH�ODEN
                         I have fought many wars, Master Dwarf. 
                         I know how to defend my own keep.
 
                         
                         [Gimli seems miffed. Legolas claps a 
                         hand on Gimli�s shoulder as he follows 
                         Aragorn and Th�oden back in.]
 
                                     TH�ODEN
                         They will break upon this fortress like 
                         water on rock. Saruman�s hordes will 
                         pillage and burn, we�ve seen it before. 
                         Crops can be resown; homes rebuilt. 
                         Within these walls, we will outlast 
                         them.
 
                                     ARAGORN
                         They do not come to destroy Rohan�s 
                         crops or villages. They come to destroy 
                         its people. Down to the last child.
 
                         
                                     TH�ODEN
                         [Draws close to Aragorn] What would 
                         you have me do? Look at my men. Their 
                         courage hangs by a thread. If this is 
                         to be our end, then I would have them 
                         make such an end as to be worthy of 
                         remembrance.
 
                                     ARAGORN
                         Send out riders, my lord. You must call 
                         for aid.
 
                                     TH�ODEN
                         And who will come? Elves? Dwarves? We 
                         are not so lucky in our friends as you. 
                         The old alliances are dead.
 
                                     ARAGORN
                         Gondor will answer.

                                     TH�ODEN
                         Gondor? Where was Gondor when the Westfold 
                         fell? Where was Gondor when our enemies 
                         closed in around us? Where was Gon� 
                         � No, my lord Aragorn, we are alone. 
                         [He walks away, calling out orders] 
                         Get the women and children into the 
                         caves.
 
                                     GAMLING
                         We need more time to lay provisions 
                         for a siege, lord �
 
                                     TH�ODEN
                         [Cutting him off] There is no time. 
                         War is upon us!
 
                                     ROHAN CAPTAIN
                         [to the soldiers] Secure the gate!
 
                         
                         [Men rush to prepare for battle as flocks 
                         of carrion crows circle overhead.]
 
                         


                         [Treebeard walks through the forest 
                         carrying Merry and Pippin. He comes 
                         to a clearing and stops.]
 
                                     TREEBEARD
                         We Ents have not troubled about the 
                         wars of men and wizards for a very long 
                         time. But now something is about to 
                         happen that has not happened for an 
                         age... Ent Moot.
 
                                     MERRY
                         What�s that?

                                     TREEBEARD
                         'Tis a gathering.

                                     MERRY
                         A gathering of what?

                         [Merry and Pippin turns round as they 
                         hear movement from the forest around 
                         them. They see many more Ents like Treebeard 
                         gathering.]
 
                                     TREEBEARD
                         Beech, oak, chestnut, ash... Good, good, 
                         good. Many have come. Now we must decide 
                         if the Ents will go to war.
 
                         [Merry licks his lips in anticipation.]
 
                         


                         [Back at Helm�s Deep, the women and 
                         children are being led into the caves.]
 
                         
                                     SOLDIER 1
                         Move back! Move to the caves!

                                     SOLDIER 2
                         Keep moving!

                                     SOLDIER 3
                         Quickly now!

                         [Old men and young lads are being drafted 
                         for war. The women and children say 
                         their tearful and reluctant farewells 
                         as their fathers, husbands and sons 
                         are led away by soldiers. In the armoury, 
                         weapons are being distributed. Aragorn 
                         picks up a battered sword, looks at 
                         it and tosses it back.]
 
                                     ARAGORN
                         Farmer, farriers, stable boys. These 
                         are no soldiers.
 
                                     GIMLI
                         Most have seen too many winters.

                                     LEGOLAS
                         Or too few. Look at them. They�re frightened. 
                         I can see it in their eyes. [The men 
                         around them fell silent. Legolas speaks 
                         to Aragorn.] Boe a h�n: neled herain 
                         dan caer menig! (And they should be... 
                         Three hundred against ten thousand!)
 
                         
                                     ARAGORN
                         Si beriathar h�n. Amar n� ned Edoras. 
                         (They have more hope of defending themselves 
                         here than at Edoras.)
 
                                     LEGOLAS
                         Aragorn, men i ndagor. H�n �-... ortheri. 
                         Natha daged aen! (Aragorn, we are warriors. 
                         They cannot win this fight. They are 
                         all going to die!)
 
                                     ARAGORN
                         Then I shall die as one them! [He pauses 
                         and then walks away. Legolas makes as 
                         if to go after him.]
 
                                     GIMLI
                         [Puts a hand on Legolas] Let him go, 
                         lad. Let him be.
 


                         [In the hall]

                                     GAMLING
                         Every villager able to wield a sword 
                         has been sent to the armory. My lord?
 
                         
                                     TH�ODEN
                         Who am I, Gamling?

                                     GAMLING
                         You are our king, sire.

                                     TH�ODEN
                         And do you trust your king?

                                     GAMLING
                         [Puts armour onto Th�oden] Your men, 
                         my lord, will follow you to whatever 
                         end.
 
                         [The villagers are handed their weapons. 
                         An oversized helmet is placed on a wide-eyed 
                         boy. Another stares at the axe that 
                         he is handed with frightened eyes. Another 
                         child wearing oversized chain mail takes 
                         up a huge shield. Th�oden stands inside 
                         the main hall of the keep, his back 
                         to the entrance where a bright white 
                         light is streaming through.]
 
                                     TH�ODEN
                         To whatever end� Where is the horse 
                         and the rider? Where is the horn that 
                         was blowing? They have passed like rain 
                         on the mountains. Like wind in the meadow. 
                         The days have gone down in the west. 
                         Behind the hills, into shadow. How did 
                         it come to this?
 


                         [Everyone is getting ready for war at 
                         the battlements. Aragorn is sitting 
                         on the steps. He sees a young lad in 
                         armour holding a sword looking around 
                         nervously.]
 
                                     ARAGORN
                         Give me your sword. What is your name?
 
                         
                                     HALETH
                         Haleth, son of H�ma, my lord. The men 
                         are saying that we will not live out 
                         the night. They say that it is hopeless..
 
                         
                         [Aragorn gives the battered sword a 
                         few swings.]
 
                                     ARAGORN
                         This is a good sword, Haleth, son of 
                         H�ma.
 
                         [He hands the sword back to Haleth and 
                         leans close to him, putting a hand on 
                         his shoulder.]
 
                                     ARAGORN
                         There is always hope.



                         [Back at the armoury, Aragorn dons his 
                         battle gear. His sword is handed to 
                         him as he reaches for it. He nods and 
                         accepts the sword from Legolas.]
 
                                     LEGOLAS
                         We have trusted you this far. You have 
                         not led us astray. Forgive me. I was 
                         wrong to despair.
 
                                     ARAGORN
                         �-moe edhored, Legolas. (There is nothing 
                         to forgive, Legolas.)
 
                         [They smile and clap one another on 
                         the shoulders. They look at Gimli as 
                         he walks up to them, struggling with 
                         his chain mail.]
 
                                     GIMLI
                         If we had more time I�d get this adjusted. 
                         [He drops the bundle and the chain mail 
                         lands with its length right to the floor.] 
                         It�s a little tight across the chest.
 
                         
                         [Aragorn and Legolas bite back smiles. 
                         Just then, a horn sounds in the background]
 
                         
                                     LEGOLAS
                         That is no Orc horn. [They run out to 
                         the battlements.]
 
                         [The guards look down in wonderment.]
 
                         
                                     BEREG
                         [to another guard] Send for the king. 
                         Open the gate!
 
                                     SOLDIER
                         Open the gate!

                         [An army of Lothl�rien Elves march up 
                         the Causeway into the Hornburg. They 
                         are led by Haldir. The Rohirrim soldiers 
                         look upon them in wonderment and delight 
                         as they pass.]
 
                                     TH�ODEN
                         How is this possible?

                                     HALDIR
                         I bring word from Elrond of Rivendell. 
                         An alliance once existed between Elves 
                         and men. Long ago we fought and died 
                         together. [He looks up to see Aragorn, 
                         Legolas and Gimli running down the steps, 
                         and smiles] We come to honor that allegiance.
 
                         
                                     ARAGORN
                         [He bows] Mae govannen, Haldir. (Welcome, 
                         Haldir) [He grabs Haldir in a huge embrace. 
                         Initially stunned, Haldir hugs him back 
                         lightly.]
 
                                     ARAGORN
                         You are most welcome!

                         [Legolas and Haldir clasp each other 
                         on the shoulder.]
 
                                     HALDIR
                         [Turning to Th�oden] We are proud to 
                         fight alongside men, once more.
 
                         [Men and Elves are in their positions 
                         on the battlements of Helm�s Deep. The 
                         sounds of a marching army move closer 
                         and closer. The women and children in 
                         the caves hear the sounds overhead and 
                         are frightened. Mothers draw their children 
                         close and try to sooth crying babies. 
                         The men and Elves look out into the 
                         darkness, lit by the thousands of torches 
                         carried by the huge advancing Uruk-hai 
                         army and the light bouncing off their 
                         armour. With a row of Elf archers, Gimli 
                         is standing beside Legolas behind a 
                         wall, only the top of his helmet visible.]
 
                         
                                     GIMLI
                         [Grumbling and straining to look above 
                         the wall.] You could have picked a better 
                         spot.
 
                         [Legolas smirks. Aragorn approaches 
                         and stands beside them]
 
                                     GIMLI
                         Well lad, whatever luck you live by, 
                         let�s hope it lasts the night.
 
                         [Thunder sounds and lightning flashes, 
                         revealing the sea of approaching Uruk-hai.]
 
                         
                                     LEGOLAS
                         Your friends are with you, Aragorn.
 
                         
                                     GIMLI
                         Let�s hope they last the night.

                         [The marching and thumping grows louder 
                         and louder. Lightning flashes and it 
                         begins to rain. While the Uruk-hai army 
                         continues to march at the fortress, 
                         an Uruk-hai leader steps on a rock outcrop.]
 
                         
                         [Aragorn is giving commands to the Elf 
                         warriors.]
 
                                     ARAGORN
                         A Eruch�n, �-dano i faelas a hyn an 
                         uben tanatha le faelas! (Show them no 
                         mercy! For you shall receive none!)
 
                         
                         [The Uruk-hai leader raises his swords 
                         and commands his army to stop with a 
                         terrifying animalic cry. The Uruks stop 
                         and growl in anticipation of the upcoming 
                         battle and slaughter]
 
                                     GIMLI
                         [Jumping and straining to see] What�s 
                         happening out there?
 
                                     LEGOLAS
                         Shall I describe it to you? [Looks at 
                         Gimli with a grin] Or would you like 
                         me to find you a box?
 
                                     GIMLI
                         [Laughs good-naturedly] Hehehehe!!
 
                         
                         [The Uruk Leader cries out once, encouraging 
                         the Uruk-hai to start roaring and thumping 
                         their spears furiously.The women and 
                         children in the caves huddle together 
                         in fear. Suddenly, Aldor, the old man 
                         next to Haleth, loses his grip and releases 
                         his arrow prematurely, shooting an Uruk-hai 
                         in the neck.]
 
                                     ARAGORN
                         Dartho! (Hold!)

                         [The Uruk-hai army stop their roaring 
                         and thumping. With a hollow groan, the 
                         Uruk that was shot collapsed to the 
                         ground. The other Uruk-hai bare their 
                         teeth and roar with anger. With a cry, 
                         the Uruk-hai leader thrusts his weapon 
                         in the air and the Uruk-hai army starts 
                         charging.]
 
                                     TH�ODEN
                         So it begins.

                                     ARAGORN
                         Tangado halad! (Prepare to fire!)

                         [The Elves notch their arrow and aim.]
 
                         
                                     LEGOLAS
                         Faeg i-varv d�n na lanc a nu ranc. (Their 
                         armor is weak at the neck and beneath 
                         the arms.)
 
                                     ARAGORN
                         Leithio i philinn! (Release the arrows!)
 
                         
                         [Arrows rain down on the Uruk-hai below, 
                         killing many.]
 
                                     GIMLI
                         Did they hit anything?

                                     TH�ODEN
                         Give them a volley.

                                     GAMLING
                         [to the men] Fire!



                                     MAN-WITH-MISSING-EYE
                         Fire!



                         [More arrows are released. But the Uruk-hai 
                         army keep advancing, with more replacing 
                         those fallen.]
 
                                     ARAGORN
                         Fire!

                                     GIMLI
                         [Impatiently] Send them to me! C�mon!
 
                         
                         [The Uruk-hai start to load ladders 
                         onto the walls, pushing them up with 
                         their long spears.]
 
                                     ARAGORN
                         Pendraid! (Ladders!)

                         [The Elves draw their blades in preparation 
                         for combat. The first ladders are almost 
                         reaching the walls with big nasty Uruk 
                         Berserkers on top of them.]
 
                                     ARAGORN
                         Swords! Swords!

                                     GIMLI
                         Good!

                         [Close combat begins as the Uruk-hai 
                         climb over the wall.]
 
                                     GIMLI
                         Legolas, two already! [Holding up two 
                         fingers]
 
                                     LEGOLAS
                         I�m on seventeen!

                                     GIMLI
                         [Outraged] Argh! I�ll have no pointy-ear 
                         outscoring me! [He turns to a Uruk just 
                         climbing over the wall, whacking it 
                         in the groin with his axe and killing 
                         it as it falls.]
 
                                     LEGOLAS
                         [Fires two arrows] Nineteen!



                         [The Ent Moot is still in progress. 
                         The Ents sway a little as they continue 
                         to deliberate. Merry and Pippin are 
                         sitting a distance away. Suddenly, Treebeard 
                         nods and turns to the hobbits.]
 
                                     PIPPIN
                         [Gesturing] Merry!

                                     TREEBEARD
                         We have just agreed. [Long pause with 
                         his eyes closed.]
 
                                     MERRY
                         [Angles his head in query] Yes?

                                     TREEBEARD
                         I have told your names to the Ent moot 
                         and we have agreed � you are not Orcs.
 
                         
                                     PIPPIN
                         Well, that�s good news.

                                     MERRY
                         [impatiently] And what about Saruman? 
                         Have you come to a decision about HIM?
 
                         
                                     TREEBEARD
                         [Waving a hand] Now don�t be hasty, 
                         Master Meriadoc.
 
                                     MERRY
                         Hasty? Our friends are out there! They 
                         need our help! They cannot fight this 
                         war on their own.
 
                                     TREEBEARD
                         War, yes� It affects us all. But you 
                         must understand, young hobbit. It takes 
                         a loong time to say anything in ooold� 
                         Entish. [Merry and Pippin roll their 
                         eyes in disgruntlement.] And we never 
                         say anything� unless it is worth taking 
                         a looong� time to say.
 


                         [Gimli is standing on the wall between 
                         two ladders, hacking away at Uruk-hai 
                         as they come up]
 
                                     GIMLI
                         Seventeen! Eighteen! Nineteen! Twenty! 
                         Twenty-one! Twenty-two!
 
                         [Camera pans over the Uruk-hai below 
                         and turns to the Causeway. A group of 
                         Uruk-hai is advancing on the Causeway 
                         towards the gate in tortoise formation, 
                         using their broad shields to block off 
                         attacks.]
 
                                     ARAGORN
                         Na fennas! (Causeway!) [Directs the 
                         Elf archers to aim at the Uruk-hai column.]
 
                         
                         [The Elf archers release their arrows. 
                         The Uruk-hai at the sides are shot and 
                         fall down the Causeway. But the column 
                         keeps advancing.]
 
                                     TH�ODEN
                         Is this it? Is this all you can conjure, 
                         Saruman?
 
                         [At the bottom of the Deeping Wall, 
                         two spiky bombs are lodge in the sluice 
                         gate. The rest opens a path and an Uruk-hai 
                         carrying a torch starts to run towards 
                         the sluice gate. Aragorn spots the Uruk-hai.]
 
                         
                                     ARAGORN
                         Togo hon dad, Legolas! (Bring him down, 
                         Legolas!) [Legolas shoots the Uruk-hai 
                         in the shoulder but the latter keeps 
                         going] Dago hon! Dago hon! (Kill him! 
                         Kill him!)
 
                         [Legolas shoots the Uruk again. It stumbles 
                         and then throws it self and the torch 
                         at the bombs. An enormous explosion 
                         is set off, blowing away a large part 
                         of the wall. Rock, debris and bodies 
                         are thrown up. Aragorn is also thrown 
                         back by the force of the explosion and 
                         on the ground, knocked out. Th�oden 
                         looks on in shock as the Uruk-hai streams 
                         in past the Deeping Walls.]
 
                                     TH�ODEN
                         Brace the Gate! Hold them! Stand firm!
 
                         
                         [Gimli sees the Uruk-hai charging in 
                         with Aragorn in their path. With a cry, 
                         he jumps down from the wall and lands 
                         on the Uruk-hai army, taking them out 
                         as he stands.]
 
                                     GIMLI
                         Aragorn!! Argh!

                         [He is soon overpowered. Aragorn gets 
                         up and sees Gimli falling.]
 
                                     ARAGORN
                         Gimli! [He yells to the Elves behind 
                         him] Hado i philinn! (Hurl the arrows!)
 
                         
                         [The arrows take out the first group 
                         of Uruk-hai coming through the hole 
                         in the wall.]
 
                                     ARAGORN
                         Herio! (Charge!)

                         [Aragorn leads the Elves in a charge 
                         towards the Uruk-hai streaming in. He 
                         rushes to Gimli�s side and picks him 
                         up. At the top of the battlements, Legolas 
                         grabs a shield and sends it sliding 
                         across the ground. He then hops onto 
                         it and surfs down the steps, releasing 
                         three arrows as he goes, and kicking 
                         the shield to stab an Uruk-hai as he 
                         lands at the bottom.]
 


                         [At the Ent Moot]

                                     TREEBEARD
                         The Ents cannot hold back this storm. 
                         We must weather such things as we have 
                         always done.
 
                                     MERRY
                         How can that be your decision?!

                                     TREEBEARD
                         This is not our war.

                                     MERRY
                         But you're part of this world! Aren�t 
                         you?! [The Ents look at one another, 
                         taken back] You must help, please! You 
                         must do something!
 
                                     TREEBEARD
                         You are young and brave, Master Merry. 
                         But your part in this tale is over. 
                         Go back to your home.
 
                         [Merry is putting on his jacket. Pippin 
                         approaches him slowly]
 
                                     PIPPIN
                         Maybe Treebeard�s right. We don�t belong 
                         here, Merry. It's too big for us. What 
                         can we do in the end? We've got the 
                         Shire. Maybe we should go home.
 
                                     MERRY
                         [Looking into the distance.] The fires 
                         of Isengard will spread. And the woods 
                         of Tuckborough and Buckland will burn. 
                         And all that was once green and good 
                         in this world will be gone. [Turns to 
                         Pippin and puts a hand on his shoulder] 
                         There won't be a Shire, Pippin.
 
                         [Pippin looks after Merry as he walks 
                         away.]
 


                                     GAMLING
                         Aragorn! Fall back to the Keep! Get 
                         your men out of there!
 
                                     ARAGORN
                         Na Barad! Na Baraad! Haldir, na Barad! 
                         (To the Keep! Pull back to the Keep! 
                         Haldir, to the Keep!)
 
                         [Haldir nods and turns back. Gimli is 
                         being carried away, kicking and struggling 
                         as he goes]
 
                                     GIMLI
                         [Protesting] What are you doing? Argh! 
                         What are you stopping for!
 
                         [HALDIR HACKS AT A FEW URUK AS HE TURNS TOWARDS 
                          THE GATE. SUDDENLY, HE IS STABBED IN HIS ARM.]

                         With a grimace, he kills the Uruk-hai 
                         and looks down as his wound in seeming 
                         disbelief. An Uruk-hai comes up from 
                         behind him unnoticed and slices him 
                         on the neck. As Haldir goes down, he 
                         looks around him and sees his kin fallen 
                         among dead Uruk-hai.]
 
                                     ARAGORN
                         [Sees Haldir falling] HALDIR!! [He runs 
                         up the steps to Haldir�s side and catches 
                         him and he collapses. Haldir's head 
                         rolls back, his eyes empty and unseeing. 
                         Aragorn bows his head in grief. Then 
                         with a cry, he jumps onto a ladder and 
                         swings down to the ground, killing as 
                         he goes.]
 
                                     GAMLING
                         Brace the gate!

                                     SOLDIER
                         Hold them!

                                     TH�ODEN
                         [Drawing his sword] To the gate! Draw 
                         your swords!
 
                         [Th�oden and his commanders come to 
                         the gate, which is under heavy attack. 
                         The Uruk-hai are knocking down the gate 
                         and hacking through the broken wood. 
                         Th�oden stabs at an Uruk-hai and receives 
                         a lance in his shoulder, blocked by 
                         his armour. Grimacing in pain, Th�oden 
                         continues to stab at the Uruk until 
                         led away by Gamling.]
 
                                     GAMLING
                         Make way! We cannot hold much longer.
 
                         
                                     TH�ODEN
                         Hold them!

                                     ARAGORN
                         [Runs up and stabs away at the Uruk-hai 
                         through the broken gate] How long do 
                         you need?
 
                                     GAMLING
                         Brace the gate!

                                     TH�ODEN
                         As long as you can give me!

                                     ARAGORN
                         Gimli!

                                     THEODEN
                         Timbers! Brace the Gate!

                         [Aragorn and Gimli slip out a side exit 
                         and stand on a ledge just to the side 
                         of the main gate. Aragorn peeks over, 
                         seeing the large band of Uruk-hai storming 
                         the gate.]
 
                                     GIMLI
                         Come on! We can take �em!

                                     ARAGORN
                         It�s a long way.

                         [Gimli takes a peek and then steps back.]
 
                         
                                     GIMLI
                         [Mumbles] Toss me.

                                     ARAGORN
                         What?

                                     GIMLI
                         I cannot jump the distance! You�ll have 
                         to toss me!
 
                         [Aragorn nods slowly and then turns 
                         to grab the Dwarf.]
 
                                     GIMLI
                         Oh! [Gimli stays Aragorn�s hand] Don�t 
                         tell the Elf.
 
                                     ARAGORN
                         Not a word.

                         [He tosses Gimli to the head of the 
                         Causeway and then leaps over.]
 
                                     GIMLI
                         [Making quick work of killing the Uruk-hai] 
                         ARGH!!
 
                         [On the other side of the gate]

                                     TH�ODEN
                         Shore up the door!

                                     SOLDIER 1
                         Make way!

                                     SOLDIER 2
                         Follow me to the barricade.

                                     SOLDIER 3
                         Watch our backs!

                                     SOLDIER 4
                         Throw another one over here!

                                     TH�ODEN
                         Higher!

                         [Men are bracing the gate with wood 
                         and nails. Aragorn and Gimli continue 
                         to fight off the Uruk-hai just outside. 
                         Meanwhile the Uruk-hai load and fires 
                         enormous hooks over the battlements. 
                         Hundred of Uruk-hai climb onto super-ladders 
                         as they are pulled up towards the walls, 
                         the super-ladders locking onto the edge 
                         of the battlements with their steel 
                         grips. Legolas takes aim as another 
                         super-ladder is being pulled up and 
                         shoots away one of the ropes. The ladder 
                         falls back onto the Uruk-hai army.]
 
                         
                                     SOLDIER
                         Hold fast the gate!]

                                     TH�ODEN
                         [Through a crack in the gate] Gimli! 
                         Aragorn! Get out of there!
 
                         [Legolas calls to them from the top 
                         of the battlements]
 
                                     LEGOLAS
                         Aragorn! [He throws them a rope]

                         [Aragorn grabs Gimli in one hand and 
                         the rope with the other as they are 
                         pulled up the wall. Just then the Uruk-hai 
                         load and fires enormous hooks over the 
                         battlements. Hundred of Uruk-hai climb 
                         onto super-ladders as they are pulled 
                         up towards the walls, the super-ladders 
                         locking onto the edge of the battlements 
                         with their steel grips. Legolas takes 
                         aim as another super-ladder is being 
                         pulled up and shoots away one of the 
                         ropes. The ladder falls back onto the 
                         Uruk-hai army.]
 
                                     TH�ODEN
                         Pull everybody back! Pull them back!
 
                         
                                     GAMLING
                         Fall back! Fall back!

                                     TH�ODEN
                         They�ve broken through! The castle is 
                         breached. Retreat!
 
                                     GAMLING
                         Fall back!

                                     TH�ODEN
                         Retreat!

                                     ARAGORN
                         Hurry! Inside! Get them inside!

                                     GAMLING
                         Into the Keep!

                         [They all run towards the keep, Legolas 
                         firing two arrows into the Uruk-hai 
                         army as he goes.]
 


                         [Treebeard is walking through the forest, 
                         carrying Merry and Pippin. The hobbits 
                         look dejected.]
 
                                     TREEBEARD
                         I will leave you at the western borders 
                         of the forest. You can make your way 
                         north to your homeland from there.
 
                         
                         [Pippin suddenly looks up with a gleam 
                         in his eyes.]
 
                                     PIPPIN
                         Wait! Stop! Stop! [Treebeard comes to 
                         a stop.] Turn around. Turn around. Take 
                         us south!
 
                                     TREEBEARD
                         South? But that will lead you past Isengard.
 
                         
                                     PIPPIN
                         Yes. Exactly. If we go south we can 
                         slip past Saruman unnoticed. The closer 
                         we are to danger, the farther we are 
                         from harm. It�s the last thing he�ll 
                         expect.
 
                                     TREEBEARD
                         Mmmm. That doesn�t make sense to me. 
                         But then, you are very small. Perhaps 
                         you�re right. South it is then. Hold 
                         on, little Shirelings. I always like 
                         going south. Somehow it feels like going 
                         down hill.
 
                                     MERRY
                         Are you mad? We�ll be caught!

                                     PIPPIN
                         No we won�t. Not this time.



                         [Faramir and company draws close to 
                         Osgiliath.]
 
                                     RANGER 1
                         Look! Osgiliath burns!

                                     RANGER 2
                         Mordor has come.

                                     FRODO
                         [With tears in his eyes] The Ring will 
                         not save Gondor. It has only the power 
                         to destroy. Please, let me go.
 
                         [Faramir hesitates for a moment.]

                                     FARAMIR
                         Hurry. [He presses them on]

                                     FRODO
                         Faramir, you must let me go!

                         [Frodo and Sam are pushed on towards 
                         Osgiliath]
 


                         [Treebeard, Merry and Pippin come to 
                         the southern edge of the forest.]
 
                         
                                     TREEBEARD
                         And a little family of field mice that 
                         climb up sometimes and they tickle me 
                         awfully. They�re always trying to get 
                         somewhere where they � Oh!! [He sees 
                         the desolated landscape of tree stumps 
                         that used to be forested grounds] Many 
                         of these trees were my friends. Creatures 
                         I had known from nut and acorn.
 
                                     PIPPIN
                         I�m sorry, Treebeard.

                                     TREEBEARD
                         [With tears in his eyes] They had voices 
                         of their own. [His gaze turns to the 
                         treeless Isengard and its smoking caverns] 
                         Saruman! A wizard should know better!
 
                         
                         [He lets out a ferocious roar that echoes 
                         through the forest]
 
                                     TREEBEARD
                         There is no curse in Elvish, Entish 
                         or the tongues of men for this treachery. 
                         My business is with Isengard tonight. 
                         With rock and stone!
 
                         [Merry and Pippin turn around as they 
                         hear rumbles from the forest. They see 
                         many Ents emerging and marching towards 
                         them]
 
                                     MERRY
                         Yes!

                                     TREEBEARD
                         Hoorarooom... Come my friends. The Ents 
                         are going to war. It is likely that 
                         we go to our doom. Last march of the 
                         Ents!
 


                         [Osgiliath is still under siege as Faramir 
                         and company arrives, dodging arrows 
                         and falling rocks.]
 
                                     MADRIL
                         Faramir, Orcs have taken the eastern 
                         shore. Their numbers are too great. 
                         By nightfall we�ll be overrun.
 
                         [Frodo suddenly seems stricken]

                                     SAM
                         Mr Frodo!

                                     FRODO
                         It�s calling to him, Sam. His eye is 
                         almost on me.
 
                                     SAM
                         Hold on, Mr. Frodo� You'll be alright...
 
                         
                         [Frodo sees that Sam is speaking to 
                         him but he hears nothing. His senses 
                         are overcome.]
 
                                     FARAMIR
                         Take them to my father. Tell him Faramir 
                         sends a mighty gift. A weapon that will 
                         change our fortunes in this war.
 
                         [Sam breaks away as they are being led 
                         away.]
 
                                     SAM
                         Do you want to know what happened to 
                         Boromir? You want to know why your brother 
                         died? He tried to take the Ring from 
                         Frodo! After swearing an oath to protect 
                         him, he tried to kill him! The Ring 
                         drove your brother mad!
 
                                     RANGER
                         Watch out!

                         [A boulder crashes into a tower overhead 
                         and shatters it. Suddenly, Frodo�s eyes 
                         roll up and he stares at Faramir strangely.]
 
                         
                                     SAM
                         Mr Frodo?

                                     FRODO
                         [In a faraway voice] They�re here. They�ve 
                         come.
 
                                     FARAMIR
                         [Looking up] NAZG�L!! [He grabs the 
                         hobbits and thrusts them into a corner.] 
                         Stay here. Keep out of sight. [To his 
                         men] Take cover!
 


                         [Banners of the White Hand are flying 
                         from the battlements of Helm�s Deep. 
                         The Hornburg is overrun with Uruk-hai. 
                         Th�oden and company are in the hall 
                         of the keep.]
 
                                     TH�ODEN
                         The fortress is taken. It is over.
 
                         
                                     ARAGORN
                         [Carrying a table with Legolas to shore 
                         up the door of the hall] You said this 
                         fortress would never fall while your 
                         men defend it! They still defend it! 
                         They have died defending it!
 
                         [In the Glittering Caves, the women 
                         and children cry in fear as they hear 
                         the battering ram banging on the door.]
 
                         
                                     WOMAN
                         They are breaking in! 

                                     ARAGORN
                         Is there no other way for the women 
                         and children to get out of the caves? 
                         [There is no answer.] Is there no other 
                         way?
 
                                     GAMLING
                         There is one passage. It leads into 
                         the mountains. But they will not get 
                         far. The Uruk-hai are too many.
 
                                     ARAGORN
                         Send word for the women and children 
                         to make for the mountain pass. And barricade 
                         the entrance.
 
                                     TH�ODEN
                         So much death. What can men do against 
                         such reckless hate?
 
                                     ARAGORN
                         [Pause] Ride out with me. Ride out and 
                         meet them.
 
                                     TH�ODEN
                         [A light of determination shines in 
                         his eyes] For death and glory.
 
                                     ARAGORN
                         For Rohan. For your people.

                                     GIMLI
                         The sun is rising.

                         [Aragorn looks up at a window to see 
                         faint light streaming through. He recalls 
                         Gandalf's words.]
 
                                     GANDALF (V.O.)
                         Look to my coming at first light on 
                         the fifth day. At dawn, look to the 
                         east.
 
                                     TH�ODEN
                         Yes. Yes! The horn of Helm Hammerhand 
                         shall sound in the deep one last time!
 
                         
                                     GIMLI
                         Yes! [Gimli runs up the steps to the 
                         horn of Helm Hammerhand]
 
                                     TH�ODEN
                         Let this be the hour when we draw swords 
                         together. Fell deeds awake. Now for 
                         wrath! Now for ruin! And a red dawn!
 
                         
                         [He mounts his horse and puts on his 
                         helmet. The sound of the horn rumbles 
                         through Helm's Deep as Gimli blows with 
                         gusto.]
 
                                     TH�ODEN
                         FORTH EORLINGAS!!

                         [Th�oden leads the charge out of the 
                         keep into the Hornburg, slashing away 
                         at the Uruk-hai as they go. Without 
                         pause, they storm out of the gate and 
                         down the Causeway, right into the column 
                         of waiting Uruk-hai. In the midst of 
                         battle, Aragorn looks east and sees 
                         a white rider against the rising sun]
 
                         
                                     ARAGORN
                         Gandalf.

                                     GANDALF
                         Th�oden king stands alone.

                                     �OMER
                         [Coming up from behind] Not alone. [He 
                         raises a hand] Rohirrim!!
 
                         [Riders move up behind �omer.]

                                     TH�ODEN
                         [Looking to the east] �omer!

                                     �OMER
                         To the king!

                         [The Rohirrim and the White Rider charge 
                         down the slope. Half the Uruk-hai army 
                         turns to face the challenge, bearing 
                         their spears down towards the riders. 
                         As the riders draw closer, the sun rises 
                         behind them, momentarily blinding the 
                         Uruk-hai who raise the hands (and spears) 
                         to shield their eyes. The riders crash 
                         right into the Uruk-hai and engage them 
                         in battle.]
 


                         [The Ents are stomping over Isengard, 
                         swinging their huge limbs, throwing 
                         and stamping on Orcs and rolling huge 
                         boulders over the ground. An Ent is 
                         pulled down with chains by some Orcs, 
                         who immediately jump on and hacks away 
                         at his wooden limbs. Saruman rushes 
                         out onto the balcony of Orthanc and 
                         stares at the pandemonium in incredulity. 
                         Merry and Pippin also throws stones 
                         at Orcs, their aims true.]
 
                                     PIPPIN
                         Yes!

                                     TREEBEARD
                         A hit. A fine hit!

                         [Two Ents rock a wooden structure and 
                         push it over into the caverns below, 
                         smashing against the rock. Some Orcs 
                         fire flamed-tipped arrows at an Ent, 
                         setting him on fire. Saruman continues 
                         to look about from his balcony, helpless. 
                         Some Ents are now breaking away at a 
                         dam.]
 
                                     TREEBEARD
                         Break the dam! Release the river!

                         [The dam is broken and Saruman looks 
                         up to see the river rushing down the 
                         slope towards Isengard, washing away 
                         Orcs and wooden structures in its path. 
                         ]
 
                                     MERRY
                         Pippin, hold on! [The hobbits tighten 
                         their hold on top of Treebeard]
 
                                     TREEBEARD
                         Hold on, little hobbits!

                         [Treebeard braces himself against the 
                         flood. As the water rushes over Isengard, 
                         an Ent rushes in and thrusts his burning 
                         body into the water. The water rushes 
                         into the caverns, washing away the bridges, 
                         mechanisms and structures within.]
 
                         


                         [Frodo walks slowly away from the safe 
                         corner. Gondorian Rangers are still 
                         running about, defending their stations.]
 
                         
                                     SAM
                         What are you doing? Where are you going?!
 
                         
                                     [SLOW MOTION
                         Frodo walks up some stairs and stands 
                         on a bridge. A Nazg�l on a Fell beast 
                         emerges in front of him. Frodo stares 
                         at the Nazg�l, fixated. Feeling the 
                         call of the Ring, he holds it up. Faramir 
                         watches the unfolding tableau from below. 
                         As Frodo moves to put the Ring on his 
                         finger and the Nazg�l flies closer and 
                         closer, Sam runs up and knocks Frodo 
                         over. Faramir releases an arrow and 
                         shoots the Fell Beast. Frodo and Sam 
                         roll down the stairs. As they come to 
                         a stop at the bottom, Frodo holds Sam 
                         in a death grip, yells and points Sting 
                         at his throat, his eyes livid with madness 
                         and anger that someone would try to 
                         take the Ring away.]
 
                                     FRODO
                         Aaarrgghh!!!

                                     SAM
                         [With tears running down his face] It�s 
                         me. It�s your Sam. Don�t you know your 
                         Sam?
 
                         [The madness fades and recognition returns 
                         to Frodo�s eyes. He realises what he 
                         nearly did and is overcome. Stumbling 
                         backwards, he collapses against a wall 
                         and Sting falls to the ground with a 
                         clang. Sam gets up slowly.]
 
                                     FRODO
                         [Slowly and with despair] I can�t do 
                         this, Sam.
 
                                     SAM
                         [Getting up slowly] I know. It�s all 
                         wrong. By rights we shouldn�t even be 
                         here. But we are. [He stands and leans 
                         against a wall, looking out into the 
                         distance.] It�s like in the great stories, 
                         Mr. Frodo. The ones that really mattered. 
                         Full of darkness and danger they were. 
                         And sometimes you didn�t want to know 
                         the end. Because how could the end be 
                         happy? [Images of the riders winning 
                         the battle against the Uruk-hai at Helm�s 
                         Deep] How could the world go back to 
                         the way it was when so much bad had 
                         happened?
 
                                     TH�ODEN
                         Victory! We have victory! [He raises 
                         his sword with a victorious cry]
 
                                     SAM
                         But in the end, it�s only a passing 
                         thing, this shadow. [The women and children 
                         welcome the men as they return. �owyn 
                         runs up to Aragorn and embraces him, 
                         crying tears of relief.] Even darkness 
                         must pass. A new day will come. [Isengard 
                         is flooded. Merry and Pippin looks on 
                         from their perch on Treebeard. On the 
                         balcony, Saruman stumbles back into 
                         his chamber] And when the sun shines 
                         it will shine out the clearer. Those 
                         were the stories that stayed with you. 
                         That meant something, even if you were 
                         too small to understand why. But I think, 
                         Mr. Frodo, I do understand. I know now. 
                         Folk in those stories had lots of chances 
                         of turning back only they didn�t. They 
                         kept going because they were holding 
                         on to something.
 
                                     FRODO
                         What are we holding on to, Sam?

                                     SAM
                         There�s some good in this world, Mr. 
                         Frodo. And it�s worth fighting for.
 
                         
                         [Standing in a corner, even Gollum seems 
                         moved. Faramir walks over and comes 
                         to kneel in front of Frodo]
 
                                     FARAMIR
                         I think at last we understand one another, 
                         Frodo Baggins.
 
                                     MADRIL
                         You know the laws of our country, the 
                         laws of your father. If you let them 
                         go, your life will be forfeit.
 
                                     FARAMIR
                         Then it is forfeit. Release them.

                         [Sam shakes the ranger�s hand from his 
                         shoulder. Frodo looks up at Faramir 
                         with gladness. Over in the realm of 
                         Rohan, Gandalf, Th�oden and company 
                         ride to the top of a slope, looking 
                         towards the Mountain of Fire in the 
                         distance.]
 
                                     GANDALF
                         Sauron�s wrath will be terrible, his 
                         retribution swift. The battle for Helm�s 
                         Deep is over. The battle for Middle-earth 
                         is about to begin. All our hopes now 
                         lie with two little hobbits. Somewhere 
                         in the wilderness.
 
                         [Frodo and Sam are walking through the 
                         woods, away from Osgiliath.]
 
                                     SAM
                         I wonder if we�ll ever be put into songs 
                         or tales.
 
                                     FRODO
                         What?

                                     SAM
                         I wonder if people will ever say, �let�s 
                         hear about Frodo and the Ring.� And 
                         they�ll say �yes, that�s one of my favorite 
                         stories. Frodo was really courageous, 
                         wasn�t he, dad.� �Yes, my boy, the most 
                         famousest of hobbits. And that�s saying 
                         alot.�
 
                                     FRODO
                         Huh, you left out one of the chief characters 
                         � Samwise the Brave. I want to hear 
                         more about Sam.
 
                         [Frodo turns to look at Sam.]

                                     FRODO
                         Frodo wouldn�t have got far without 
                         Sam.
 
                                     SAM
                         Now Mr. Frodo, you shouldn�t make fun. 
                         I was being serious.
 
                                     FRODO
                         [smiling] So was I. [He turns to walk 
                         on]
 
                                     SAM
                         [Dreamily] Samwise the Brave. [He gives 
                         his backpack a heave and follows Frodo]
 
                         
                         [Gollum is crouching a short distance 
                         away]
 
                                     FRODO
                         Sm�agol!

                                     SAM
                         We�re not gonna wait for you. Come on!
 
                         
                                     SM�AGOL
                         Master... Master looks after us. Master 
                         wouldn�t hurt us.
 
                                     GOLLUM
                         Master broke his promise.

                                     SM�AGOL
                         Don�t ask Sm�agol. Poor, poor Sm�agol.
 
                         
                                     GOLLUM
                         Master betrayed us! Wicked, tricksy, 
                         false. We ought to wring his filthy 
                         little neck. [Twists the branch of a 
                         tree] Kill him! Kill him! Kill them 
                         both. And then we take the precious 
                         and we be the master.
 
                                     SM�AGOL
                         [Scuttles and hides behind a tree] The 
                         fat hobbit, he knows. Eyes always watching.
 
                         
                                     GOLLUM
                         Then we stabs them out. Put out his 
                         eyeses. And make HIM crawl.
 
                                     SM�AGOL
                         [Bites on his finger and nods eagerly] 
                         Yes! Yes! Yes!
 
                                     GOLLUM
                         Kill them both.

                                     SM�AGOL
                         Yes! No no! [Backs away against a tree] 
                         It�s too risky, it�s too risky.
 
                         [He looks in the direction of the hobbits]
 
                         
                                     SAM
                         Where�s he gone? Hey Gollum, where are 
                         you?
 
                                     FRODO
                         Sm�agol?

                                     GOLLUM
                         [Softly and sinisterly] We could let 
                         HER do it.
 
                                     SM�AGOL
                         Yes. She could do it.

                                     GOLLUM
                         Yes, precious she could. And then we 
                         takes it once they�re dead.
 
                                     SM�AGOL
                         Once they�re dead�

                                     GOLLUM
                         Shh� [He pops out from hiding in front 
                         of the hobbits.]
 
                                     SM�AGOL
                         Come on, hobbits. Long ways to go yet. 
                         Sm�agol will show you the way.
 
                         [He turns to walk on, with Frodo and 
                         Sam following behind.]
 
                                     GOLLUM
                         Follow me.

                         [ Camera pans up over the forest and 
                         Ephel D�ath to reveal the desolation 
                         of Mordor. To the left of the frame 
                         is the glowing Eye of Sauron atop Barad-d�r, 
                         and to the right of the frame is the 
                         fiery Mount Doom. Three Fell Beasts 
                         circle the dark skies. Lightning flashes 
                         as the scene fades to black.]

                         THE END

========================================================
========================================================
========================================================


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
*

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)