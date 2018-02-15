# ts_react_learning

Study project for React, Typescript

## prerequisties

* node / npm
* gulp ( `npm install gulp -g` , or use locally installed `./node_modules/.bin/gulp`)

## setup

```
$ npm install
```

## run

```
$ gulp watch
```

## build for production

```
$ gulp build:prod
```

## TODO

* [ ] ローカルでのサーバ起動(browsersync? 参考：http://tech.medpeer.co.jp/entry/2015/06/09/071758 )
* [ ] index.html を dev/prod で分ける方法を考える
* [ ] AP全体構成考えてみる(redux?) (container/page/component pattern?)
 - 参考：https://blog.mitsuruog.info/2017/08/look-back-react-typescript-after-half-year
* [ ] gulp に clean タスク追加
* [ ] css framework (bootstrap? material-ui? others?)
* [ ] サンプルAPとして何を作るか考える(地図関連？)
* [ ] テストコードを書く環境を作る(Mocha / Powerassert / ?)
