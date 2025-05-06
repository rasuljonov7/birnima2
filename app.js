
// ==============================================
// ================= 1-masala ===================
// ==============================================
export function calculateSecretCode(code) {
    return eval(code);
  }

  


  
// ==============================================
// ================= 2-masala ===================
// ==============================================


// Zafarjon oвЂzining super kompyuteriga maвЂ™lumotlarni kiritdi! рџ’ѕ
  // U Object.keys() yordamida faqat kalitlarni olishni xohlaydi.
  // Input: const data = { name: "Zafarjon", age: 20, hobby: "coding" };
  // Output: ["name", "age", "hobby"]
  export function getComputerKeys() {
    const data = { name: "Zafarjon", age: 20, hobby: "coding" }
    return Object.keys(data)
  }




  
// ==============================================
// ================= 3-masala ===================
// ==============================================

  // NeвЂmatjon kafe menyusini tuzmoqchi! в•
  // U Object.values() yordamida faqat narxlarni olishni xohlaydi.
  // Input: const menu = { coffee: 15000, tea: 10000, cake: 25000 };
  // Output: [15000, 10000, 25000]
  export function getMenuPrices() {
    const menu = { coffee: 15000, tea: 10000, cake: 25000 }
    return Object.values(menu)
  }



  
// ==============================================
// ================= 4-masala ===================
// ==============================================

 // Hamidulloh oвЂzining super qahramon jamoasini roвЂyxatdan oвЂtkazmoqchi! рџ¦ё
  // U Object.entries() yordamida ismlar va rollarni juftlik sifatida olishni xohlaydi.
  // Input: const team = { leader: "Hamidulloh", hacker: "Shohrux" };
  // Output: [["leader", "Hamidulloh"], ["hacker", "Shohrux"]]
  export function getTeamRoles() {
    const team = { leader: "Hamidulloh", hacker: "Shohrux" }
    return Object.entries(team)
  }







  // ==============================================
  // ================= 5-masala ==================
  // ==============================================
  // Shohrux maxfiy xabar yubormoqchi, lekin uni boвЂlaklarga boвЂlmoqchi! вњ‚пёЏ
  // U split("", 3) yordamida xabarni 3 ta belgigacha boвЂlib olmoqchi.
  // Input: const message = "salomdunyo";
  // Output: ["s", "a", "l"]
  export function splitSecretMessage(message) {
    return message.split("", 3)
  }
  


   // ==============================================
  // ================= 6-masala ==================
  // ==============================================
  // Abubakr kosmos kemasida vaqtni boshqarmoqchi! вЏІпёЏ
  // U setTimeout() yordamida 2 soniyadan soвЂng "Launch!" deb xabar chiqarmoqchi.
  // Input: const delay = 2000;
  // Output: 2 soniyadan soвЂng "Launch!" konsolda chiqadi
   function launch() {
    console.log("Launch");
   }

  export function launchSpaceship(delay) {
    return  setTimeout(launch, delay)
  }


    // ==============================================
  // ================= 7-masala ==================
  // ==============================================
  // Muhammadhasan robot soatini sinab koвЂrmoqchi! вЏ°
  // U setInterval() yordamida har 1 soniyada "Tik-tak" chiqarmoqchi.
  // Input: const interval = 1000;
  // Output: Har 1 soniyada "Tik-tak" konsolda chiqadi
  
  function tik() {
   console.log("Tik-Tak");
  }
  
  export function startRobotClock(interval) {
    return setInterval(tik, interval) 
  }




   // ==============================================
  // ================= 8-masala ==================
  // ==============================================
  // Hayitali oвЂzining kosmik roвЂyxatini tekislamoqchi! рџ“њ
  // U flat() yordamida [[1, 2], [3, [4, 5]]] roвЂyxatni tekislaydi.
  // Input: const nestedList = [[1, 2], [3, [4, 5]]];
  // Output: [1, 2, 3, 4, 5]
  export function flattenList() {
    const nestedList = [[1, 2], [3, [4, 5]]];
    return nestedList.flat(Infinity)
  }


