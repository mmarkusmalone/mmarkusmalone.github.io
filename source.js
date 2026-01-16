function toggleNav() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('active');
}

// Close the menu if the user clicks anywhere else
document.addEventListener('click', function(event) {
    const nav = document.getElementById('navMenu');
    // Check if the click was outside the nav container
    if (!nav.contains(event.target)) {
        nav.classList.remove('active');
    }
});

document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parent = trigger.parentElement;

        // Toggle the active class on the clicked section
        parent.classList.toggle('active');
    });
});

const contentData = {
    evolved: {
        type: 'writing',
        title: 'Evolved',
        content: `
        <p><strong>Evolved</strong></p>

        <p> On my route to the supermarket, I would always pass a beautiful little blue house. A small, hand-painted sign was stuck in the front yard’s grass. It simply read ‘Bhakti Yoga.’ The house always reminded me that I should do yoga. When I retired from my teaching job and my arthritis started getting worse, I couldn’t get the blue house out of my head. I thought of the blue house when I had to use the handles of my chair to stand up because my back was so weak, when my ankles would pulsate in pain as I was trying to go to sleep. As I was deteriorating, I was also procrastinating scheduling my rheumatologist checkup because I knew he would just send me home with an increased dose of the medicine that gave me brain fog and indigestion. Steve would ask me about my appointment status every couple of weeks, and I would lie to him that they were going to call me back when they had an availability.</p>

        <p>It wasn’t until I tried wearing heels to a date with Steve and couldn’t walk out the door because it was too painful that I finally decided to do something about my body. I signed up for Bhakti’s $80 new member pass in the Uber and set my alarm for the 7 a.m. class the next morning.</p>

        <p>When the alarm went off, I had to untangle my husband’s arms from around me, his half-conscious body probably wondering why I was leaving so early. Ever since we started dating, it was our thing to wake up at 11 on weekends.</p>

        <p>Standing at the door of the blue house felt strangely intrusive, as if I had wandered onto the set of my favorite TV show. Before I could knock, the door opened to a middle-aged woman with beautiful bone structure, toned arms, and curly gray hair tied up into a messy bun. She said nothing, only lifted her arms in silent invitation. No one had ever greeted me like that. I froze, unsure what to do. Then, awkwardly, I stepped forward, through the doorway, and into her outstretched arms. She wrapped me in a hug, her body trying to soften the stiffness in mine.</p>

        <p>As we unwrapped, she welcomed me to Bhakti yoga and introduced herself as Nadia. She led me into a long yoga room where light from the large windows reflected off the white walls, filling the space with a soft glow. People were setting up their mats and chatting with one another. When we entered, everyone turned. Initially, I saw shock in their eyes. But after Nadia nodded to them, their gaze softened.</p>

        <p>Nadia asked a young woman named Bella to help set me up. Bella stood, thin and tired-looking, and guided me to the mats. She helped me choose one and set me up beside her. I asked her how long she had been doing yoga. She said she had been practicing with Nadia for ten years. I searched her face for wrinkles, trying to see if there was a way she could be over thirty. I doubted it. I told her that I was a beginner. She assured me I would learn quickly.</p>

        <p>Nadia brought in a harmonium. I tried sitting in Sukhasana with the rest of them, but my ankle throbbed in protest, so I sat with my knees up. Nadia drew open the harmonium, and it released a warm, humming chord. She prompted a deep breath. Everyone in the class started to harmonize in a gentle, angelic chorus of ohms.</p>

        <p>The sound startled me, and I opened my eyes, half-convinced I was imagining it. But they sang the same ohm again, as if it was the most natural thing to sing like that. I closed my eyes and tried to quiet my judgment.</p>

        <p>We transitioned to downward dog. My arms trembled, and when I looked around, everyone else seemed at ease. I fumbled through the vinyasa flow: always a beat behind, exhaling when Nadia said to inhale, turning left when everyone went right. Jealousy ate at me as I imagined what it must feel like to move through space as effortlessly as they did.</p>

        <p>With my phone outside and no clock in the room, I had no idea how much longer I would have to suffer.</p>

        <p>By the time Nadia called for Savasana, I was ready to cancel my pass and eat the money. Lying flat made every muscle tighten. I fidgeted on the mat, searching for some kind of comfort.</p>

        <p>Then, I felt a cold hand lift my back, slide one pillow beneath my lower back, and another under my knees. The tension immediately gave way. I took a deep breath, feeling the exhale’s effect move through my back and into the rest of my body. My mind went still. I was able to belong completely to my body and the moment. I wanted to stay there forever.</p>

        <p>Nadia hit the gong, stunning me out of my meditative state. I started wiggling my fingers, then my toes, and felt my body re-energize. I made my way to a seat. Nadia hit the gong again. Everyone began to chant Shanti in harmony.</p>

        <p>I sat there quietly, taking in the music. Once they finished chanting, everyone brought their hands to their chest and bowed to Nadia with a namaste.</p>

        <p>Standing, I felt like my body was ten pounds lighter. Nadia grabbed my arm and stopped me on the way out. “How do you feel?”</p>

        <p>“I feel amazing.”</p>

        <p>When I told Steve about the chanting, he burst into laughter. I felt my face grow hot, like he was making fun of me, even though I wanted to do the same thing hours before. I told him I already paid eighty dollars, so I had to go back. He offered to buy me out.</p>

        <p>When I came back the next day, everyone in the room was there the day before. In the room, I pretended to be busy stretching my legs, but a couple still came over to chat.</p>

        <p>They looked older, with gray hair and crow’s feet, but their bodies were leaner than mine had ever been. When I asked how long they had been doing yoga, they said they had been practicing with Nadia for twenty years.</p>

        <p>While everyone else folded easily over their legs, my fingertips barely reached past my shins. Nadia came up behind me and placed her palm at the base of my skull, then traced her hand slowly down my spine.</p>

        <p>I froze at the intrusion. Then, somehow, once her hands reached my sit bone, my back released, and I folded forward until my fingers brushed the ground.</p>

        <p>Over the next two weeks, I felt the fog I had been moving through start to lift. Downward dog became less taxing. I was able to align my breath with the movements. I joined in with the chorus.</p>

        <p>I was more aware of my movement outside of class. I could no longer sit on the couch for five hours, crocheting and watching TV. I felt my body grow restless and desire movement.</p>

        <p>Nadia complimented my improvement; she said I really understood the method.</p>

        <p>I put down my deposit for a month’s worth of classes at Bhakti without telling Steve. I knew he wouldn’t understand the value of these classes, and I handled the credit card bills anyway.</p>

        <p>As I was rolling up my mat after the first class of my new monthly pack, Nadia approached me. She told me she could tell I struggled with deep pain. I told her about my arthritis.</p>

        <p>She said that she had healed arthritis in many of her chelas before. She had me put my number in her phone so she could send me anti-inflammatory recipes. It was the first time I heard her say chela. I didn’t know what it meant, but I wanted to be one.</p>

        <p>That week, I made a bean and quinoa salad Nadia recommended. Steve took one look and grimaced, but he knew better than to criticize my cooking. When he asked what had inspired me to make quinoa for the first time, I said I read about it in a health magazine.</p>

        <p>As the month progressed, I saw improvements in my health that I hadn’t seen on any cocktail of medications prescribed by my doctor.</p>

        <p>My ankle stopped cracking when I stretched it. I could sit in child’s pose without any pain. I had already dropped ten pounds on Nadia’s low-inflammation diet.</p>

        <p>I went to Bhakti five days a week. It became the thing I was most excited about when I woke up. Nadia’s mantras played in my mind when I wasn’t in class. When the first month was up, I upgraded to the yearly pass.</p>

        <p>To celebrate my purchase, I decided to walk to class. It was a sunrise session, so I left my house at 5 a.m. I hadn’t walked a mile and a half straight in years, but I felt ready.</p>

        <p>I left my headphones at home. I wanted to hear the world breathe.</p>

        <p>I remember the birds chirping loudly. The more I listened, the more distinct they became. I could sense their intentions from their tone. I felt the hue of the sky shift slowly from black to indigo, then to blue.</p>

        <p>Sthira sukham asanam, I thought, steadiness and ease.</p>

        <p>After class, Nadia said she saw an awareness in me, what she called the “true eye,” beginning to open. She invited me to a private class at 6 p.m. that day, reserved for students she called “evolved.”</p>

        <p>I walked into the blue house for the second time that day. When I opened the door, I heard voices coming from upstairs. I had never been past the yoga room before.</p>

        <p>I followed the sounds to a closed door and pushed it open.</p>

        <p>Nadia, Bella, and three other chelas were donned in all white robes and turbans, chatting casually.</p>

        <p>When they saw me in the doorway, Nadia walked over and gave me a big hug. “I am so glad you are here Niranjana, let’s begin.”</p>

        <p>Everyone sat down in a tight circle. Nadia lit an incense in the middle and spoke about how we were not like the people we passed by in the supermarket.</p>

        <p>I sat down in the middle of the circle. Nadia lifted a white scarf from her lap and began wrapping it around my head.</p>

        <p>By the final turn, I felt faint from the pressure.</p>

        <p>Nadia turned off the lights. I heard the chelas scoot close to me. Someone grabbed my hand. They pressed down at the base of my palm.</p>

        <p>I felt the energy jolt through my body.</p>

        <p>My faintness transformed into an overwhelming sensation of lightness.</p>

        <p>I ascended out of my body. I watched my sobbing flesh. I saw the world with true clarity.</p>

        <p>“Are you ready to come down?” Nadia asked.</p>

        <p>I lowered back into my flesh. They released my hands. I couldn’t stop sobbing.</p>

        <p>Niranjana, Nadia whispered.</p>

        <p>Nadia started inviting me to the 4 a.m. classes. She also transitioned me to the evolved yearly pack.</p>

        <p>Steve stopped waking up when I did, which made it easy to slip out without him knowing.</p>

        <p>I was going to the blue house every day to practice, sometimes multiple times a day.</p>

        <p>I lost more weight, growing closer to what Nadia called “body beautiful.”</p>

        <p>My ankles started to hurt again. Nadia told me it was a sign of the struggle of my flesh wanting control.</p>

        <p>For Steve and I’s anniversary dinner, I put on the same heels that brought me to the blue house many months before.</p>

        <p>Steve surprised me with an expensive steakhouse dinner. I sent a photo of the menu to Nadia.</p>

        <p>She said the only food that wouldn’t cloud my awareness was the garden salad.</p>

        <p>“I am worried about you, Carrie.”</p>

        <p>Steve was the only one who still referred to me by my birth name.</p>

        <p>“I am feeling better than I ever have.”</p>

        <p>“You are not evolved, Carrie.”</p>

        <p>Nadia said this work came at a risk.</p>

        <p>Steve reached across the table, his hand open between us.</p>

        <p>I ascended and watched the pain.</p>

        <p>I stood up. “I am going home.”</p>

        <p>My Uber pulled up to the blue house.</p>

        <p>Mira opened the door. Bella was also sleeping there.</p>

        <p>We smiled at each other; it felt good to be in sync, to be lighter.</p>

        `
    },
    fancam: {
        type: 'writing',
        title: 'Fan Cam',
        content: `
        <p><strong>Fan Cam</strong></p>

        <p>She refreshes her Instagram feed. Her screen doesn’t change: the same green checkmark alongside the message You’ve seen all new posts from the past 3 days. She resorts to Elle’s tagged photos. There are some new fan edits of her recent Explore Tokyo with Me!! vlog. One edit is a montage her eating sushi for five minutes. Another is a compilation her boyfriend looking at her longingly. She clicks through them, critiquing their filters, transitions, and clip choices. Her mom pats her shoulder, “Honey, get off the phone, your salmon is coming.”</p>

        <p>She looks up from her phone. A waiter weaves his way through the tacky royal blue dinner tables. He shakily balances the black tray of main dishes above his head. The hotel restaurant is completely empty except for her family and an older couple eating in silence. Soft jazz plays from ceiling speakers. The florescent lighting exposes blisters beneath the aging wallpaper. The waiter places her salmon in front of her. Her nose crinkles at the fishy scent. She inspects her dish. The honey mustard marinade gives the salmon a slimy, yellow sheen. Next to it, the asparagus slowly sinks into a bed of watery mashed potatoes. Her stomach turns. Her dad gives her a wide grin, “The concierge said the salmon is the best on the menu.”</p>

        <p>She turns away from her parents in the opposite bed. She draws her phone close to her face and increases the brightness. It washes out the hotel’s yellowing walls and green floral drapes, the itch of the quilt on her legs and whirr of the old air conditioning unit. She puts the final touches on her fan edit. She rewatches the clip of Elle sticking her tongue out at the camera and running into the Turks and Caicos baby blue water. She slows down the video just as Elle dives into the shallow water and adds a blur transition into the next clip. Elle lays on a sculptural beach chair in St.Barths. The camera lingers on Elle’s sunlit midriff before drifting to a copy of The Second Sex face down on her leg. She quickly cuts to the Ibiza lunch scene. She times the clip of Elle dancing on a table at a lunch club with the beat drop of the backtrack. Elle two-steps in her pink Gucci sandals, shaking her blonde bob to the beat.</p>

        <p>Her parents turn off the bedside lamp. She continues to edit in the darkness. She keeps editing until her eyes burn and phone weighs down her hand.</p>

        <p>She scans the breakfast buffet’s offerings: a tower of stale pastries, scrambled eggs with plastic wrap melting on top, a basket of dusty fruit, and chunky yogurt. She grabs a banana. Her dad leans over her shoulder, “Breakfast is included with our room package, so take as much as you want.”</p>

        <p>She puts in her headphones and rewatches Elle’s Capri vlog. She takes a bite of her banana. Elle reviews the spread of Italian breakfast pastries made fresh from Da Vincenzo. The banana mush turns sickly sweet in her mouth. She can’t get herself to swallow it. The mush rests in her mouth, absorbing the mint of her toothpaste. She gags. She spits it out in a napkin. Elle exclaims it is the best cornetto she has ever had.</p>

        <p>She chooses a spot across the pool from her parents. She shifts restlessly in the plastic lounge chair, angling for a pose where she can see her phone without its shadow falling across her body. She searches up Elle’s St.Barths hotel, Eden Rock. The cheapest rate is $2,800 a night. Each room has a reformer Pilates machine. Guests can order room service from the Michelin star restaurant on site. Her phone grows hot in her hand. She searches up Elle’s Capri hotel. She goes through all the room offerings and spa treatments. She clicks the icon to book the Prestige Suite. She fills in all her information. Her phone goes black. Temperature: iPhone needs to cool down.</p>

        <p>She looks up. The pool area is enclosed by three tall walls. Vines grow in the cracks. Yellow stucco paint peels off at the corners. The pool water is a dull turquoise. White, strappy lounge chairs crowd the concrete. Her parents read from their Kindles in the shade. A young family plays in the shallow end. The father has a terrible farmer’s tan. The mom is in a tankini. She twirls their naked baby around in the shallow end.</p>

        <p>She sits up and her feet hit the concrete. The bottoms burn instantly. She quickly tiptoes to the edge of the deep end and jumps in. The pool water is even more stifling than the humid Florida air. She sinks down into the warmth. Her muscles relax. She’s just dived off Elle’s family yacht. The Caribbean Sea is even warmer than she expected. She opens her eyes. Sunlight filters through the bright blue water, forming rainbow refractions in the sea’s ripples. Her ears pop. She smiles underwater and throws up peace signs to the camera. Her head starts to ache. The coral reef scratches at her butt. The pressure in her body builds. Her legs spring her up from the floor. She gasps for air at the surface. She paddles to the edge. Her head spins. The world looks fuzzy. She crawls out of the pool and flops back onto her pool chair. She lathers on tanning oil and lets the sun warm her skin. She talks to Elle about what trip they have planned next.</p>

        <p>She pretends to be asleep while her parents discuss whether to wake her up for dinner. Her dad whispers that she has been begging to go on vacation for years but seems completely detached, dinner could be a good time to talk about what the guidance counselor told them. Her mom says the best thing for a teenage girl is rest, they can always talk about the bullying stuff tomorrow. They decide they will bring her back the chicken dish, because she didn’t seem to like the salmon. She grows nauseous.</p>

        <p>The door slams behind them. She immediately grabs her phone to check if Elle posted in the last two hours. Her face lights up when Elle’s profile is first on her stories feed. Miami Dumppp &lt;3. The first slide is a boomerang of a wave crashing at her feet. The foamy white caps surge up her long legs, drenching them all the way to her thighs. The second slide is a selfie of Elle at golden hour. Her tanned skin glows in the orange light, green eyes sparkle. The third and fourth are photos of sushi in a dimly lit restaurant.</p>

        <p>She screenshots all of the stories and saves them in her Elle folder. She imagines a post that breathes luxury into her shitty vacation. She imagines all the bikini photos she can take at the beach tomorrow, the selfies, the waves crashing at her feet. She imagines it coming up on her old friends’ feeds, what they will comment, how they will try to win her back at school. Her parents come back from dinner to find her asleep with a smile on her face.</p>

        <p>She stands at the edge of the water. She stares at her feet through the camera app, waiting for a wave big enough for an aesthetic video. A small wave pushes sand over her foot and tangles seaweed around her toes. Loud bass crinkles in her ear. Morgan Wallen blasts from shitty speakers behind her. She looks back at the beach. It’s kids her age. She tenses up and looks away.</p>

        <p>She calls her mom over to take some photos. She repeats the instructions from a one of Elle’s old Q and As to her mom: don’t stop pressing the camera button, make sure there is direct sunlight, no zoom. She sits on the water-soaked sand, arches her back, extends her legs, and points her toes. She looks at the camera with a slight smile. She imagines the baby blue Turks and Caicos water complementing her royal blue bikini. She stays there for a couple of moments, tossing her hair and adjusting the angle of her shoulders. Sand accumulates in her bikini bottoms and sweat beads on her forehead. She motions for her mom to move to a lower angle. Her mom hunches over. The kids start to watch. She transitions into a kneeling pose. She sticks her butt out to emphasize her hips and create the illusion of a thigh gap. For the kids viewing the photoshoot, it looks like she has a bad case of scoliosis. She tries to ignore the sun burning her skin. She purses her lips into a duck face, then a serious pout. She shakes her hair out of her face and tells her mom to take photos from a higher angle, to get more of the sand. She visualizes the contrast between her tanned, toned body and white Turks sand. She tries a couple of different expressions. She makes eye contact with one of the girls her age. The girl laughs. She tells her mom she’s had enough and grabs her phone. She rushes over to her chair and drapes a towel over her head for a makeshift darkroom.</p>

        <p>Sunlight filters through the holes in the towel’s fabric, creating an orange haze. She starts at the first photo. The water is a dark blue-green. Old condominium buildings jut out in the background. The sun completely washes out her skin. Her whole body is a stark white except for her flushed red face. Even the sand is darker than her skin. Tension creeps up her spine. She zooms in on the string bikini bottom cutting into her hip fat. She scrolls to the sweat beading on her forehead, her wide belly button, her dark roots poking through the blonde box dye job, her overextended elbows, and random patch of hair on her thigh. She deletes all the photos. She puts on more tanning oil and lays out in the direct sunlight with Elle’s vlogs playing in her head.</p>

        <p>She tells her parents she wants to go to the pool to wash off the sand. The hotel’s shadow covers the pool area, apart from a small corner glowing in the golden hour light. She drags a chair to the corner. She opens the phone camera, lifts her phone above her head, and starts firing off poses. Her eyes burn in the direct sunlight. Tears blur her vision, through the haze she kind of looks like Elle. Her blonde hair glows, her eyebrows have the same shape. She blindly smiles, throws serious faces, pouts in duck faces, sticks her tongue out, winks, rests her chin on her hand, flashes a peace sign, runs her hands through her hair, pretends like she’s blocking the sun, lifts her free arm in glee, rests it back down and leans back further, puts her sunglasses on, takes her sunglasses off, looks off into the distance, stares intensely at the camera. She moves the chair further into the corner as the shadow closes in on her. She doesn’t stop posing until she is completely covered by the shade.</p>

        <p>She sits back in the chair and rubs her eyes to get ready for the review stage. Her hands shake as she swipes through the pictures. She does not look like Elle at all. Her face is burnt and puffy. Her hair is matted down on her neck. Sweat beads line her upper lip. Her teeth look yellow. She doesn’t have Elle’s big eyes or cute freckles or perfect pout or iconic mole.</p>

        <p>She stands up to go back to her room. A fierce headrush forces her back down. She stands up again and stumbles up the stairs to the lobby.</p>

        <p>In the lobby, the bright lights create sunbursts of orange in her field of vision. The concierge smiles at her. She steadies herself on a pillar. She refocuses her vision. She slowly walks to the elevator. She presses the up arrow. The elevator doors slide open. The light inside flickers against the dark wood paneling. She steps inside and presses the button for the fifth floor. The elevator doors slam shut. The gears rumble. Her body grows heavy. A hot ache throbs beneath her skin. She tries to swallow, but her throat is tight and dry. The light flickers again. The elevator dings. The doors open. She wobbles out. The rooms pass by in slow motion. She counts down the numbers, each one paining her. Once she reaches 505, she taps her key to the doorknob nine times before the pad glows green.</p>

        <p>Her mom asks her how the pool was. She slips into the bathroom and chugs water from the tap, relying on the counter to hold herself up. She thinks of a couple of excuses to miss dinner before entering the main room and collapsing on the bed.</p>

        <p>Her parents eye each other. Her mom taps her shoulder, “We have a surprise for you!”</p>

        <p>She turns onto her back. Her parents tower over her, wide smiles plastered on their faces. They pause for her enthusiasm to match theirs. She forces a smile. Her mom continues, “Our reservation tonight is at that nice restaurant you sent us, Match!”</p>

        <p>Her face lights up. Her body starts tingling. Elle went to Match in Miami three years ago and said the tuna tower was “worth the hype.” She grabs the only dress she packed and rushes to the bathroom to get ready. She skips the shower, deciding to straighten her oily hair for a slick look. While it crackles and steams from between the iron, she analyzes Elle’s content from Match. She covers her raw skin with an extra layer of foundation. She does her mascara like Elle: base coat, curl, finishing coat. She overlines her lips and finishes it off with plumping lip gloss. She tries out a winged liner. Her parents threaten to leave without her six times before she finally exits the bathroom.</p>

        <p>The hostess motions for them to follow her through the velvet curtain that opens to the restaurant. The walls are matte black. The tables are arranged in neat lines, each lit only by a single candle. In the back, sushi chefs shuffle around in an open kitchen, their movements quick and precise. Fresh lobsters, crabs, and whole fish are arranged on a bed of ice. The display glows in the otherwise dark room. She thinks about how the soft light will be perfect for her post. Her mom sees the first genuine smile in months break through.</p>

        <p>An androgynous waiter serves them their appetizers. A neat, tricolored cylinder of salmon tartare rests on the plate. Its layers glow in the candlelight. A bright green layer of avocado sits at the base, topped by a thin slice of fried seaweed and then a layer of cubed salmon. She references Elle’s salmon post and lifts her phone above the tower for a picture from the same angle. Her dad sticks his fork in the salmon tower and grabs a big bite. The pristine cylinder collapses to a messy heap. Rage courses through her body. She fights the tears welling up in her eyes. Her dad does not know luxury, he does not know what this means. His eyes grow wide as he points at the tuna, “You guys got to try this.”</p>

        <p>She pokes at her spicy noodle main. She practices matching the low angle of Elle’s dessert video as she dodges her parent’s questions about school.</p>

        <p>Two waiters carry over a simple-looking chocolate globe. She steadies her phone as they set the dish on the table. One waiter dramatically raises a ceramic spout and leans it over the globe. A slow, steady stream of melted chocolate drips onto the top. Longitudinal cracks spread across the surface, and the chocolate shell collapses in a dramatic fashion, revealing a perfect ice cream sundae nestled inside. Her parents start clapping. She looks down at her video. The time stamp at the top reads 00:00:00. Her stomach drops. She clicks her recent photos. The last picture is a blurry one of the ruined tower. Waves of heat coarse through her body. Tears well up. Her voice cracks when she asks the waiter where the bathroom is.</p>

        <p>She slams the bathroom door behind her. She clenches her fists and prepares to scream. She looks around and softens. The heart-shaped mirror. The red, hexagonal backsplash. It’s the background of Elle’s profile picture. She drops to her knees and sobs. She curls into a child’s pose and lets her tears drip on the chic marble floor. She pulls out her phone and opens the photo for reference. Elle’s phone is completely centered in the mirror. Elle peeks her face out to left, flashes her puppy dog eyes, and rests her pillowy lips in a pout. She peels herself off the ground and blows her nose in toilet paper. Her face is puffy and red. Mascara runs down her cheeks in harsh black streaks. Her lip liner is smeared onto her cupid’s bow. She centers the phone in the mirror and peeks out to the left. She widens her eyes. She pushes her lips so far out they touch her nose. Tears stream down her cheeks. She takes one photo. She finally got it.</p>

        `
    },
    arrow: {
        type: 'writing',
        title: 'The Arrow',
        content: `
        <p><strong>The Arrow</strong></p>

        <p>The dusk comes over the woods with its own chill, its own urgency. Without the sun’s revealing rays, I resort to my binoculars to find a caramel brown of a deer’s hide within the ash brown of the bare tree trunks and khaki brown of the dead leaves. The two magnified circles condense the overwhelming forest into manageable chunks. All I see is what I have been seeing for hours—silhouettes of bare branches. Still, I scan.</p>

        <p>A snap comes from the west, I whip my binoculars towards the sound. White antlers peek out from behind a thick trunk. I steady my hands and watch a muscular buck stalk through the leaves. I instinctively look back for my dad, forgetting that I am alone this time. I keep his presence my head, his plans for me. Shoot the animal. Never taking my eyes from the antlers, I follow the steps he gave me—sling the bow to the front, extend it forward, take the arrow out of the holster, click it into bow string. I pull back on the string, my hand meets my ear, the tip of the arrow follows the buck’s wide eyes, just like Dad taught me. One arrow. One chance to prove myself. My hand starts to shake. Dad’s hand never shakes. I feel my arm grow weak. Through the brain. One shot. It won’t feel anything.</p>

        <p>I release the string. I watch the arrow slice through the crisp air. The echo of the string’s reverberation mars the forest’s silence. The arrow pierces the middle of the buck’s stomach, he collapses to his side. I missed the head. I missed it completely. The buck explodes with a piercing, high-pitched scream. He lifts its neck to wail like a baby in a tantrum and cycles his legs, writhing in pain. Red catches my eye. The wound is gushing. Blood mattes the fur and drips messily onto the leaves. I force some shallow breaths through my tense throat to shake off the shock. I need to fix this. I see his fur jumping up and down, a panicked heart thumping against the bounds of his chest. I run to the buck. His wild, wide eyes track me. He cycles his legs faster, trying to run through the air from his predator— me. I find the space in the air out of reach of the flailing legs and inch closer to him. I anchor my boot on his stomach and grab onto the arrow. I start pulling, feeling the arrow rip through fleshy layers of organ and muscle. The buck wails and shakes and twitches. I pull harder with my trembling arms, the arrow catches on his tough skin, his wails intensify. Cold tears start rolling down my cheeks. I pull harder. I am not strong enough. I pull like Dad is watching. The tip of the arrow rips through the sticky fur. I fall backwards by my own force, blubbering and collapsing with the buck.</p>

        <p>Half the arrow is dripping with blood. Through the shuddering of my sobs, I pick myself up. I extend the bow, click the arrow in, and pull back. Blood is sputtering out of his mouth with the repeated cries. I see the warmth of his breath in the terrible wails and the wetness of his nose, the tip of my arrow could almost scrape it. He bows his head forward for a moment. I release. The arrow enters right between the eyes. His neck flops to the side, the wailing ceases. I hear human crying clearly now; it doesn’t sound like any noise I’ve ever made in my life. I push the bow to my side and wipe the frozen trails of tears on my jacket. I have to get back to Dad. I grab the buck by its antlers. I keep pulling, and the body starts to drag from its limp neck, catching dead leaves as I walk. Blood from its mouth drips at my feet. They mix with my falling tears on stale leaves. I focus on the arrow poking towards me, right in between the eyes, catch my breath. I keep on stepping back. The buck starts to feel fake. Dad’s going to be proud.</p>

        `
    },
    bathroom: {
        type: 'writing',
        title: 'Gender Neutral Bathroom',
        content: `
        <p><strong>Gender Neutral Bathroom</strong></p>
        <p>I share a gender-neutral bathroom with the freshman baseball team. I share a gender-neutral bathroom with a team of fifteen boys because my roommate and I are the only girls on our side of the floor and the women’s bathroom is about three hundred feet away. Still, instead of going to the bathroom right next to us, the bathroom whose flushes echo through our wall, my roommate walks the three hundred feet. Her choice leaves me as the only girl who uses the gender-neutral bathroom.</p>

        <p>On move-in day, the toilet seat is up when I enter the bathroom. It’s not just that the toilet seat is up, it’s that the toilet seat to the right is also up, and the toilet seat to the right of that one is also up. It is my first day of college and my true welcome parade was not the screaming orientation leaders in the hallway but the toilet seats in my gender-neutral bathroom.</p>

        <p>My first morning I am greeted by a variety of unflushed toilets. Globs of toilet paper fill the toilet in the handicapped stall. Even with this clog, someone chose to pee on top of it. There is so much toilet paper, their pee doesn’t mix with the toilet water. It makes the inside of the bowl look like a raw egg. The middle stall toilet’s unflushedness comes with a stench—a violent punch of stale poop. I do not inquire further. In the last stall, toilet paper is notably absent. The toilet seat is down, and it is covered with droplets of pee. The drops refract the sunlight peeking over the stall’s wall. I take pictures and exit. I can hold it.</p>

        <p>I get to know the faint smell of urine in the showers. I get to know the pubes left on the toilet seat. I get to know the dried spit on the mirror that distorts my face. I get to know the baseball team. I meet some through awkward glances in the mirror as they exit the stall and leave, not even considering washing their hands. I meet one through silent, side-by-side face washing. As I dry my face with a paper towel, he holds out his phone to get my Snapchat. My fingers are still sticky with facewash as I type my username. They leave distinct fingerprints that he rubs his phone on the side of his shorts to get rid of.</p>

        <p>I meet another one as we exit neighboring showers together. I know the simultaneous exit was not a coincidence because his shower turned off five minutes before I was done, and he opened his curtain seconds after he heard mine move. He gives me an evil grin when he opens the bathroom door for me to exit, a gentleman. I get to know some of them through their habits. I wave back in the hallway to barefoot-bathroom guy. I see consistently-spits-his-toothpaste-directly-onto-the-faucet guy on the staircase every day. The hawks-his-phlegm-in-the-shower guy and I brush our teeth together often.</p>

        <p>I learn how to navigate. I use the handicap shower because it smells the least like pee and has the best water pressure. I keep headphones on while brushing my teeth and don’t have to make small talk. On Thursdays, I can take slow, serene showers because they have practice for four hours. I wake up early so that I am the first one to brush my teeth and wash my face after the bathroom is cleaned.</p>

        <p>But I didn’t learn enough to avoid barefoot-bathroom boy making eye contact with me as he pees. Not through the crack between the stall door and the divider, but through the two feet of open air from the open stall door I think he keeps open to assert his manliness or to make me feel unwelcome or just to show that he can. My body is still tense when I get back to my dorm, lay down on my bed, and try to figure out if what just happened actually happened.</p>

        <p>I walk down the extra three hundred feet to the women’s bathroom the next morning. The sinks don’t have dried spit in them. The toilet seats rest gracefully on the toilet. The toilets are all flushed because it is not an option not to flush. The silence, an absence of dirty conversations and maniacal laughter at attempts to break the soap dispenser, weighs the air down.</p>

        <p>I am upset because I know that the girls in the bathroom with me would make much funnier dirty jokes and we would be able to break the soap dispenser way more efficiently. In witnessing daily displays of grossness from my male peers, I have realized that I envy them more than I could ever hate them. I want to be gross so badly—to pee with the stall door open, to fart loudly and pungently, to leave my pee unflushed just to tell my hall-mates, “yeah, I did that.”</p>

        <p>I spend the next week in the women’s bathroom. The cleanliness suffocates me tighter than the smell of unflushed poop. I shudder when I see a girl wipe down the sink after she uses it. It is weird finding a clean toilet on the first stall door I open.</p>

        <p>This time, when I’m done peeing, I give flushing the toilet a second thought. What if I just didn’t? The metal handle beckons me. I stand above the toilet. I want to leave. I want to shut the door behind me and make it someone else’s problem. I can’t. I cede to the gleaming metal handle.</p>

        <p>The force of my flush becomes a powerful tornado trapping me in the middle stall. I grasp at the sides of the stall but fail to gain a firm grip. Even though I am furiously running my feet backward, my slippers are too slippery and they slide me toward the toilet. I wish I was barefoot so that I could dig my toes into the grout and escape.</p>

        <p>The swirling wind whips my head and twists my hair. I try to fight against the wind. I try to fight against the cleanliness of the toilet, its sparkle and violent spotlessness. I try to fight against how my mom trained me to be neat and clean for others, especially men. But you can’t fight against a force that hits you from all angles.</p>

        <p>All I can do is run my feet backward to slow my advancement toward the eye of the wind vortex. I reach the toilet and look inside the bowl. I see the perpetual politeness expected of me that wants to swallow me whole. I see the indifference of the baseball boys who have never been expected to be anything close to polite, who don’t get trapped in the wind vortex because they don’t even flush.</p>

        <p>I leave the stall defeated. I stare at the water gushing from the faucet—I couldn’t even leave without washing my hands.</p>

        <p>On the walk back, I read the name tags on the doors I pass. They are all girls’ names, an unwelcome reminder of my bad dorm luck. I fix my eyes on the carpet. With the motion of my stride, the hack eighties design turns almost psychedelic, the random shapes of blue and orange dance and spin. This is enough to entertain me. It is not enough to make me forget how unnecessary this walk is, how stupid it is, and how it isn’t even adding to my step totals for the day because I left my Apple watch charging in my dorm.</p>

        <p>I have a conversation with the barefoot-bathroom boy. He tells me that whenever he saw me in his bathroom, he got uncomfortable. This stuns me. Did he think about how I could have been made uncomfortable when he started peeing with the stall door open directly in front of me? Did any of them think of how I might have felt uncomfortable in what is supposed to be my bathroom?</p>

        <p>I want to go back to the bathroom out of spite, use my presence to make the baseball guys as uncomfortable as they have made me. I can wait outside their showers for them to finish, start conversations only when I know they don’t want to talk, and pee with the stall door open.</p>

        <p>But I won’t, because I know that I can make them squeamish by simply washing my face and going to the bathroom. I want to teach them a lesson, but I want to learn as well. The bathroom offers daily lessons in how to walk away from an unflushed toilet, how to expose your toes to the cold tile, and how to undo years of mom’s training. So, I return to the filth. I return to my bathroom.</p>

        `
    },
    southafrica: {
        type: 'photography',
        title: 'south africa',
        photos: [
            { url: 'images/writing/south_africa/IMG_3414.JPG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3437.JPG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3456.JPG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3472.JPG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3533.JPG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3568.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3569.JPEG', caption: 'South Africa' },

            { url: 'images/writing/south_africa/IMG_3592.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3606.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3618.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3742.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3778.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3818.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3835.JPEG', caption: 'South Africa' },

            { url: 'images/writing/south_africa/IMG_3844.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3953.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3983.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_3998.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_4012.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_4134.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_4213.JPEG', caption: 'South Africa' },

            { url: 'images/writing/south_africa/IMG_4226.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_4239.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_4307.JPEG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_4353.JPG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_4382.JPG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_4408.JPG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_4412.JPG', caption: 'South Africa' },

            { url: 'images/writing/south_africa/IMG_4463.JPG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/IMG_4475.JPG', caption: 'South Africa' },
            { url: 'images/writing/south_africa/southafrica.JPG', caption: 'South Africa' }
        ]
    },
    summer: {
        type: 'photography',
        title: 'summer',
        photos: [
            { url: 'images/writing/summer/IMG_2675.JPG', caption: 'Summer' },
            { url: 'images/writing/summer/IMG_2721.JPG', caption: 'Summer' },
            { url: 'images/writing/summer/IMG_2787.JPG', caption: 'Summer' },
            { url: 'images/writing/summer/IMG_2952.JPG', caption: 'Summer' },

            { url: 'images/writing/summer/IMG_2984.JPG', caption: 'Summer' },
            { url: 'images/writing/summer/IMG_3096.JPG', caption: 'Summer' },
            { url: 'images/writing/summer/IMG_3123.JPG', caption: 'Summer' },
            { url: 'images/writing/summer/IMG_3127.JPG', caption: 'Summer' },

            { url: 'images/writing/summer/IMG_3131.JPG', caption: 'Summer' },
            { url: 'images/writing/summer/IMG_3141.JPG', caption: 'Summer' },
            { url: 'images/writing/summer/IMG_3146.JPG', caption: 'Summer' },
            { url: 'images/writing/summer/IMG_3149.JPG', caption: 'Summer' },

            { url: 'images/writing/summer/IMG_3152.JPG', caption: 'Summer' },
            { url: 'images/writing/summer/IMG_3157.JPG', caption: 'Summer' },
            { url: 'images/writing/summer/IMG_3169.JPG', caption: 'Summer' },
            { url: 'images/writing/summer/IMG_3175.jpg', caption: 'Summer' },

            { url: 'images/writing/summer/IMG_3181.JPG', caption: 'Summer' },
            { url: 'images/writing/summer/IMG_3188.JPG', caption: 'Summer' }
        ]
    },
    abroad: {
        type: 'photography',
        title: 'abroad',
        photos: [
            { url: 'images/writing/abroad/232000880_Unknown.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/232001120_Unknown.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/232001504_Unknown.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/232002224_Unknown.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/232002304_Unknown.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/232002560_Unknown.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/232004608_Unknown.JPG', caption: 'Abroad' },

            { url: 'images/writing/abroad/IMG_0374.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0409.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0511.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0580.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0597.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0600.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0608.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0620.jpg', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0627.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0672.jpg', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0720.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0747.jpg', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0797.jpg', caption: 'Abroad' },

            { url: 'images/writing/abroad/IMG_0833.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0835.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0877.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0885.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0909.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_0940.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1001.jpg', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1012.HEIC', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1014.HEIC', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1015.HEIC', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1026.jpg', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1060.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1064.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1114.HEIC', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1140.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1162.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1181.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1182.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1186.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1190.JPG', caption: 'Abroad' },

            { url: 'images/writing/abroad/IMG_1245.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1407.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1422.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1430.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1479.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1499.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1510.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1528.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1542.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1548.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1556.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1633.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1636.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1650.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1659.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1671.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1731.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1830.JPG', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_1896.jpg', caption: 'Abroad' },
            { url: 'images/writing/abroad/IMG_2602.JPG', caption: 'Abroad' }
        ]
    },
    madrid: {
        type: 'photography',
        title: 'madrid',
        photos: [
            { url: 'images/writing/madrid/231630320_Unknown.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/231735328_Unknown.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/231735472_Unknown.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/231735712_Unknown.JPG', caption: 'Madrid' },

            { url: 'images/writing/madrid/IMG_0511.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0529.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0537.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0570.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0580.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0590.JPG', caption: 'Madrid' },

            { url: 'images/writing/madrid/IMG_0597.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0600.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0608.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0615.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0620.jpg', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0621.jpg', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0625.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0627.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0633.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0641.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0642.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0644.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0646.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0651.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0654.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0656.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0657.JPG', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0658.jpg', caption: 'Madrid' },
            { url: 'images/writing/madrid/IMG_0672.jpg', caption: 'Madrid' }
        ]
    },

    video1: {
        type: 'videography',
        title: 'July Fourth',
        videoId: 'rdqAyy6yOmQ', 
        description: 'A short video compilation of July Fourth celebrations with family and friends.'
    },
    video2: {
        type: 'videography',
        title: 'Safari',
        videoId: '0HARDU8VysU', 
        description: 'A short video compilation of my family\'s safari trip in South Africa.'
    }
};

// Filter functionality
// Filter functionality and modal for writing page
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.story-card');

    // Only set up writing page functionality if elements exist
    if (filterBtns.length === 0 || cards.length === 0) {
        return;
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // Filter cards
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.type === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Modal functionality
    const modal = document.getElementById('storyModal');
    const modalContent = document.getElementById('modalContent');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.getElementById('closeBtn');

    let currentPhotoIndex = 0;

    function showPhoto(index, photos, title) {
        const photo = photos[index];
        
        // Reuse or create elements without destroying DOM
        let photoViewer = modalBody.querySelector('.photo-viewer');
        let photoNav = modalBody.querySelector('.photo-nav');
        
        if (!photoViewer) {
            // First time: create structure once
            modalBody.innerHTML = `
                <h1>${title}</h1>
                <div class="photo-viewer">
                    <img src="${photo.url}" alt="${photo.caption}">
                    <p class="photo-caption">${photo.caption}</p>
                </div>
                <div class="photo-nav">
                    <button class="photo-nav-btn" id="prevBtn">← Previous</button>
                    <span class="photo-counter"></span>
                    <button class="photo-nav-btn" id="nextBtn">Next →</button>
                </div>
            `;
            photoViewer = modalBody.querySelector('.photo-viewer');
            photoNav = modalBody.querySelector('.photo-nav');
        }
        
        // Update title, image and caption without recreating
        const titleEl = modalBody.querySelector('h1');
        const img = photoViewer.querySelector('img');
        const caption = photoViewer.querySelector('.photo-caption');
        const counter = photoNav.querySelector('.photo-counter');
        const prevBtn = photoNav.querySelector('#prevBtn');
        const nextBtn = photoNav.querySelector('#nextBtn');
        
        titleEl.textContent = title;
        img.src = photo.url;
        img.alt = photo.caption;
        caption.textContent = photo.caption;
        counter.textContent = `${index + 1} / ${photos.length}`;
        
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === photos.length - 1;
        
        // Remove old listeners and attach new ones
        prevBtn.replaceWith(prevBtn.cloneNode(true));
        nextBtn.replaceWith(nextBtn.cloneNode(true));
        
        const newPrevBtn = photoNav.querySelector('#prevBtn');
        const newNextBtn = photoNav.querySelector('#nextBtn');
        
        newPrevBtn.addEventListener('click', () => {
            if (index > 0) showPhoto(index - 1, photos, title);
        });

        newNextBtn.addEventListener('click', () => {
            if (index < photos.length - 1) showPhoto(index + 1, photos, title);
        });
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const contentId = card.dataset.id;
            const content = contentData[contentId];

            if (!content) return;

            // Clear previous styling
            modalContent.className = 'modal-content';

            // Add type-specific styling and content
            if (content.type === 'writing') {
                modalContent.classList.add('writing-story');
                modalBody.innerHTML = content.content;
            } else if (content.type === 'photography') {
                modalContent.classList.add('photo-gallery');
                currentPhotoIndex = 0;
                
                // Preload all photos to avoid black flash
                content.photos.forEach(photo => {
                    const img = new Image();
                    img.src = photo.url;
                });
                
                showPhoto(0, content.photos, content.title);
            } else if (content.type === 'videography') {
                modalContent.classList.add('video-player');
                // Clear previous content first
                modalBody.innerHTML = '';
                modalBody.innerHTML = `
                    <h1>${content.title}</h1>
                    <p>${content.description}</p>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/${content.videoId}"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                        </iframe>
                    </div>
                `;
            }

            modal.style.display = 'block';
            // Trigger animation by adding show class after display is set
            setTimeout(() => modal.classList.add('show'), 10);
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });
});


document.querySelectorAll('.image-wrapper').forEach(wrapper => {
    const img = wrapper.querySelector('img');
    const gifSrc = img.getAttribute('data-gif');
    const stillSrc = img.getAttribute('data-still');

    wrapper.addEventListener('mouseenter', () => {
        if (stillSrc) img.src = stillSrc;
    });

    wrapper.addEventListener('mouseleave', () => {
        if (gifSrc) img.src = gifSrc;
    });
});