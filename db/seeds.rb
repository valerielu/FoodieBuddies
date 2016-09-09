# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create!(username: "FirstUser", password: "testing")
user2 = User.create!(username: "valerie", password: "testing")
user3 = User.create!(username: "valerie2", password: "testing")
user4 = User.create!(username: "valerie3", password: "testing")

50.times do
  User.create!(username: Faker::Name.first_name + Faker::Name.last_name,
  password: Faker::Lorem.characters(10))
end

profiles = [
  "Native Italian raised in DC’s international community, I am now 'playing adult' in NYC and trying to keep discovering this chameleon of a city.
  Things move at 100mph here so New Yorkers, despite being packed together on subway trains, on the street, in line at Trader Joe’s, stare right past each other -
  so let’s have tea! (at 0mph).

Conversation is magical because in its ping pong match of questions and
interruptions and laughter and answers, you can discover things you never would have imagined about the person in front of you.
It is the treasure hunt that leads us to the fascinating stories people have to tell. I want to experience as many strange and interesting ideas as possible.

Also, and not entirely related, I wish I could follow the professional path to become a ninja.
I occasionally make sound effects to accompany mundane daily tasks (i.e. huachaaa when I figure something out at work).

I love when people notice random, seemingly insignificant, yet excellent things in life:
the perfect foam on top of a cappuccino, 5 minutes of sunny rain, the actually excellent musician who barges onto your subway train...
Let’s talk about stuff: NYC roofs, dance, bely dance, exercise, ninjas, green tea, travel, audiobooks, the Middle East, Arabic,
studying Arabic (a whole separate endeavor), grit, FOOD, psychology, chocolate, dictators on social media, dreams, languages,
photography, yoga and its crazy satisfying pretzel poses.",


  "In such a busy city where we pass by hundreds of New Yorkers every day, I've always wondered what peoples'
  stories are and how those stories continue to shape their lives.
  There are countless times on the subway where I've stood inches away from a person, and yet never felt so distant.
  Life's too short for that. So let's get some stories rolling! What better way to make the big bad world a smaller,
  friendlier place than to stop by and have a cup of tea!

I'm always on the hunt for knowledge, making progress and sharing my experience to help others.
I love moments where people are unfiltered, authentic, and raw because honest conversations are so rare nowadays.
Also I'm a huge fan of creating habits and expressing gratitude.
One time, I took on a 21 day cold shower challenge. It ended with a hot bath on day 22 and me thanking the universe for having only 1st world problems.

Habit building, planned spontaneity, your most random life lesson, excel shortcuts, entrepreneurship, purpose,
authenticity, connection, sharing, contribution, figuring out life while living it, that delicious sandwich you had for lunch, how we can live to 150",



  "I was born and raised on Long Island, spent over a year of my life living in China, moved to Nepal for five months after graduating college and have,
  since then, returned to my exotic roots on the Island of Long. Meeting new people and seeing new places stimulates the brain, keeps life colorful, and provides an invaluable education. So, with that said, let’s see a new place, try a new tea and meet some new people? A jam packed adventure in one night.

Once upon a time...
1) I was the prop in a circus show directed and performed by my two older sisters.
2) I got mad at my mom and hid her wallet in my hamper and forgot about it.

There was once a...
1) Dog I called Buzz Light-Year Brody.
2) Dog called Mau Cha who befriended me only during earth rattling thunderstorms and never otherwise.

It was the best of times it was the worst of times...
1) When I went to the wrong airport in Shanghai to catch my flight home to New York.
2) When one of the first few steps I took that day happened to be in a massive pile of fresh yak feces.

It was a dark and stormy night...
1) When I watched Cinema Paradisio
2) When I watched Modern Times

In a land far away...
1) I was blissfully detained.
2) I attended and danced at a beautiful Indian Wedding.