// ==============================================
  // ================= 9-masala ==================
  // ==============================================
  // AbdulmoвЂmin maxfiy maвЂ™lumotlar bazasini qayta tuzmoqchi! рџ—„пёЏ
  // U Object.fromEntries() yordamida [["name", "AbdulmoвЂmin"], ["role", "hacker"]] dan obвЂ™ekt yaratadi.
  // Input: const entries = [["name", "AbdulmoвЂmin"], ["role", "hacker"]];
  // Output: { name: "AbdulmoвЂmin", role: "hacker" }
  export function createDatabase() {
    const entries = [["name", "Abdulmo'min"], ["role", "hacker"]];
    return Object.fromEntries(entries)
  }
  




   // ==============================================
  // ================= 10-masala ==================
  // ==============================================
  // Asilbek oвЂzining super xabarlar roвЂyxatini tekislamoqchi! рџ“©
  // U flatMap() yordamida ["hello", "world"] ni har bir soвЂz uchun alohida harflarga aylantiradi.
  // Input: const words = ["hello", "world"];
  // Output: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
  export function flattenWords() {
    const words = ["hello", "world"];
    return words.flatMap(word => word.split(""));
  }



  // ==============================================
  // ================= 11-masala ==================
  // ==============================================
  // Dostonbek kosmik kalkulyator yasamoqchi! рџ§®
  // U eval() yordamida "10 - 4 * 2" kabi ifodani hisoblaydi.
  // Input: const calc = "10 - 4 * 2";
  // Output: 2
  export function cosmicCalculator(calc) {
    return eval(calc)
  }



    // ==============================================
  // ================= 12-masala ==================
  // ==============================================
  // Azizbek oвЂzining maxfiy jurnalini ochmoqchi! рџ““
  // U Object.keys() yordamida jurnalning barcha yozuv kalitlarini oladi.
  // Input: const journal = { day1: "Met a robot", day2: "Flew to Mars" };
  // Output: ["day1", "day2"]
  export function getJournalKeys() {
    const journal = { day1: "Met a robot", day2: "Flew to Mars" };
    return Object.keys(journal)
  }









  // ==============================================
  // ================= 13-masala ==================
  // ==============================================
  // Ibrohimjon oвЂzining kosmik xarajatlarini hisoblamoqchi! рџ’ё
  // U Object.values() yordamida faqat xarajat summalarini oladi.
  // Input: const expenses = { fuel: 5000, food: 3000 };
  // Output: [5000, 3000]
  export function getExpenses() {
   const expenses = { fuel: 5000, food: 3000 };
   return Object.values(expenses)
  }



   // ==============================================
  // ================= 14-masala ==================
  // ==============================================
  // Zafarjon maxfiy jamoa roвЂyxatini tuzmoqchi! рџ•µпёЏ
  // U Object.entries() yordamida ismlar va vazifalarni juftlik sifatida oladi.
  // Input: const squad = { captain: "Zafarjon", navigator: "Asilbek" };
  // Output: [["captain", "Zafarjon"], ["navigator", "Asilbek"]]
  export function getSquadRoles() {
    const squad = { captain: "Zafarjon", navigator: "Asilbek" };
    return Object.entries(squad)
  }







   // ==============================================
  // ================= 15-masala ==================
  // ==============================================
  // NeвЂmatjon oвЂzining kosmik xabarini boвЂlaklarga boвЂlmoqchi! рџ“Ў
  // U split("", 5) yordamida xabarni 5 ta belgigacha boвЂlib oladi.
  // Input: const signal = "koinot123";
  // Output: ["k", "o", "i", "n", "o"]
  export function splitCosmicSignal(signal) {
   return signal.split("", 5)
  }

// ==============================================
  // ================= 17-masala ==================
  // ==============================================
  // Shohrux oвЂzining kosmik signalini har 2 soniyada yubormoqchi! рџ“¶
  // U setInterval() yordamida "Signal sent!" xabarini chiqaradi.
  // Input: const interval = 2000;
  // Output: Har 2 soniyada "Signal sent!" konsolda chiqadi

  function sent() {
    console.log("Signal sent!");
    
  }

  export function sendCosmicSignal(interval) {
    return setInterval(sent, interval)
  }


  // ==============================================
  // ================= 18-masala ==================
  // ==============================================
  // Abubakr oвЂzining maxfiy roвЂyxatini tekislamoqchi! рџ—’пёЏ
  // U flat() yordamida [[1, [2, 3]], [4]] roвЂyxatni tekislaydi.
  // Input: const secretList = [[1, [2, 3]], [4]];
  // Output: [1, 2, 3, 4]
  export function flattenSecretList() {
    const secretList = [[1, [2, 3]], [4]];
    return secretList.flat(Infinity)
  }






   // ==============================================
  // ================= 19-masala ==================
  // ==============================================
  // Muhammadhasan maxfiy obвЂ™ekt yaratmoqchi! рџ”’
  // U Object.fromEntries() yordamida [["id", 1], ["name", "Muhammadhasan"]] dan obвЂ™ekt yasaydi.
  // Input: const data = [["id", 1], ["name", "Muhammadhasan"]];
  // Output: { id: 1, name: "Muhammadhasan" }
  export function createSecretObject() {
    const data = [["id", 1], ["name", "Muhammadhasan"]];
    return Object.fromEntries(data)
  }










  // ==============================================
  // ================= 20-masala ==================
  // ==============================================
  // Hayitali oвЂzining kosmik soвЂzlar roвЂyxatini tekislamoqchi! рџЊЊ
  // U flatMap() yordamida ["star", "moon"] ni har bir soвЂz uchun alohida harflarga aylantiradi.
  // Input: const cosmicWords = ["star", "moon"];
  // Output: ["s", "t", "a", "r", "m", "o", "o", "n"]
  export function flattenCosmicWords() {
    const cosmicWords = ["star", "moon"];
    return cosmicWords.flatMap(word => word.split(""))
  }