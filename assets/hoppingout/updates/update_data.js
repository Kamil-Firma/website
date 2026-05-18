var update_count = 5;
function get_update_data(uid){
    switch(uid){
        case 0:
            return {
                title : 'The DEMO to my new game, Hopping Out is out NOW',
                banner : "",
                date : "July 21, 2025",
                text : 'Trailer: <a href="https://www.youtube.com/watch?v=6H_W1hXnfH4" target="_blank">Hopping Out DEMO Trailer</a><br><br><a href="https://gamejolt.com/games/hopping-out/1006317" target="_blank">Hopping Out (Outdated DEMO) - Game Jolt</a>'
            };
        case 1:
            return {
                title : 'Happy month of Hopping Out (Devlog)',
                banner : "aug2025_banner.png",
                date : "August 22, 2025",
                text : "It has been a month since the DEMO to <b>Hopping Out</b> came out!! Thank you to everyone who decided to play it!! (consider doing so if you haven't)<br>Since the last demo patch, i've been working on the full game proper:<br><img src='assets/hoppingout/updates/aug2025_crab.png'><br>I don't want to spoil everything before release.. here's a few new mechanics.<br><img src='assets/hoppingout/updates/aug2025_umbrella.png'><br>I've been mainly focused on fleshing out the Beach (the last area in the DEMO). I'm quite satisfied with how it's been going but there's a bit left to do before i can call it complete.<br><img src='assets/hoppingout/updates/aug2025_checklist.png'><br>A new feature that's been added is the CHECKLIST. It is unlocked a bit into the game, and it tracks your progress.<hr><b>Here's a tidbit about the development:</b><br>Hopping Out has been an idea i've had for over 2 years now. Crazy.<br><img src='assets/hoppingout/updates/aug2025_prototype.png'><br>This is the first prototype i made on 20 July 2023. It's just this one level mostly testing GameMaker, and whether i could make a grid-based game in general.<br>This was before i decided on Frog being blue so Frog is unusually green here. There's a bug here where if you press or hold two direction buttons at once you can move diagonally and clip into walls.<br>I didn't do anything more with the idea until earlier this year where I decided to make the game for real.<br><img src='assets/hoppingout/updates/aug2025_early1.png'><br>It worked pretty differently at first.. the water worked the same as walls where you'd hit it and stop mid-jump.<br><img src='assets/hoppingout/updates/aug2025_early2.png'><br>The tongue was pretty different as well. It shot out and stuck to the box it hit, then letting go of the button would automatically pull the box forward to 1 tile in front of you.<br><img src='assets/hoppingout/updates/aug2025_early3.png'><br>The river was real-time.. the puzzle here was that you had to time jumping off to be aligned with the fly vertically.<hr>By the way.. i released the soundtrack for the DEMO a while back and never really posted about it here:<br><a href='https://www.youtube.com/watch?v=C5q7Kg-yBn8' target='_blank'>Hopping Out DEMO Soundtrack</a>"
            }
        case 2:
            return {
                title : 'Hopping Out is dark now (Devlog)',
                banner : "oct2025_banner.png",
                date : "October 21, 2025",
                text : "Hello all! This is another devlog for my game <b>Hopping Out</b>!! (play the DEMO if you haven't)<br>Lots of progress since the last devlog! This includes: <b>100 LEVELS!</b> ..aka double the amount in the DEMO. I'm very happy with how the game's coming along.<br><img src='assets/hoppingout/updates/oct2025_hot.png'><br>The Beach (which was the last area in the DEMO) is feature-complete. It features a very unique level which i won't spoil here..<br>As such, i've moved on to fleshing out The Shore (which was the second area in the DEMO) with a couple new elements and a pretty special level concept:<br><img src='assets/hoppingout/updates/oct2025_dark.png'><br><i>wow it's dark!</i><br>The Shore is also basically feature-complete (i would like to add one more level though.. it's hard to get it to work well)<br>I've also started the fourth area: <b>The Countryside</b>. You can tell because Frog is wearing a straw hat:<br><img src='assets/hoppingout/updates/oct2025_key.png'><br>..well, you can wear it anywhere once you unlock it.<br><br>I think that's all i wanna talk about here. Very excited!!"
            }
        case 3:
            return {
                title : 'WISHLIST HOPPING OUT ON STEAM!! (Devlog)',
                banner : "jan2026_banner.png",
                date : "January 14, 2026",
                text : "The Steam page is finally up!!!!!!!<br>Wishlist and check out all the new screenshots and trailer here: <a href='https://store.steampowered.com/app/4297110/Hopping_Out/' target='_blank'>Hopping Out on Steam</a><br>Or watch the trailer on YouTube: <a href='https://youtu.be/pwBBmbw4Gb4' target='_blank'>Hopping Out Wishlist Trailer</a><hr>Lots of progress has been done since the last devlog, for example:<ul><li><b>The Countryside</b> is now feature-complete. I'm really really happy with it. (It has cows.)</li></ul><img src='assets/hoppingout/updates/jan2026_barn.png'></img><ul><li><b>The City</b>, the next area, is very close to completion (needs just a few more levels, and some placeholder art has to be redone). It's the biggest world in the game and does something pretty unique with its structure..</li></ul><img src='assets/hoppingout/updates/jan2026_rats.png'></img><br>There's still a lot of work to be done, but the game is getting closer and closer to release!!<br><hr>By the way.. the really cool key art that's used on Steam was created by my friend Amitz, look:<br><img src='assets/hoppingout/updates/jan2026_keyart.png'></img>"
            }
        case 4:
            return {
                title : 'DEMO out! + March Development Update',
                banner : "march2026_banner.png",
                date : "March 3, 2026",
                text : "Hello!!<br>It has been a bit under two months since I published the Steam page for Hopping Out, and the game has grown quite a lot since then!<br>First off: <b>The DEMO is now up on Steam!</b> It contains the first 51 levels of the game. It's quite a bit different from the old pre-Steam demo, with lots of polishing changes and some new features.<br>Do consider checking it out and leaving your feedback!<hr>Since this is the first devlog over on Steam here's a quick overview of the game's development up until now:<br><b>World 1 - Swamp:</b> Complete!<br><b>World 2 - Shore:</b> Complete!<br><b>World 3 - Beach:</b> Complete!<br><b>World 4 - Countryside:</b> Complete!<br><b>World 5 - City:</b> All levels complete! Not tested as much yet. Needs finalized cutscene art.<br><b>World 6 - Mansion (ending):</b> All levels complete! Needs lots of testing and finalized art.<hr>The last two months of development have been primarily focused on two things: the city and the mansion.<h3>The City</h2><img src='assets/hoppingout/updates/march2026_city_levelselect.png'><br>The City is now feature-complete! It is by far the largest world in the game.<br>After a few intro levels, it branches out into several sections which can be completed in (mostly) any order. Each section ends on a pretty unique level.<br>There's a lot of cool stuff in the level select map for this area, including several NPCs and a couple secrets!<br>Really happy with how this world turned out!<h3>The Mansion</h2><img src='assets/hoppingout/updates/march2026_mansion_statues.png'><br>The majority of the work done in the past month has been focused on creating the Mansion. It will be the last world before the game's ending.<br>It features a set of new mechanics and a bunch of levels, though it hasn't been tested nearly as much as the rest of the game so there's still a long ways to go before it can be called finished.<br><img src='assets/hoppingout/updates/march2026_mansion_pool.png'><br><hr><div id='croakfrogspot'></div>I think that's all! Thank you for reading."
            }
        case 5:
            return {
                title : 'April Development Update',
                banner : "apr2026_banner.png",
                date : "April 23, 2026",
                text : "Hello!!<br>Lots has happened since the last update!<hr>The last world before the game's ending, the Mansion is more or less finished!<br><img src='assets/hoppingout/updates/apr2026_mansion_painting2.png'><br>I'm really quite happy with how it turned out. There's a cool guy there.<hr><img src='assets/hoppingout/updates/apr2026_post.png'><br>I've been working on whatever happens after the game's ending.<hr>The past month has also been a month of adding cool side stuff:<ul><li>Every bonus level in the game has a costume reward now! That's a bunch!!</li><li>Every slideshow cutscene has proper art now! That's also a bunch!!</li><li>Finally added Steam achievements.</li><li>Every NPC has a unique voice blip now, which i think adds cool personality.</li><li>There's interactive horse gameplay.</li><li>I added two guys i can't show yet but they both have a lot of dialogue.</li></ul><img src='assets/hoppingout/updates/apr2026_mansion_statue_hiding.png'><br>Outside of that, I've been focusing on full-game testing. These are becoming quite a lot longer as the game grows... Crazy to think about.<hr><div id='croakfrogspot'></div>That's all!! Thank you for reading again."
            }
        default:
            return "error";
    }
}