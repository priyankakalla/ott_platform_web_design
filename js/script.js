

let num_cards_GLOBAL = 5;

let cards = [
    {
        background:
            "sliders/t/1.jpg",
        display_background:
            "sliders/t/1.jpg",
        title: "Phir Aayi Ek Haseena",
        time: "2h 12m",
        description:
            "Their explosive love story began like no other. But with a vengeful detective on their tail, will Rani and Rishu ever find their happily ever after?"
    },
    {
        background: "sliders/t/3.jpg",
        display_background:
            "sliders/t/3.jpg",
        title: "Maharaj",
        time: "1h 11m",
        description:
            "Based on a real-life historic court case, a bold journalist questions a revered leader’s immoral behavior."
    },
    {
        background:
            "sliders/t/2.webp",
        display_background:
            "sliders/t/2.webp",
        title: "Maharaja",
        time: "2h 20m",
        description:
            "When Lakshmi goes missing from his home, a barber turns to the police for help. But will they heed his unusual request — and what price will he pay?"
    },
    
    {
        background:
            "sliders/t/7.webp",
        display_background: "sliders/t/7.webp",
        title: "Article 370",
        time: "2h 38m",
        description:
            "Ahead of a major constitutional decision, special agent Zooni Haksar is tasked with a secret mission to quell violence in a conflict-ridden region."
    },
    {
        background:
            "sliders/t/8.jpg",
        display_background: "sliders/t/8.jpg",
        title: "Peaky Blinders",
        time: "6 Seasons",
        description:
            "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost."
    },
    {
        background:
            "sliders/t/9.jpg",
        display_background: "sliders/t/9.jpg",
        title: "Money Heist",
        time: "5 Seasons",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background:
            "sliders/t/10.webp",
        display_background: "sliders/t/10.webp",
        title: "Indian2",
        time: "2h 45m",
        description:
            "Kamal Haasan returns in his award-winning role as Senapathy, an elderly freedom fighter-turned-vigilante who targets corruption and bribery in India."
    },
    {
        background:
            "sliders/t/11.webp",
        display_background: "sliders/t/11.webp",
        title: "Crew",
        time: "2h",
        description:
            "In this heist comedy, three flight attendants become gold smugglers to save their bankrupt airline."
    },
    {
        background:
            "sliders/t/12.webp",
        display_background: "sliders/t/12.webp",
        title: "Animal",
        time: "3h 24m",
        description:
            "This action-thriller about a young man on a vengeful path to protect his wealthy father was one of the highest-grossing Indian films of 2023."
    },
    {
        background:
            "sliders/t/13.jpg",
        display_background: "sliders/t/13.jpg",
        title: "Stranger Things",
        time: "4 Seasons",
        description:
            "Welcome to Hawkins, Indiana, a small town with big secrets. Strange sightings. Government cover-ups. And a dark force that turns everything upside down."
    },
    {
        background:
            "sliders/t/4.jpg",
        display_background:
            "sliders/t/4.jpg",
        title: "Squid Game",
        time: "1 Season",
        description:
            "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes."
    },
    {
        background:
            "sliders/t/5.jpg",
        display_background:
            "sliders/t/5.jpg",
        title: "Union",
        time: "1h 49m",
        description:
            "A construction worker goes from regular guy to aspiring spy when his high school sweetheart recruits him for a mission in this explosive action comedy."
    },
    {
        background:
            "sliders/t/6.jpg",
        display_background:
            "sliders/t/6.jpg",
        title: "The Witcher",
        time: "3 Seasons",
        description:
            "A massive hit across the globe, this epic tale of monsters, magic and destiny is incredibly fun to watch and easy to become immersed in, says Paste."
    },
    {
        background:
            "sliders/t/14.jpg",
        display_background: "sliders/t/14.jpg",
        title: "Lucifer",
        time: "6 Seasons",
        description:
            "Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective."
    },
    {
        background:
            "sliders/t/15.webp",
        display_background: "sliders/t/15.webp",
        title: "Fighter",
        time: "2h 44m",
        description:
            "When confronted with a dangerous enemy, India’s best fighter pilots — the “Air Dragons” — take to the skies while grappling with personal demons."
    },
    
    {
        background:
            "sliders/t/17.jpg",
        display_background: "sliders/t/17.jpg",
        title: "The Railway Men",
        time: "Limited series",
        description:
            "After a deadly gas leaks from a factory in Bhopal, brave railway workers risk their lives to save others in the face of an unspeakable disaster."
    },
    {
        background:
            "sliders/t/18.webp",
        display_background: "sliders/t/18.webp",
        title: "Srikanth",
        time: "2h 14m",
        description:
            "Rajkummar Rao stars as industrialist Srikanth Bolla in this inspirational biopic that follows his path from childhood poverty to soaring success."
    },
    {
        background:
            "sliders/t/24.webp",
        display_background: "sliders/t/24.webp",
        title: "Kalki",
        time: "2h 55m",
        description:
            "The fated arrival of Lord Vishnu’s final avatar alters the future in this mega sensation that’s crossed ₹1000 crore in global box office collections."
    },
    {
        background:
            "sliders/t/21.webp",
        display_background: "sliders/t/21.webp",
        title: "Leo",
        time: "2h 41m",
        description:
            "Violently pursued by criminals who insist he's a former gangster, a humble cafe owner fights to shield his family — and the truth about his identity."
    },
    {
        background:
            "sliders/t/19.jpg",
        display_background: "sliders/t/19.jpg",
        title: "Sacred Gmaes",
        time: "2 Seasons",
        description:
            "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm."
    },
    {
        background:
            "sliders/t/20.webp",
        display_background: "sliders/t/20.webp",
        title: "Vampire Diaries",
        time: "8 Seasons",
        description:
            "It's the love triangle that launched a thousand fanfics. Damon is dark and impulsive. Stefan is tortured but steadfast. Which brother will Elena choose?"
    },
    {
        background:
            "sliders/t/22.jpg",
        display_background: "sliders/t/22.jpg",
        title: "Elite",
        time: "8 Seasons",
        description:
            "Intrigue, sex and murder take center stage at a private school in this series that launched Ester Expósito, Arón Piper, Omar Ayuso, Manu Ríos and more."
    },
    {
        background:
            "sliders/t/16.jpg",
        display_background: "sliders/t/16.jpg",
        title: "Narcos",
        time: "3 Seasons",
        description:
            "Witness the birth of the Mexican drug war in the 1980s as a gritty new Narcos saga chronicles the true story of the Guadalajara cartel's ascent."
    },
    {
        background:
            "sliders/t/23.jpg",
        display_background: "sliders/t/23.jpg",
        title: "Sweet Home",
        time: "3 Seasons",
        description:
            "As humans turn into savage monsters and the world plunges into terror, a handful of survivors fight for their lives — and to hold on to their humanity."
    },{
        background:
            "sliders/t/25.webp",
        display_background: "sliders/t/25.webp",
        title: "Bad Boys",
        time: "1h 55m",
        description:
            "When a mysterious enemy frames their late captain for corruption, Miami cops Mike and Marcus go rogue to expose a conspiracy — and clear their own names."
    },{
        background:
            "sliders/t/26.jpg",
        display_background: "sliders/t/26.jpg",
        title: "Vikings Valhalla",
        time: "3 Seasons",
        description:
            "As the powerful North Sea Empire is forged by the sword of history's greatest medieval ruler, his Vikings thirst for glory, riches — and revenge."
    },{
        background:
            "sliders/t/27.jpg",
        display_background: "sliders/t/27.jpg",
        title: "Damsel",
        time: "1h 49m",
        description:
            "Dutiful daughter Elodie agrees to marry a prince to save her people. But when her wedding takes a shocking turn, she must figure out how to save herself."
    },{
        background:
            "sliders/t/k1.webp",
        display_background: "sliders/t/k1.webp",
        title: "Hajime no Ippo: The Fighting!",
        time: "76 Seasons",
        description:
            "Dutiful daughter Elodie agrees to marry a prince to save her people. But when her wedding takes a shocking turn, she must figure out how to save herself."
    },{
        background:
            "sliders/t/k2.jpg",
        display_background: "sliders/t/k2.jpg",
        title: "Rising Impact",
        time: "2 Seasons",
        description:
            "Dutiful daughter Elodie agrees to marry a prince to save her people. But when her wedding takes a shocking turn, she must figure out how to save herself."
    },{
        background:
            "sliders/t/k3.jpg",
        display_background: "sliders/t/k3.jpg",
        title: "Kengan Ashura",
        time: "3 Seasons",
        description:
            "Dutiful daughter Elodie agrees to marry a prince to save her people. But when her wedding takes a shocking turn, she must figure out how to save herself."
    },{
        background:
            "sliders/t/k4.webp",
        display_background: "sliders/t/k4.webp",
        title: "My Hero Acedemia",
        time: "7 Seasons",
        description:
            "Dutiful daughter Elodie agrees to marry a prince to save her people. But when her wedding takes a shocking turn, she must figure out how to save herself."
    },{
        background:
            "sliders/t/k5.webp",
        display_background: "sliders/t/k5.webp",
        title: "Hunter",
        time: "6 Seasons",
        description:
            "Dutiful daughter Elodie agrees to marry a prince to save her people. But when her wedding takes a shocking turn, she must figure out how to save herself."
    }
    ,{
        background:
            "sliders/t/k6.webp",
        display_background: "sliders/t/k6.webp",
        title: "Naruto",
        time: "9 Seasons",
        description:
            "Du tiful daughter Elodie agrees to marry a prince to save her people. But when her wedding takes a shocking turn, she must figure out how to save herself."
    }
    ,{
        background:
            "sliders/t/k7.jpg",
        display_background: "sliders/t/k7.jpg",
        title: "The New Legends Of monkey",
        time: "2 Seasons",
        description:
            "Dutiful daughter Elodie agrees to marry a prince to save her people. But when her wedding takes a shocking turn, she must figure out how to save herself."
    }
    
    
    

];