Things you otherwise might not talk about, learn about, or hear about.",



  "Every one of us walk around with an invisible backpack full of stories.
  Some are rock climber compact, some are long-distant hiker full, some are handmade, colorful and laced with frills,
  and others are inked with worldwide mementos. No matter what you bring, let’s sit down, rest our packs, and share a little of what we’ve brought.

I think of my life through the moments shared with different people I’m lucky enough to cross paths with.
There is my brother who inspired me to seek education in America. There is a little girl I swam with in the Nan River of Thailand. There is an artist who pointed me to using art for social change. There is a little boy nicknamed Hippo who made me fall in love with San Francisco.

Oh! I am also a lover of food: cooking, eating, growing food, and helping producers tell their stories.

I’m interested in what is the coolest cheese you’ve ever had. But I also want to know what inspires you to get out of bed when the day is gloomy?

Tell us, where did you come from? Not just the places, but also the people, the triumph and the stumbles, the smells and the way the air felt on your skin.

I don’t know you yet, but I already know that grabbing tea with you is going to be the highlight of my day. Come as yourself. Stay honest. And listen with your heart.

Eat your drink. Drink your food.",


  "I love cooking in my free time. I grew up loving my mom's cooking and she is my inspiration to try out different and new foods.

I'm a college dropout who loves to study and read books. I'm an artist and a businessman. I am an extrovert who loves to be alone.
I'm basically just a mixed bag trying to figure out what my life purpose is like everyone else.",



  "I'm often that guy having way too much fun for his own good. If you say, Let’s go [Insert fun opportunity],
  I’ll almost always say yes. In college, this led to a lot of all-nighters and in the real world well, not much has changed.
  Homework can always wait, so how about we get some tea?

I was in 7th grade when I figured out my hips don't lie. 70 bar mitzvahs in one year will do that to you.
To keep things interesting, I learned to give no f**ks on the dance floor, get weird, and have the time of my life with friends and strangers.
I got the yolo-itus and it has informed my journey wherever I go.

As much as I love a good bar mitzvah, I’ve since diversified my sources of fun.
You can find me catching waves in Pacifica, scaling seismic rocks in Napa, chilling in tidal hot springs near Stinson Beach,
or getting tea with strangers! If I’ve learned anything, though, it's that great fun doesn't happen without great people, so come have tea!

We could probably get into any of the following as well: Buddy the Elf / salsa dancing / best places to surf & climb /
thought-provoking books & documentaries / animosity towards Microsoft Office / travel adventures / when things go wrong
(i.e. that time I was very alone in a dark alley in a coastal Kenyan town) / when things go right
(that time in that dark alley when a gang of teen-aged strangers helped me find my way home) / reality surfing / matzo ball soup.",




  "I've lived in Texas, Boston, Ann Arbor, Chicago and now the Bay Area.
  Have had extended stays in Mexico, Copenhagen, Mountain View, and Italy.
  I guess I should call myself a nomad. But I want to have conversations that are spontaneous and all over the place.
  Tell me the fun laughs you've had with serendipitous strangers from places you never planned to go.
  Forgot that you didn't speak the same languages (or come from the same places) and just said something. Weren't you glad you took that chance?

My 4 year old response to life was always 'Why?' I could never accept 'because' as a good enough answer.
I'm pleasantly intrigued. Always thinking; trying to discover deeper meanings. People's upbringings, their paths, happiness.
Doesn't it excite you when you things come together full circle!
What if someone you met at a camp 7 years ago tells you a secret that leads you to your Personal
Legend?! Maybe we can talk about Personal Legends and Paulo Coelho's books. What's going on in the world.
Or lighter topics like where to catch a cool gig and the next music festival. I'm fascinated by the human condition;
I want to have deliciously organic conversations with people I have nothing in common with. Everyone has experiences and cool stories.
Something I might say could remind you of something else you did with someone somewhere. Can't wait to have tea!

