import request from 'superagent'

export default {
  getChamp: getChamp,
  GetAllChamps: GetAllChamps
}

var mainURL = "http://ddragon.leagueoflegends.com/cdn/"
var mainJSON = "6.20.1/data/en_US/champion.json"
var tallImagePath = "img/champion/loading/"
var splashImagePath = "img/champion/splash/"

function getChamp (cb) {
  request
    .get(mainURL + mainJSON)
    .end((err, res) => {
      var expectedChamp = res.body.data.Jax
      if(!err) {
        const champData = {
          epiphet: expectedChamp.title,
          blurb: expectedChamp.blurb,
          baseInfo: {
          },
          tallImage: mainURL + tallImagePath + expectedChamp.name + "_0.jpg",
          splashImage: mainURL + splashImagePath + expectedChamp.name + "_0.jpg",
          stats: {
            hp: expectedChamp.stats.hp,
            hpRegen: expectedChamp.stats.hpregen,
            mp: expectedChamp.stats.mp,
            mpRegen: expectedChamp.stats.mpregen,
            attackRange: expectedChamp.stats.attackrange,
            attackDmg: expectedChamp.stats.attackdamage,
            attackSpd: expectedChamp.stats.attackspeedperlevel,
            armor: expectedChamp.stats.armor,
            magicResist: expectedChamp.stats.spellblock,
            moveSpeed: expectedChamp.stats.movespeed
          }
        }
        console.log(champData)
        cb(null, champData)
      } else {
        cb(err)
      }
    })
}

function GetAllChamps (cb) {

}