const IsMobile = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    if (width <= 736) {
        return true;
    } else {
        return false;
    }
};

const CheckSizeAttributes = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    let carousels = document.getElementsByClassName("card-carousel");

    let old_num_cards = num_cards_GLOBAL;
    let new_num_cards;

    if (width > 1920) {
        new_num_cards = 5;
    } else if (width <= 1920 && width > 768) {
        new_num_cards = 4;
    } else if (width <= 768 && width > 576) {
        new_num_cards = 3;
    } else if (width <= 576) {
        new_num_cards = 2;
    }

    for (let i = 0; i < carousels.length; i++) {
        if (carousels[i].children.length > 2) {
            for (let j = 1; j < carousels[i].children.length - 1; j++) {
                carousels[i].children[j].style.display = "none";
            }
            for (let j = 1; j < new_num_cards + 1; j++) {
                carousels[i].children[j].style.display = "flex";
            }
        }
    }

    num_cards_GLOBAL = new_num_cards;
};


const AddCards = () => {
    let carousel_width = document.getElementsByClassName("card-carousel")[0]
        .clientWidth;

    let btn_width =
        document.getElementsByClassName("carousel-btn")[0].clientWidth +
        document.getElementsByClassName("carousel-btn")[1].clientWidth;

    let num_cards = num_cards_GLOBAL;
    let card_margin = 2;
    let initial_width = 1920;
    let initial_height = 1080;

    let scale =
        (100 * ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
        initial_width;

    let content_titles = document.getElementsByClassName("content-title");

    for (let i = 0; i < content_titles.length; i++) {
        content_titles[i].style.marginLeft = `${card_margin}px`;
    }

    let carousels = document.getElementsByClassName("card-carousel");
    for (let i = 0; i < carousels.length; i++) {
        let not_chosen = [];

        for (let c = 0; c < cards.length; c++) {
            not_chosen.push(c);
        }

        for (let j = 0; j < cards.length; j++) {
            let chosen_index = Math.floor(Math.random() * not_chosen.length);

            let chosen_card = cards[not_chosen[chosen_index]];

            not_chosen.splice(chosen_index, 1);

            let card = document.createElement("div");
            card.classList.add("card");
            card.style.backgroundImage = `url(${chosen_card.background})`;

            //If image doesn't load
            card.style.backgroundColor = `#333`;

            card.style.width = initial_width * (scale / 100) + "px";
            card.style.height = initial_height * (scale / 100) + "px";
            card.style.margin = `0px ${card_margin}px`;
            card.style.minWidth = initial_width * (scale / 100) + "px";
            card.style.minHeight = initial_height * (scale / 100) + "px";

            let overlay = document.createElement("div");
            overlay.classList.add("overlay");

            let title = document.createElement("h4");
            title.innerText = chosen_card.title;
            let description = document.createElement("p");
            description.innerText = chosen_card.time;

            let button_container = document.createElement("div");
            button_container.classList.add("button-container");

            let button1 = document.createElement("div");
            button1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>`;
            button1.classList.add("watch");

            let button2 = document.createElement("div");
            button2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>`;
            button2.classList.add("queue");

            button2.addEventListener("click", function () {
                ToggleWatchLater(`${chosen_card.title}`);
            });

            let button3 = document.createElement("div");
            button3.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;
            button3.classList.add("star");
            button3.classList.add("queue");

            button3.addEventListener("click", function () {
                if (button3.children[0].style.color != "rgb(255, 255, 87)") {
                    button3.children[0].style.color = "rgb(255, 255, 87)";
                } else {
                    button3.children[0].style.color = "white";
                }
            });

            let button4 = document.createElement("div");
            button4.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>`;
            button4.classList.add("star");
            button4.classList.add("queue");

            button4.addEventListener("click", function () {
                if (document.getElementsByClassName("movie-desc").length > 0) {
                    // If the modal exists
                    document.getElementsByClassName("movie-desc")[0].remove();
                } else {
                    let modal = document.createElement("div");
                    modal.classList.add("movie-desc");

                    let modal_content = document.createElement("div");
                    modal_content.classList.add("modal-content");

                    let bg_image = document.createElement("div");
                    bg_image.classList.add("desc-image");
                    bg_image.style.backgroundImage = `url(${chosen_card.background})`;
                    let image_cover = document.createElement("div");

                    let close_btn = document.createElement("div");
                    close_btn.classList.add("close-btn");
                    close_btn.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`;

                    close_btn.addEventListener("click", function () {
                        this.parentElement.parentElement.parentElement.parentElement.remove();
                    });

                    image_cover.append(close_btn);
                    bg_image.append(image_cover);

                    let top_info = document.createElement("div");
                    top_info.classList.add("desc-top");
                    let title = document.createElement("h1");
                    title.innerText = chosen_card.title;

                    let btn_selection = document.createElement("div");
                    btn_selection.classList.add("button-selection");
                    btn_selection.innerHTML = `
                        <div class="watch">
                            <h3>Play</h3>
                            <svg fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </svg>
                        </div>
                        <div class="queue" onclick="ToggleWatchLater('${chosen_card.title}');">
                            <h3>Watch Later</h3>
                            <svg fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </div>`;

                    top_info.append(title, btn_selection);

                    let mid_info = document.createElement("div");
                    mid_info.classList.add("desc-mid");
                    mid_info.innerHTML = `<p>${chosen_card.description}</p>`;

                    let bottom_info = document.createElement("div");
                    bottom_info.classList.add("desc-bottom");

                    let cast_slider = document.createElement("div");
                    cast_slider.classList.add("cast");

                    bottom_info.append(cast_slider);

                    modal_content.append(
                        bg_image,
                        top_info,
                        mid_info,
                        bottom_info
                    );
                    modal.append(modal_content);

                    document.body.append(modal);

                    document.body.addEventListener("click", function (event) {
                        if (!event.target.classList.contains("modal-content")) {
                            //modal.remove();
                            console.log(1);
                        }
                    });

                    // Set the height for the modal image
                    let total_width = document.getElementsByClassName(
                        "modal-content"
                    )[0].clientWidth;
                    let large_scale = (100 * total_width) / 1920;
                    document.getElementsByClassName(
                        "desc-image"
                    )[0].style.height = `${1080 * (large_scale / 100)}px`;

                    // Set image for cast
                    for (let c = 0; c < cast.length; c++) {
                        let cast_block = document.createElement("div");
                        cast_block.classList.add("cast-card");
                        cast_block.style.backgroundImage = `url("${cast[c].picture}")`;
                        cast_block.style.width = 100 / cast.length - 5 + "%";
                        cast_block.style.height = `calc(${document.getElementsByClassName("cast")[0]
                            .clientWidth / cast.length
                            }"px" - 5%)`;
                        cast_slider.append(cast_block);
                    }
                }
            });

            button_container.append(button1, button2, button3, button4);

            overlay.append(title, description, button_container);
            card.append(overlay);
            if (j < num_cards) {
                carousels[i].insertBefore(
                    card,
                    carousels[i].children[carousels[i].children.length - 1]
                );
            } else {
                card.style.display = "none";
                carousels[i].insertBefore(
                    card,
                    carousels[i].children[carousels[i].children.length - 1]
                );
            }
        }
    }
};