Planting mango trees, connecting the dots, cookbooks, 99% Invisible, playing card games with strangers abroad, treehouses on Airbnb, millennials,
NPR & other addicting podcasts, Comedians in Cars Getting Coffee, social good, road trips, hipster neighborhoods, scuba diving, Yogi Tea quotes,
languages on Duolingo, good (no, great) ideas, sexy cars, the human condition, Anthony Bordain, childhood memories, phenomenal product design,
bridging the gap, your favorite Pixar movies, corny puns, changing the world",




  "All my life I've known diversity, as I am a Korean, Jordanian, Greek mutt.
  What has diversity taught me? That I love people and can relate to almost anyone! I love being around people and discussing interests, passions, dreams.

I've lived in the Peninsula part of the Bay all my life (San Bruno) which is very different from Sf,
and Berkeley where I have spent a somewhat decent amount of time.
But I love exploring new places, and hearing about different communities and backgrounds.

I recently graduated from Berkeley, YAY adulthood......

It was the blistering cold in the freezing Tundra I was but a small child on a nature adventure with friends, when an Ox came charging at us;
without thinking I leapt in front of the beast and wrestled it to the ground, as my barbaric roots came to the rescue.

Okay maybe some of the parts of my story was fabricated, the Ox was more like my dog, the Tundra was more like 55 degrees, which for Bay Area people,
is the 'blistering cold.' ",





  "Or Sheesh. I just got back from a gap year, so now I'm a senior attempting to adjust back to pset life after a year of no math.
  Tough stuff! I missed a lot of exciting developments at Stanford last year, so come share stories over a some chai

 ¯\_(ツ)_/¯

Stanford is a big place, so this is an attempt to make it a little smaller - make human connection easier to find, and revel in.
And we're blessed, because Stanford is one of those rare finds where talking to strangers almost always leaves you a little wiser.
 I love talking to others as it helps me self-reflect about who I want to be - you find reflections of them in you, and you in them.

Here’s multiple.

1) I spent the last year travelling through places, learning about developmental technology and its exponential impact.

2) I'm a people photographer wannabe  (give me a shot at taking portraits of you, we'll become fast friends)

3) Always been a reluctant snuggler, but still looking for a snuggle

4) I'm very intrigued by political protests, refugee rehabilitaion and international human rights violations. Documentaries,
Essays and Book suggestions are so welcome!

5) I'm an experience collector and aspiring storyteller looking to make people tear with laughter and laugh with tears.
I'm bad at telling jokes, but I'm good at being the joke myself!

I'm still working on the rest. Come to tea? I'll show you the storyboards :)",




  "There's nothing quite like having an insightful and enjoyable conversation with someone you just met.
  I love many things–travel, DJing, reading, exercising–but meeting new and interesting people tops the list.
  So let's grab a cup of tea (coffee works too!) and chat about whatever's on your mind. Don't worry, I won't bite.

I was raised on Long Island and currently attend Harvard studying Computer Science and Psychology.
Over the years I've accumulated a lot of hobbies–some even this past year. Recently,
I've gotten into working out and cooking (made homemade strawberry shortcake with whipped cream this summer!).
I've been a DJ for the past few years in my spare time and this year I started producing my own tracks.

I also love traveling. Studying abroad in London this past spring semester, I realized how important travel is to me.
It opened my eyes to so many different ways to live life and to be happy.
This wouldn't have been possible if not for the amazing conversations I had with people all over the world.

Discovering music, DJing, workout routines, personal finance, 4-Hour Workweek, tech, college, TED talks,
nutrition, cooking, standup comedy, why everybody's obsessed with Rick & Morty, backpacking, travel hacks, study abroad, mission burritos,
BOARD GAMES, and anything else you think of."


]

