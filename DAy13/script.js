function createCard(numbeer, title, cName, views, monthsOld, duration, thumbnail) {
  let viewcount;
  if (views <= 1000) {
    viewcount = views;
  } else if (views >= 1000000) {
    viewcount= views / 1000000 + "M";
  } else {
    viewcount = views / 1000 + "K";
  }
  let html = `<div class="body">
     <div class="container">
           
            <div class="sec number">${numbeer}</div>
            
            <div class="sec image"><img src="${thumbnail}" alt="">
               <p class="duration">${duration}</p>
            </div>
            <div class="sec about">
                <div class="title">${title}
                </div>
                <div class="caninfo">
                    <div class="chanelname">${cName}</div>
                    <div>&#9900;</div>
                    <div class="views">${viewcount}</div>
                    <div>&#9900;</div>
                    <div class="date">${monthsOld} months ago</div>
                </div>
            </div>
        
    </div>
    </div>
    `
    document.querySelector(".body").innerHTML = document.querySelector(".body").innerHTML + html;
}

createCard("2",
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ"
);

createCard("3",
  "Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3",
  "CodeWithHarry",
  5600000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuhpUj-ErJicHq24jgB_3K2Chl_Q"
)
createCard("4",
    "Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #4",
    "CodeWithHarry",
    5620000,
    7,
    "21:22",
    "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuhpUj-ErJicHq24jgB_3K2Chl_Q"
  )