const CheckCards = () => {
    let carousels = document.getElementsByClassName("card-carousel");

    for (let i = 0; i < carousels.length; i++) {
        let carousel_width = carousels[i].clientWidth;

        let btn_width =
            carousels[i].getElementsByClassName("carousel-btn")[0].clientWidth +
            carousels[i].getElementsByClassName("carousel-btn")[1].clientWidth;

        let num_cards = num_cards_GLOBAL;
        let card_margin = 2;
        let initial_width = 1920;
        let initial_height = 1080;

        let scale =
            (100 *
                ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
            initial_width;

        let cards = carousels[i].getElementsByClassName("card");

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.width = initial_width * (scale / 100) + "px";
            cards[i].style.height = initial_height * (scale / 100) + "px";
            cards[i].style.margin = `0px ${card_margin}px`;
            cards[i].style.minWidth = initial_width * (scale / 100) + "px";
            cards[i].style.minHeight = initial_height * (scale / 100) + "px";
        }

        if (IsMobile()) {
            carousels[i].style.height =
                1.6 * (initial_height * (scale / 100)) + "px";
        } else {
            carousels[i].style.height = "auto";
        }
    }
};

const AddCarouselButtons = () => {
    let carousels = document.getElementsByClassName("card-carousel");
    for (let i = 0; i < carousels.length; i++) {
        let btn1 = document.createElement("div");
        btn1.classList.add("carousel-btn");
        btn1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Previous(this);">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>`;

        let btn2 = document.createElement("div");
        btn2.classList.add("carousel-btn");

        btn2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Next(this);">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>`;

        carousels[i].append(btn1, btn2);
    }
};

