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
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)