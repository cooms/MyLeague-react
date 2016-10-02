import request from 'super-agent'

export default {
  getChamp: getChamp
}

function getChamp (cb) {
  request
    .get('http://ddragon.leagueoflegends.com/cdn/6.20.1/data/en_US/champion.json')
    .end((err, res) => {
      if(!err) {
        const champData = {
          name: res.body.data[0].name,
          epiphet: res.body.data[0].title,
          blurb: res.body.data[0].blurb,
          baseInfo: {

          },
          image: res.body.data[0].image.full,
          stats: {

          }
        }
        cb(null, champData)
      } else {
        cb(err)
      }
    })
}
