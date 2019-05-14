const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src = siteContent["nav"]["img-src"];

/////////////navItems//////////////
let navItems = document.querySelectorAll("nav a");
navItems.forEach((el, i) => {
  el.textContent = `${siteContent.nav[`nav-item-${[i + 1]}`]}`;
  el.style.color = "green";
});
////////////////////H1 Text////////////////////
let h1text = document.querySelector(".cta .cta-text h1");
siteContent.cta.h1 = siteContent.cta.h1.replace(/\s/g, "\n");
h1text.innerText = siteContent.cta.h1;

/////////////Button////////////////////
let btn = document.querySelector("button");
btn.innerText = siteContent.cta.button;

///////////CTA Image////////////////////
let ctaImg = document.querySelector("#cta-img");
ctaImg.src = `${siteContent.cta["img-src"]}`;

////////////////H4 Titles///////////////
let h4Titles = document.querySelectorAll("h4");
h4Titles[0].innerText = siteContent["main-content"]["features-h4"];
h4Titles[1].innerText = siteContent["main-content"]["about-h4"];
h4Titles[2].innerText = siteContent["main-content"]["services-h4"];
h4Titles[3].innerText = siteContent["main-content"]["product-h4"];
h4Titles[4].innerText = siteContent["main-content"]["vision-h4"];
h4Titles[5].innerText = siteContent.contact["contact-h4"];

/////////////////////Middle Image/////////////////////
let midImg = document.querySelector("#middle-img");
midImg.src = `${siteContent["main-content"]["middle-img-src"]}`;

////////////////////Paragraphs/////////////////////
let paras = document.querySelectorAll("p");
paras[0].innerText = siteContent["main-content"]["features-content"];
paras[1].innerText = siteContent["main-content"]["about-content"];
paras[2].innerText = siteContent["main-content"]["services-content"];
paras[3].innerText = siteContent["main-content"]["product-content"];
paras[4].innerText = siteContent["main-content"]["vision-content"];
//////////////////Contact//////////////////////////
siteContent.contact.address = siteContent.contact.address.replace(
  /t S/,
  "t\n S"
);
paras[5].innerText = siteContent.contact.address;
paras[6].innerText = siteContent.contact.phone;
paras[7].innerText = siteContent.contact.email;
/////////////////////////////Footer/////////////////
paras[8].innerText = siteContent.footer.copyright;

////////////////New Elements///////////////////
let navList = document.querySelector("nav");
let newEl1text = document.createTextNode("Sign In");
let newEl1 = document.createElement("a");
newEl1.appendChild(newEl1text);
let newEl2text = document.createTextNode("Find Friends");
let newEl2 = document.createElement("a");
newEl2.appendChild(newEl2text);
navList.prepend(newEl1);
navList.appendChild(newEl2);
navList.style.color = "green";
navItems[0].createAttribute("href='#'");
