import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import MButton from "./MButton";
import Colors from "../assets/styles/Colors";

class MBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getStatus() {
    const { status } = this.props;
    if (status === "Read") return Read;
    if (status === "UnRead") return UnRead;
  }

  getAction(){
      const { action} = this.props;
      if(action === "Delete"){
        return Delete;
      }
      if(action === "More"){
          return More;
      }
  }

  render() {
    const CardStatus = this.getStatus();
    const CardAction = this.getAction();
    const { status, action } = this.props;
    return (
      <View style={[styles.bubbleCard, CardStatus.card, action&& CardAction.card]}>
        <View style={styles.imageTextArea}>
          {!action && (
            <View style={styles.imageArea}>
              <Image
                source={{
                  uri:
                    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhATEBAVEBAVGSAbGBUWGBcQEBsgIB0iIiAdHx8kKDQsJCYxJx8fLTItMSsuMDAwIys1OD8tNzQtMDcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xAA4EAACAQIEBAQEBQMEAwEAAAABAhEAAwQSITEFBkFREyJhcQcygZEjQqGxwRTR8FJicuEVFjND/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANvIryKg3PYmesmgX2A+ZvoaCaNeEVXTxR1JlmP2ilH4ndEEMGHWV81BORXJWoe3xi4wEIJnrpXQ4w35kWPQ0EqVrgiowcc11taf8v8AquTzAk6W2jvIoJMpXOWoz/2O1JBVxHoD9d6XscesN1YCNypigeFa8ApHEcTsqCTcAA6wTv8ASkhxWxp+Pb17mKBwy1yVrxMXbba4h9mWugwOoII9CDQCtFDPXuU9q5I9KBMmuT9KUavIoEj7V5A7UqUrlkoEsg7Gjwh60qpj2r00CItjv+lKJhQeorlxXSMaBK7hY2INeV2xooO7lobxXFxNhG3QaVNNhhSTYAHrQQVyxEaHXWk1TXQk/qKnf/G+oNJHhZnSBQQzkddBTXMSpgj0P81N3uEMdgD6GKS/8Q/+kD7GghVeQNCCOp/ekWsDNPyk6mNam34Xd7GesVG3uH3wTlQ5RqfKdfagjrabZgMwkaHpXWFxGWSsj7zUhawbOWbIydlZcmsb0hbwjeYnp0mR7DtQNLuPaGJc5SNe8Gkb6+UFgIYdGGbt9DXl24gbKGC6SWzAx9P5pIDza5WAU+b8vtQFvDnKUtSLcgsGGaY99evSkL1iCFUhANSoG9TdrhwuIrC4gbsT9vrTLiGHTyILq+MR80r4bMN0E6zQR2MvMCgtF1Eak3CrA9xHSkhxG8g8t+7P/NjJ9qXuYchiHk9wNaaXLRDiDKg7DSf7UDu1x3FFwExDGdg2WPuRTo80YkSA6kgfmRQKiMRaBIlSfbT1APeuAJBEmZjSgm8PzjiFMOtu4O4XJ+xqy4bj/iKpRA8mGj8vadaoJwYBXdO5I/U0YcMIBbUN5coj1k0FnXnDzMr4cgj/AEvK/qK9HOloLL2Lw9Blc/uKqqXSDIkdNppB7siNSeh/KKC+2uaMOwkl191/tUzwjF2r5ItvmI1OhUj3msiuXTIAMiemgrWeRsDkw63C2d7nXsATC/ufrQSbcO/3CipGigKKKKAooooCiiig8NM8bi8gJCloEwN6Tx+OClV1zNsaqfMHE8ozByokSZ0Oon2oJLGcdMKSArRqvUa6aexpvxPEqloMTLMYUDRSx02+9UccZD/i3JK5iV1jrA99qbcY5mFy6rxNq0lwhQdJybn0g/c0DvhnDjfuXLrOciucz6LqNIU99PpM0jzG4DavlRTlCropIWW16xVYXm9rOGt21PnLM7v1JOsx06D6VUON8w3bxGZoAGgG2u596DQuAcRB8W6SMtptyfLp/wB0jj+KL+AxuDOEkR5vmaTJ76jWsyTHMLeSTB3FcnFtpr0ig2LC8xR4lwILtvYhm306dqtXKy4LFgQjWrjDbN23FfPdrijCQCcp3HSrZwPme5aTOrQ6tmHpB/tpQbte5PstrncH6GuTymgC5bhBBmcok6bU75O5iXHYdboGVho47GJ09DNThFBXcRy4GSJXN6glf3qHTlK8qgZrVxvzMZUekCKvJFeRQZ/ieUr5nKEHYhqZHlTECJtkn/blj960wCuWFBQcNwDKoY2ALqTq48nodN6uHLN05GtkBckfLIGo1ge811iBv0prw7GZbygnRvL/AGoLJRRRQFFFFAUUUUBTPiWICIS23WnlV7mfEQCo3I/zSgiOPYz8HODBCkqZzdI/aqBzLxTNZvqGh7d6SszPUesVInjI/pzaZwbis2omCN9DtOv1is25m41mvtcSIfRlOh0G9Ahf46xESRAgfeT/ADUVc4kYfrmEH2ppefM2g3qQwvBLlyIQkHYgUEVfvk6ToDp3pvV2wXIN+4R+GwB3JHTvUle+FeIjMsH0IoM4iu0U7idOtXC9yNi03tBh6HWvcJyTiW0FsyO+1BTQpmnmGkg6+wq04jkPFBSQkkDaYP0qt22hspBBBjKdDNBuHwFvzaxakiQyaddjr+laxWP/AAPwLh71wiFKazpOulbDFBzRXuWgrQcEVyRShFckUDLFW9KrnElK+ZfmUyPprVpvDSoPiduZ9aCz4W8HRHGzAEfUV7UTynfmzkO9tiPpuP3ooJuik89c+IZEDTvNAtRTVsVoDETSdziAUgEamgfVVOcMM7lPCcK6mQG2Pp9qnH4iBuInr0qE5oxQ8Jm80jSEgt66nSgyLjHC7ma5KhTuyhtNZkj6wfqaoON4e5cgyD6j+a0DmXiFwhUK3TdJ8oY5nidx/wB1HYW14rBbj6r02oE+T+RWvEFhIXUzMGto4HyzatooFsCK95N4etu0I3OpO81ZlFBxYwSAfKKUNpR00roChloGtzCod1FJHAqNgBTyKClBHX8KpG1YX8Y+Xf6fEWcVbUBbujRtnXWfqP2rfrqVVOfeCLi8HctsNVIdT1BXf9JoG/we82EZzqc0AxE6A/uav4qJ5V4UuHw1q0moAmepk9fpUtQFBooBoCvGFek15QJOKjMdb0qWao/FpoaCO4DcyYhl/LcH6jX+9eUxxN422VxujA0UFiXQ6SSTv2pTPpoSwPQxTPD48ZTCBRJBhs+25mvb10hkAEgzJ0BoFHtrAlZymQBQ90DUCD3/AM96bvb3YmQdt5E6aUhdxiW4DlgDuIlvegMxyidW6ToTUbxPW0WdS2UTCmY9f87VIYy0y2y6lWYSAo1kTvUaAz2ybqlFZcojWQdjG+hJoMh4rfCO9zUsfzaka6gTSfIGGuY3GBEkJufQCmXMwNu9csHMVQ5MkzmI6/XT71qXwZ5eu4YXruJw7YYsAFFyA576b0Gl4PCC2qquwEUqWA3IFMeO8bs4a0bl58iiBsSddoFZrjuc0vuy4Y4i8w3yoFUT1JYwKDW7d5TswNetdHesIxGIx2diMR4H+1riM4+wNI4PjvEbLycQL69i4I+4FBvRYV41wVjtv4n3rJH9VhmC9WRs4/z3p1d+LuGMi2l0t2ZQv80GqPdHWmeIdY1Ij9KyXF82YzECVVcOjbAkm7B6wNvvXfB+DXbrENjXBI2EEe8GfvQWjEYq+rlRfuW1TeCYPbX2pth+KX1Y58e4DbK/zD1B/imXHuA4q1h7l2xjGuXLYnw7lq0ysEEnzCDMU05Xx1y7h7V3EgWiZMhQAU/LoZiaC+cQ5h8O1mzEuIBhc8E9wDt9aYLzS75mt3Q0DQZVUfXqKi2LEtqCJnzCfcU1sWbaOzqAOhgk79KCbHNd0AF7iINiSFj0p2OYr2VWBtmdPlMemvrVbTCZmHiWwbY2J1UfTvThSEDSxbzGB2EaAUEvj+ar6W/E8JWUGDAPT61EXOfWIXyWNd1LXM/TRdIO9Q95fEdQDIfQAyJgbeh96rnE7JS3c3tureVwYbXt23igU4v8VvMyjBeXaTcInXtHpXtZviJHlcaAyf8AVvrr196KD6zRNvXp0pZbMnueuulS1eRQRd2wSDC5T6kH60wu2M2jgOegj9Z6VYso7V4bY7D7UFPdWUZRk1ExLA615aVyZK+UgQQdQe3tpVrbA2yZNtZ7xrXv9Gn+gUGYcU5BsXMZaxVzG+BezI62lUFSUMqzH1gCrLyfhr4u4tMViXxBVhlBMqAZOgjSpPE8OQ33dx5EQae1N+Wb63bty7bBW2wKgH5iVO89qBLmjgSX7bW7wL2z2JVhG0Gs+5W5SuC3igmVjaxNxCHLR5Yykgb6EVtbKDvVU8IYXF4gsfDsYrLcVzpaFxVyMjHYEgKRO+ooM95rw3ErZC4dzesMg8trwsOqNrmzCJPSDNN8NyyzrbW2rXMQVXxHdoQNuxUAfTXStbucNS5qbYb1GoonD4cfiPbtehIDH2G5oMr5g4Q9i01p0Ds1piepE/hqo9Wdh9qR418HTawXj27hbGW08R7cQjQJZAe8THtWiYfC/wBZi0um2UwtqGGYZXuuJySu6oskgHUsQegq3XFmg+acUuIuFHwyqbdy0P8A9Ckk/nn+OmulaVwXgYVsMbFxiFUC7n863G0llnVevWDO1ObfKxwty4tm2t/COxdbJIt3rRJki2ToyehgjvU3gEKny4W4D6taUffMaDnmC1lw2KYCDkcDvJUqP1IqtYXh4CIApPh5VEafKNzV4xeAu3wquVS0CCUUli0bZjH6AUpZ4VlmAB6Tm/cUFHDKN5gwAToJ6Ck/6LyrJIkjUyW32qzcT4Bee4hRbQWdZJkQdDERMVxc4DfYlTlyBdCCMwPb2oITBMoJV5ZBMxod+1NcTlLQCQYjXrUy/LGJDqyMIjWSoJ9QR1pX/wBdu6B7KtOoYGWX6evpQVgWAcis+XynUD8X6Hv+tRHEQkXFXRiuaGMnUdj6/arkeWr2bNlaTG/Qidh/NMOKcsYhvNbt5Lp/NGYx2mgwrHKwYkoM2xU/x3r2rlzFyVjFuOVwt+4D1S3m37RvrNFB9KUUUUBRRRQFFFFAz4hhw6sp0DqVJG9NOH4YWStsABVUAeumpqWb1qNxTywIUiNiRANBIk1wQCCCJB3B1FIi5Xvi0EViOX8OZjCWd98gG/tTDGcKFpG/p7NtHO2RVTX3FWPxKCBuSKCLHEcPgrFrx7yWQYlnYJLHff1p8vFLZUMrqwOxBBBqj/EGzhGOe7N5lH/yJU2j6wdZ9qoDcd8FbhwyQqkeSfL9ulBtpxtm4/hl1N0DMVB8wB6ntTtbIG1Zb8POb8Oxuh1W1cc5i3+rpvWnYa7miDI70EjaGld1ygrqgK8r2ig8or2ig5NeRXVe0CFxaK7cUUClFFFAUUUUBRRUbxXjmHw2QYi8tsuYUH5j7Cgkqi+OcUs2BbF+6tprjhLYYwWY9BTKzzfh3uJbtZ7txjsFIAA1LEnYCsO+N3HXuY5crQtiESJ0bRmPv8tBvSXpG81yb0VW7HFfw7T5pW4quG91B/mntniYYDWQaCYu3fLIrI+c/iO63XsWVkIYZtT9NK0u9i5Ugdah+XuBWbbPcZFa4xkkgSfWgpHBsbcxSB1wWIvjrcCEr9Kf4bAWfxFHCrxuvOaVdB766Vo+N4tasrLQgH2qDfnOwWCh5JMAAE0GRcYwtyyzrbwd2zk/MRKfQ9a1n4TYu7cwaG9IIcqs75Rt/NSWOuo9ppUQR1rrlPH4YHwVuoLiaC3MNr270FvooooCiiigKKKKAooooOWFFemig4uXQu5/vUPxjjwtJdYRNtSxB30rvH4ld4E7A/mqn84efBYo2w2togsIDafORPoDQPk52fwUusgAZQwH5iCY1jbvrUhhuaw+QKyKzCQr+ViO41g61mfw84j4zMzPl8JQfliWOwEaCB+9Wa/w8WyLqWw1wmAREjXWQe9BfMLjnYAsVHsP+6zP404wqiMLgt3EBKtlzGTpE9NDuauXCrQt2s1xipYSZ0Zf7QKyfjtx+K8TTBW58HMpYhjkFtdXJ7nUa94oLz8N8Gy4T+pfMhxCjw1J0W2NJ9Cx1J7AVkHxPYeNagEFxcuNJD6m6y6EbiLYivonHgLbdUCoFTKqn5QAIAA9BXzV8QD+Lhhp5cNbGhzSSWLfqTQbDwS34nD8ESJ/Atg/RRrUFi8ZcsE5CWQAwBvU38O74u8PwonZMv1UxTLmfgt1Je15u6dfcUEJwr4hqPLcn6nWtG5d4jbvAHMMzCQAZFfP3HLCOxKjw3B1B0pvwnmLEYZlIJ8ogA/5rQfUWO4NauqQ5kVWMNynZt4gtmzIdQDuD/aKyrCfFTEDRxI9Ca8xfxNvH5FA7H81Bp3xK4umEwjG2ZukgKPf0rHsJeZr627rtbzAXGLsxQuQTmAA8umnWO9MOIceu4ou11ySAMgJ0BzAfeKn+LWWdC9vxXOjOzNljQkkj82s6/pQSeF56xFp2TxmCqfw0ZmuETMDMdwNJBqQ4J8UOIWcRlxB8e2PNdTKoyrpBVp9R96omLLtfshUa+uXLaS4MrtM6eUifMTEGuODYVWtydLocgjzZiIEHsIP1M0H1BwTmrD4i2rhvDJElH8rD19R6ipu3cDCVIYehkVhfL99l8JlXKuyi6zOkDRoI6A6wBUzZ5nuW2dgRI0gzJ9V2+x70GvUVm2C52u+VZLrIHiMIBPUfSr9w3Gi6gYRPUDWDQO6KKKAooooKhfxMqzLmCqILHcGIqr8xkXMEUhmJMtIABIEaAby0mjGYwiGZSLRb9twD3pzcCXFIOZUCeUb6nYE/wA0FF5US7Y8HCkP41y7L2zoVbYiPWBWqKVMkp5Y2GwPTX3rPeE8HdGu4i4pIaVtnNABHX10q48IxZewHDaEwV16bE0FZ564+bWHuRdYXpyhR+YMCN/tpVK5D5qtcLtXb72TiMViNFGYKFRZkk6nV+kbLTz4zOfEw6s4IVTlywRrrEj1+1Z9iUZkRvDCIoCT3Opk/f8AagueP+LvELgYDwLQJ/LbzH2liahOZgb1vC4oKIuBhcCggK6EZgegBDKw/wCVQeHwbOGKxpGhIBMmNB1q68oWhYzJiVN6xdAzWvkAbVSQf+JIkd/SguXwevkYZ7RPyPI9jWiXbYYQRIqq/DXl4LZZ7ZBZCbbgHMGjVbg7EggMD1Bq6iwRuIoM95m5MW/JUAHpI/mqHxTky4khkkfpW/rhZNd3+Goywyg0HzP/AOtKJLCAPWq9xC0quVQGBv1rcue+Bi2jtaXpsKzjH8JGFwmIF2Gxl0oLgAOewC2YIf8AcwAkdNvSgqmDRfMWcpsAcuYakT+kmnfC+JFDkuhr1iD+HnKAbkFTBiDrtSV3HnwrdpFyKrZz1Zm2BPsNAPfvRewxL3fPbbc5hojdfJp16aCgm8ZhmKpPieJbaMjDyIpggAzpqTpEaz1qd4Rgib2dYsWby6hD42VSYMzqDp11qO5XCvbRRduKGBW9pP5pAAnzCAp1jWrhy5Yi06AJMl8x8rwOgJPXtQKWeGiGyZnuz+GRoDB1ke1PmuvcRXVkW6nlCkakRvtqPel5zqjlxmHlCjyMMo0Og/WlAEW4GtoWWIh9ZkQdvU0DG1hMrZ5N0Rs4hASNSAD9qu3KnEPDJR7gdQqjMDp6faYqtG0w8S1cc2o1KmSMwGgIH+a0YO+qp5kOjCXUkNqQB6UGtA17VY5e4wT5X0Todtqs1B7RRRQfPwx3iPbtPdyWydGJLoJ6gCrXexOW2qhQCDvrJmIn7Vl/D8WbmJwtgKDDwMgGcyc0HvBmPStK/qwXVrym4BoVBCbCB9tKB6MMtzNbstmJ8oJGTpqddqWw91ba20IEKPME8sx/PrTfBOptsZ8wIAWNT3M9Kj3a9bRrmbLbu5l6NmA3FBn3xQx3iXWCMoVRqCRn8x0idTGUSR6d6T4Vw0XrJIvywaVvOpcHKugKkE9hFMeOWfFezlQnE3bp1ZgbbAkBFg7azOvWrXyzZYF1uYcMwNwtbQ5EB1mI6A6jpQU3BYa4li/mRRkZJJMXRJOiidQepgxptV5so8YW4LYtmJtPl+bzHUzIOulRnHMLbQ3RcDeIcpQgApGuYHrO32p7gnTwkyuWbL5hBXLroAesjWgvnw54NeXEX71y6Y/+Vy1pBIgq0g6REadDWh4m1Ovasc4FzB/QX7htv4uGfRiVIJgSDG4OpH1rSOXedsDjNLGIXxetp/w7o+h3+lBKolFzal7yRqKSKE7UELi8Hcdh4QTNvmcZgp6EDr9azz4g2Lz3sNg8Pdyuji/exL/hp4h0TXsonvqasXNPM7OHs4BiLQbJexSn80Sbds9+7D5dhrtXFw9q21tZZrUAtl0bbUCes9aDOL/Ab3hvKqyC5q0rnzEHbrH6bVJYfgNzx7ebCqS6KFtKGRGlYUiDOu++9XDCYa3keQTckFdBljWZ9dqdrhbY8MrP+73np9KCt8v8Ie3bvqYCqwdgwVXn5dOp9qmcBdm8XunxjpnBGU6aZZ9gNqfLYt57klmUA5TADehP81xw/CnLdOUBFfVvzSw6ntpQOcKpm4i2pdvlBnOsa6fSlJLW9XAVNlJAbzHWO+1dXs0o5uZi4mQZcdNe2lCW0V2Bm6moBHkJ7HWgSuOv4bJOYfMGAyzOkd9Ka8at3IBFshbjC4cohMgMlvYGKfWc7B7aqGnX5Zbyg7ddpqp8zYw+JgUV5Yu3kBMwFET6Sf0oLhhsapeAciRmAJLCY/k1eOA8VFxSCMoXYn9qy3h1zya3JKEAKZJMzMdB/wB1aMLi9c2ttQcwQE9Y2n/NKDQUvKdjNeVWvHfIzWiqkiYbpr2ooPm7gGKa/j7DKEtsIgIPDXyJv7wJnqa1W1ipRvIGzx5zOcQZ0969ooHMjKgQEMR5p236ekUz43YLH+nsHxGc5VZZ1miigp3FrZfGWxiJNu1Fs5FUNlXTQaAmp7lvDsmeH8AhTuSpafyiO/Y0UUEhxfDFrN6SotkrIOXPIBgjrGp+9V63adEthrQRSrZWiGfzakmdYIIFFFBJPka4pNiEBE28zawNdd9areL4RZJxHiWmJI/DKtBQzMnuI0oooLN8N8Vj7V3CW0x2bD3GYPZuDxmULJgTqJjTWtafHi5axVnTx7dv8RBoPOkjfpv9qKKDLrNtbdqADCkQAAEykfvMU5xGIKth2S2FIgD8wYg+uhNe0UHuFW4Dft5JJksMvmWDJjtTlSzW18oCqYzAaknWCa8ooHDu4uI+VbZYApCgKY0kA6dKRXDhLl1bx8MgHYZhI2Gneiig98mT83iZuwyRH713duCLZVApUQSJOYjqfWiig4xbObga55Td82Y+QQdJMdKoV8tc4tYS3cFt7egdTEGT5g3TvNFFBaOHWIS8MhkAENPlXXUnqZ7+tSli6/ldpuIPKCR5NBtNFFBYuG34ypcUggfNrPoTO41ooooP/9k="
                }}
                style={{
                  flex: 1,
                  width: undefined,
                  height: undefined
                }}
              />
            </View>
          )}
          <View style={styles.textArea}>
            <Text style={[CardStatus.text]}>
              How do I login with Facebook account?
            </Text>
          </View>
        </View>
        {action && (
          <View
            style={{
              position: "absolute",
              right: 0
            }}
          >
            <MButton type="ActionButton" icon={action} label={action} />
          </View>
        )}
      </View>
    );
  }
}
export default MBubble;

const styles = StyleSheet.create({
  bubbleCard: {
    width: 359,
    height: 100,
    elevation: 5,
    backgroundColor: Colors.white,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    borderLeftWidth: 5,
    position: "relative",
    // flex:1,
  },
  imageArea: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "red",
    overflow: "hidden"
  },
  textArea: {
    paddingLeft: 10,
    width: 250
  },
  imageTextArea: {
    flexDirection: "row",
  }
});

const Read = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "normal"
  },
  card: {
    borderLeftColor: Colors.disabledButton
  }
});

const UnRead = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "bold"
  },
  card: {
    borderLeftColor: Colors.disabledIcon
  }
});

const Delete = StyleSheet.create({
    card:{
        borderLeftColor:Colors.themeRed,
        backgroundColor:Colors.lightgrey
    }
})

const More = StyleSheet.create({
    card:{
        borderLeftColor:Colors.green,
        backgroundColor:Colors.lightgrey
    }
})

MBubble.defaultProps = {
  // action:""
};
