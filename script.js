var teksSekarang = 1;const body = document.querySelector("body"); audio = new Audio('' + linkmp3.src); 
var swiper = new Swiper(".mySwiper", {
    pagination: {el: ".swiper-pagination", dynamicBullets: false,},
    on: {
    slideChange: function () {
        teksSekarang++;
        teksScale = document.querySelector('#teks' + teksSekarang);
        stikerScale = document.querySelector('#stiker' + teksSekarang);
        Tombol = document.querySelector('#Tombol');

        setTimeout(function(){
          teksScale.classList.add("scale1");
          stikerScale.classList.add("scale1");
          
          if(teksSekarang == 4){
              setTimeout(katanimasi, 300);              
          }
          
        }, 50);
    },
    },
    navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev",},
});
    
initeks = teks4.innerHTML;
teks4.innerHTML = "";
function katanimasi(){
    teks4.innerHTML = "";
	new TypeIt("#teks4", {
    strings: ["" + initeks], startDelay: 10, speed: 25, cursor: true,
    afterComplete: function(){
      	teks4.innerHTML = initeks;
      
          setTimeout(function(){
            teksScale.classList.remove("scale1");
            teksScale.classList.add("scale0");
            stikerScale.classList.remove("scale1");
            stikerScale.classList.add("scale0");
               
            setTimeout(function(){teksScale.innerHTML="";stikerAkhir1.src = stikerAkhir2.src;}, 400);
            setTimeout(function(){
            	setTimeout(katanimasi3, 100);
                teksScale.classList.remove("scale0");
                stikerScale.classList.remove("scale0");
                teksScale.classList.add("scale1");
                stikerScale.classList.add("scale1");
            },550);
            
            }, 1200);
            
            
          /*
        setTimeout(function(){
            teksScale.classList.remove("scale1");
            stikerScale.classList.remove("scale1");
            teksScale.classList.add("scale0");
            stikerScale.classList.add("scale0");
               
            setTimeout(function(){stikerAkhir1.src = stikerAkhir2.src;teks4.innerHTML="";}, 450);
               
            setTimeout(function(){
                setTimeout(katanimasi2, 200);
                teksScale.classList.remove("scale0");
                stikerScale.classList.remove("scale0");
                teksScale.classList.add("scale1");
                stikerScale.classList.add("scale1");
            },550);
        },1800); //2000
        */
    },}).go();
}

/* Teks Animasi Akhir */
function animateteksnim() {
	//const teksnim = document.getElementById('teksnim');
    //const emojiAkhir = ['💖'];
    let percent = 10;
    setTimeout(function() {
        const intervalId = setInterval(() => {
            if (percent < 9999) {
                percent += Math.floor(Math.random() * (100 - 10 + 1)) + 10;
                const randomEmoji = emojiAkhir[Math.floor(Math.random() * emojiAkhir.length)];

			    teksLove.innerHTML = `<b>${teksLoveBawaan} ${percent}% ${randomEmoji}</b>`;
            } else {
                clearInterval(intervalId);
                percent = 9999;
                const randomEmoji = emojiAkhir[Math.floor(Math.random() * emojiAkhir.length)];
                teksLove.innerHTML = `<b>${teksLoveBawaan} <span style='color:yellow'>${percent}%</span> ${randomEmoji}</b>`;
                teksLove.style="font-size:20px;transition:all .8s ease";

                setInterval(falling, 200);
                stiker4.classList.remove("scale1");
                stiker4.classList.add("scale0");
                setTimeout(function(){
                    stikerAkhir1.src = stikerAkhir3.src; 
                    stiker4.classList.remove("scale0");
                    stiker4.classList.add("scale1");
                },400);
            }
        }, 20); // Speed 0-100%
    }, 10); // Delay
}

//initeks2 = teksJawaban.innerHTML;
//teksJawaban.innerHTML = "";
function katanimasi2(){
    teks4.innerHTML = "";
	new TypeIt("#teks4", {
    strings: ["<span style='font-size:17px;line-height:1.5em'>Cukup tau ah kamu<br>ga kangen aku 😡🫵</span>", "<span style='font-size:17px;line-height:1.5em'><br><b>Padahal... 🫠</b></span>"],
    startDelay: 10,
    speed: 25,
    cursor: true,
    breakLines: true,
    waitUntilVisible: true,
    afterStep: function(instance) {
        if (instance.is('completed')) {
            setTimeout(function() {
                instance.next();
            }, 1500);
        }
    },
    afterComplete: function(){      
        teks4.innerHTML = initeks2;
      
      setTimeout(function(){
        teksScale.classList.remove("scale1");
        teksScale.classList.add("scale0");
        stiker4.classList.remove("scale1");
        stiker4.classList.add("scale0");
            setTimeout(function(){
                teks4.innerHTML = "";
                setTimeout(katanimasi3, 100);
                     
               	stikerAkhir1.src = stikerAkhir3.src; 
                    stiker4.classList.remove("scale0");
                    stiker4.classList.add("scale1");
                    teksScale.classList.remove("scale0");
                    teksScale.classList.add("scale1");
               },400);
      },1500); //1800
    },}).go();
}