profile_pics = [
  "http://res.cloudinary.com/dsj48uswp/image/upload/v1473187206/zlsk7n0ya1kgffbgtzis.jpg",
  "http://res.cloudinary.com/dsj48uswp/image/upload/v1473187194/en09mfxdszzqhk5744mw.jpg",
  "http://res.cloudinary.com/dsj48uswp/image/upload/v1473388735/guy4_l3vtfq.jpg",
  "http://res.cloudinary.com/dsj48uswp/image/upload/v1473388734/girl4_kmpheo.jpg",
  "http://res.cloudinary.com/dsj48uswp/image/upload/v1473388736/guy1_ijlfyq.jpg",
  "http://res.cloudinary.com/dsj48uswp/image/upload/v1473388735/guy2_qjnuhh.png",
  "http://res.cloudinary.com/dsj48uswp/image/upload/v1473388735/girl5_akhsvl.jpg",
  "http://res.cloudinary.com/dsj48uswp/image/upload/v1473388735/girl3_oui7h0.jpg",
  "http://res.cloudinary.com/dsj48uswp/image/upload/v1473388734/guy3_mk2qfd.jpg",
  "http://res.cloudinary.com/dsj48uswp/image/upload/v1473388735/girl2_mxekxf.jpg",
  ""
]

30.times do
  User.create!(username: Faker::Name.first_name + Faker::Name.last_name,
    password: Faker::Lorem.characters(10), profile_pic_url: profile_pics[rand(11)],
    is_host: true, profile: profiles[rand(10)], city_id: 1 + rand(6),
    first_name: Faker::Name.first_name)
end

host1 = User.create!(username: "JaneDoe", password: "testing", is_host: true,
  profile: "I currently live in SF and I am so excited to be a host on FoodieBuddies! My definition of a “foodie” is a person who loves food and is passionate about it. A foodie’s eyes would literally light up when anything related to food comes up in a conversation.
  I am definitely a foodie myself!! I do not have one favourite type of cuisine but I do enjoy Japanese, Chinese, and Italian. And I love burgers!
  I do not make Japanese food at home and I occasionally cook Chinese and Italian. It should be evident from that I love going out to eat way too much!",
  profile_pic_url: "http://res.cloudinary.com/dsj48uswp/image/upload/c_scale,w_500/v1473389206/demo_user_pic_h6ni0h.jpg",
  city_id: 4, first_name: "Jane")

host2 = User.create!(username: "SecondHost", password: "testing", is_host: true,
  profile: "host story", profile_pic_url: "http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg",
  city_id: 2, first_name: "Happy Corgi")
host3 = User.create!(username: "LilyPad", password: "testing", is_host: true,
  profile: "host story", profile_pic_url: "http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg",
  city_id: 2, first_name: "Lily")
host4 = User.create!(username: "LindaZhang", password: "testing", is_host: true,
  profile: "host story", profile_pic_url: "http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg",
  city_id: 2, first_name: "Linda")
host5 = User.create!(username: "JessicaQueen", password: "testing", is_host: true,
  profile: "host story", profile_pic_url: "http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg",
  city_id: 2, first_name: "Jessica")
host6 = User.create!(username: "Richy0", password: "testing", is_host: true,
  profile: "host story", profile_pic_url: "http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg",
  city_id: 2, first_name: "Richy")

paris = City.create!(name: "Paris", country: "France", lat: 48.8566,
  lng: 2.3522, pic_url: "http://res.cloudinary.com/dsj48uswp/image/upload/c_scale,w_1600/v1473379552/Paris-Wallpaper-9_ijq5ce.jpg")
vegas = City.create!(name: "Las Vegas", state: "NV", country: "USA", lat: 36.1699,
  lng: -115.1398, pic_url: "http://res.cloudinary.com/dsj48uswp/image/upload/c_scale,h_900/v1473374639/Las-Vegas_apw3rb.jpg")

ny = City.create!(name: "New York", state: "NY", country: "USA", lat: 43.2994,
  lng: -74.2179, pic_url: "https://www.omnihotels.com/-/media/images/hotels/nycber/destinations/nyc-aerial-skyline.jpg?h=660&la=en&w=1170")
