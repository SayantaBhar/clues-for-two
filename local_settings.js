var config = module.exports = {
  timeout: 3600, // one hour AFK timeout
  consensus: "consensus",
  redPalette: [
    {name: "red", deep: "#B32728", light: "rgb(236, 170, 170)"},
    {name: "green", deep: "#008000", light: "rgb(168, 235, 216)"},
  ],
  bluePalette: [
    {name: "blue", deep: "#11779F", light: "rgb(168, 216, 235)"},
    {name: "purple", deep: "#722791", light: "rgb(216, 191, 216)"},
  ],
  // Mentioning below card packs so that it overrides that long list in settings.js
  // And only these will be visible in UI
  cardPacks: [
          {name: "English (Original)", jsonName: "English (Original)"},
          {name: "English (Duet)", jsonName: "English (Duet)"},
          // More English popular/general words
          {name: "English (Extra)", filename: "./server/english-extra-words.txt"},
          {name: "Bengali", filename: "./server/bengali-words.txt"},
      ],
  //defaultCardPacks: ["English (Original)", "English (Duet)", "English (Extra)"],

  /*additionalCardPacks: [
    {name: "Star Trek: TNG Pack", filename: "./server/st-tng-words.txt"},
    {name: "Star Trek: DS9 Pack", filename: "./server/st-ds9-words.txt"},
    {name: "Christmas", filename: "./server/christmas-words.txt"},
    {name: "Baby Shower", filename: "./server/baby-words.txt"},
  ],*/
}