const ScrollFunction = () => {
    let header = document.getElementsByClassName("header")[0];
    if (document.documentElement.scrollTop > 1) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
};

const MakeJumbotron = () => {
    let height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight;

    document.getElementsByClassName("top")[0].style.height = `${height}px`;
};

let slide_index = 0;

const AutoSlideShow = () => {
    let slide_area = document.getElementsByClassName("top")[0];
    let container = slide_area.children[0];

    container.classList.add("fadeIn");

    let bg_display = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].display_background) {
            bg_display.push(i);
        }
    }

    slide_index++;
    if (slide_index > bg_display.length - 1) {
        slide_index = 0;
    }

    slide_area.style.backgroundImage = `url("${cards[bg_display[slide_index]].display_background
        }")`;
    slide_area.getElementsByTagName("h1")[0].innerHTML =
        cards[bg_display[slide_index]].title;
    slide_area.getElementsByTagName("p")[0].innerHTML =
        cards[bg_display[slide_index]].description;

    container.classList.add("fadeOut");
    setTimeout(AutoSlideShow, 2000);
};

const SmoothScroll = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
};

const Next = (elem) => {
    let carousel = elem.parentElement.parentElement;
    let first_elem = carousel.children[1];
    let next_elem;

    for (let i = 0; i < carousel.children.length; i++) {
        if (carousel.children[i].style.display == "none") {
            next_elem = carousel.children[i];
            break;
        }
    }

    first_elem.style.display = "none";
    first_elem.remove();
    carousel.insertBefore(
        first_elem,
        carousel.children[carousel.children.length - 1]
    );

    next_elem.style.display = "flex";
};

const Previous = (elem) => {
    let carousel = elem.parentElement.parentElement;
    let last_display_item;
    let prev_elem = carousel.children[carousel.children.length - 2];

    for (let i = 0; i < carousel.children.length; i++) {
        if (
            carousel.children[i].style.display != "none" &&
            !carousel.children[i].classList.contains("carousel-btn")
        ) {
            last_display_item = carousel.children[i];
        }
    }

    last_display_item.style.display = "none";

    carousel.insertBefore(prev_elem, carousel.children[1]);

    prev_elem.style.display = "flex";
};

const ToggleWatchLater = (movie = "", activate = true) => {
    let modal = document.getElementsByClassName("watch-later-modal")[0];

    if (movie != "") {
        modal.getElementsByClassName("movie")[0].innerText = movie;
    }

    if (activate) {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
};