sanfran = City.create!(name: "San Francisco", state: "CA", country: "USA", lat: 37.7749,
  lng: -122.4194, pic_url: "http://res.cloudinary.com/dsj48uswp/image/upload/v1473379770/san-francisco-wallpaper-11_xkq9iu.jpg")
sydney = City.create!(name: "Sydney", country: "Australia", lat: -33.8688,
  lng: 151.2093, pic_url: "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178312/Sydney-Opera-House-31126.jpg")
taipei = City.create!(name: "Taipei", country: "Taiwan", lat: 25.0330,
  lng: 121.5654, pic_url: "https://i.ytimg.com/vi/fz1cBwNEUXI/maxresdefault.jpg")

buffet = Event.create!(date_time: DateTime.strptime("10/3/2016 11:00 AM", "%m/%d/%Y %l:%M %p"),
  location: "3570 Las Vegas Boulevard South, Las Vegas, NV 89109", limit: 5, host_id: 85 ,city_id: 2 ,food_type: "American buffet", restaurant: "Bacchanal Buffet", yelp_link: "https://www.yelp.com/biz/bacchanal-buffet-las-vegas-7" ,lat: 36.1167 ,lng: -115.1742)
shakeshack = Event.create!(date_time: DateTime.strptime("10/2/2016 08:00 PM", "%m/%d/%Y %l:%M %p"),
  location: "3790 S Las Vegas Blvd", limit: 7, host_id: 85 ,city_id: 2 ,food_type: "Fast food", restaurant: "Shake Shack")
lotus = Event.create!(date_time: DateTime.strptime("10/13/2016 01:00 PM", "%m/%d/%Y %l:%M %p"),
  location: "953 E Sahara Ave A5, Nevada, NV 89104", limit: 2, host_id: 86 ,city_id: 2 ,food_type: "Thai", restaurant: "Lotus of Siam", yelp_link: "https://www.yelp.com/biz/lotus-of-siam-las-vegas")

restaurant = ["Andytown Coffee Roasters", "Bronze Cafe", "Sweet Spice", "Little Miss BBQ", "Los Andes Restaurant", "Aviva by Kameel", "Copper Top BBQ", "Ono Seafood", "Golden Bear Trading Company", "Dat Cajun Guy", "Big Al's Pizzeria", "Detroit Coney Grill"]
food_type = ["American", "Mexican", "Chinese", "Indian", "Vegan", "Japanese", "Mediterranean", "Fast food", "French", "Vietnamese"]
yelp_link = %w(https://www.yelp.com/biz/bacchanal-buffet-las-vegas-7
http://yelp.com/biz/copper-top-bbq-big-pine
http://yelp.com/biz/art-of-flavors-las-vegas
http://yelp.com/biz/soho-japanese-restaurant-las-vegas
http://yelp.com/biz/shark-pit-maui-lahaina
http://yelp.com/biz/golden-bear-trading-company-san-francisco-3
http://yelp.com/biz/little-miss-bbq-phoenix-2
http://yelp.com/biz/sweet-dogs-miami
http://yelp.com/biz/dat-cajun-guy-haleiwa
http://yelp.com/biz/yoshino-japanese-deli-carlsbad
http://yelp.com/biz/saffron-and-rose-ice-cream-los-angeles
http://yelp.com/biz/andytown-coffee-roasters-san-francisco
)

30.times do
  Event.create!(date_time: Faker::Time.between(DateTime.now + 1, DateTime.now + 100),
  location: Faker::Address.street_address, limit: 2 + rand(8), host_id: 55 + rand(36) ,city_id: 1 + rand(6) ,
  food_type: food_type[rand(9)], restaurant: restaurant[rand(12)],
  yelp_link: yelp_link[rand(12)])
end

Attendance.create!(user_id: 85, event_id: 25)
Attendance.create!(user_id: 85, event_id: 12)
Attendance.create!(user_id: 85, event_id: 3)

80.times do
  Attendance.create(user_id: 1 + rand(90), event_id: 1 + rand(33))
end