//initeks4 = teksTambahan.innerHTML;
//teksTambahan.innerHTML = "";
function katanimasi3() {
    teks4.innerHTML = "";
    //const emojiAcak = ['💖', '❤️', '🧡', '💜', '🩵', '💚', '💙', '🤍', '💛', '🩷'];

    // Fungsi untuk mengacak array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap
        }
        return array;
    }

    // Mengacak emotikon
    const shuffledEmojis = shuffle([...emojiAcak]); // Menggunakan spread operator untuk menghindari modifikasi array asli

    // Menghasilkan array string dengan emotikon acak, tanpa pengulangan
    const stringsArray = Array.from({ length: 10 }, (_, i) => {
        return `I Love Youu ${i + 1}% ${shuffledEmojis[i]}`; // Mengambil emotikon dari array yang sudah diacak
    });

    new TypeIt("#teks4", {
        strings: stringsArray,
        startDelay: 50,
        speed: 10,
        cursor: false,
        nextStringDelay: 0,
        afterComplete: function() {
            teksLoveBawaan = teksLove.innerHTML;
            const randomEmot = emojiAcak[Math.floor(Math.random() * emojiAcak.length)];
            teksLove.innerHTML += ' 1% ' + randomEmot;
            teks4.innerHTML += `<br><br>` + teksTambahan.innerHTML;
            teksTambahan.innerHTML = "";
            setTimeout(animateteksnim, 100);
            
            // setInterval(falling, 200);
            setTimeout(function() { clearInterval(scrollInterval); }, 500);
        },
    }).go();
}

///////////////////////////////////

var sudahKlik = true;
var fungsiBerfungsi = false;
document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Touch the LOVE!</p>';

document.getElementById("loveIn").onclick = function() {
    if (sudahKlik) {
        audio.play();
        document.querySelector(".overlay").style.display = "none";
        
        stiker1.classList.add("scale1");
        teks1.classList.add("scale1");
        wallpaper.style="transform:scale(1)";
        
        setTimeout(function(){fungsiBerfungsi = true}, 300);
    } else {
        sudahKlik = true; // Tandai tombol sudah diklik
        document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Touch the LOVE!</p>';
    }
}
//document.getElementById("loveIn").onclick = mulaiScript();

function falling(){const heart=document.createElement("div");heart.innerHTML="<svg class='line spin' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(3.000000, 3.000000)'><path d='M9,0 C6.96384545,0 6.77134103,3.54652262 5.55911318,4.79957421 C4.34688533,6.05262581 0.578198764,4.61991709 0.0545867365,6.84402682 C-0.467925266,9.06927362 2.92235261,9.82428837 3.34036221,11.7334296 C3.76057187,13.6425708 1.68922429,16.3249199 3.45916494,17.6598406 C5.2291056,18.9936242 7.13434937,15.9747022 9,15.9747022 C10.8656351,15.9747022 12.7708788,18.9936242 14.5408195,17.6598406 C16.3107602,16.3249199 14.2405126,13.6425708 14.6596222,11.7334296 C15.0787319,9.82428837 18.4679097,9.06927362 17.9453977,6.84402682 C17.4228857,4.61991709 13.6530991,6.05262581 12.4419713,4.79957421 C11.2297434,3.54652262 11.036139,0 9,0 Z'></path></g></svg>";heart.className="heart-icon";heart.style.left=(Math.random()*95)+"vw";heart.style.animationDuration=(Math.random()*3)+2+"s";document.body.appendChild(heart);}setInterval(function(){var heartArr=document.querySelectorAll(".heart-icon");heartArr.length>100&&heartArr[0].remove();},100);

const scrollContainer = document.getElementById("scroll-container");
const textContainer = document.getElementById("textsec2");

function autoScroll() {scrollContainer.scrollTop += 10;}
const scrollInterval = setInterval(autoScroll, 50); 

/////////////////

jumlahKlik = 0;sudah=false;

  function fungsibaru(btn) {
    var tombol = document.getElementById("" + btn);
    var tombolParent = tombol.parentNode;

    var tombolPosisiX = Math.floor(Math.random() * 50) + 1;
    var tombolPosisiY = Math.floor(Math.random() * 75) + 1;
    var rotasiAcak = Math.floor(Math.random() * 360);

    tombol.style.position = "relative";
    tombol.style.left = tombolPosisiX + "px";
    tombol.style.top = tombolPosisiY + "px";
    tombol.style.transform = "rotate(" + rotasiAcak + "deg)";
    tombolParent.appendChild(tombol);

    jumlahKlik++;
    //tolakteks.style="transform:scale(1)";
    /*if(sudah==false){
      sudah=true;
      second_stiker.style.transform = "scale(0)";
      setTimeout(function() {
          second_stiker.style.transform = "scale(.9)";
          inistiker3.src = inistiker4.src;
      }, 300);
    }*/

    if(jumlahKlik == 3){
        swiper.slideNext();
        jumlahKlik=0;
    }
  }

//////

function fungsiTerima() {
    Swal.fire({
        title: '' + teksTerima.innerHTML,
        imageUrl: '' + stikerTerima.src,
        imageWidth: 90,
        imageHeight: 90,
        imageAlt: 'by @aoudumber.dev',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
    });
}
/////////////////////////

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'ArrowRight') {
        swiper.slideNext();
    }
});

document.addEventListener('click', function() {
    //if (teksSekarang !== 3) {
    	if (fungsiBerfungsi === true) {
           swiper.slideNext();
        }
    //}
});

/* Start All */
setTimeout(function(){var overlay = document.querySelector(".loading-message");overlay.style.display = "none";var tomlv = document.querySelector(".blocklove");tomlv.style.display = "flex";}, 1000);
