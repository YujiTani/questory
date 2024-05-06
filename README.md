■ サービス概要
15分程度の短い隙間時間でも、スマホさえあればプログラミング学習できるアプリ

■ このサービスへの思い・作りたい理由
アプリの試作型は既につくってしまったので、想いなどをまとめた記事がnoteにあります。(思いや動機に関しては、記事内の３つの動機という項目に書いてあります。)
(https://note.com/calm_borage173/n/n471630b64d15)

詳細は記事に書いてあるので、ここでは箇条書きにさせていただくと
- 過去に365日英語学習を継続できた「Duolingo」というアプリの仕組みをプログラミング学習にも応用できないかと考えた
- RUNTEQに入り、たくさんの未経験者に教えているうちに、人に教えることが楽しく、好きだと気づいた
しかしカリキュラムが進むにつれ教える時間を確保できなくなったので、自分の代わりに学習のサポートできるアプリを開発しようと思った
- RUNTEQ生の中には、なかなかPC前で学習する環境を整えられずに困っている人たちがいるので、スマホが使えれば学習できる環境を用意したいと考えた

■ ユーザー層について
決めたユーザー層についてどうしてその層を対象にしたのかそれぞれ理由を教えてください。
- ユーザー層は、プログラミング学習の初学者(特にRUNTEQに入学してきた方たち)

■ サービスの利用イメージ
日常生活のちょっとした隙間時間に、アプリを開いてぽちぽち学習する

例）
1. 電車に乗っている時間
2. 仕事が遅くなった日、カリキュラムを進めたいが、時間も遅いため、はやく寝ないといけない
3. 育児や、家事が片付き少しだけ時間ができたが、PCを開いて勉強するほどの時間はない

ユーザーがこのサービスをどのように利用できて、それによってどんな価値を得られるかを簡単に説明してください。
隙間時間を有効にプログラミング学習にあてることで、フルコミットでないRUNTEQ受講生に発生しがちな学習間隔が空いてしまう問題の解消をめざす
これにより、プログラミング学習の天敵である学習内容を忘れてしまう事を軽減させ、途中離脱率をさげられる

■ ユーザーの獲得について
RUNTEQに入学してきた生徒たちに対して案内を設け、隙間時間での学習は、私が作ったアプリを使って勉強するように促していく

■ サービスの差別化ポイント・推しポイント
<!-- 似たようなサービスが存在する場合、そのサービスとの明確な差別化ポイントとその差別化ポイントのどこが優れているのか教えてください。
独自性の強いサービスの場合、このサービスの推しとなるポイントを教えてください。 -->

競合となるサービス
- progate…手軽にプログラミング学習ができるという点で、競合となりうるがスマホでの学習は非推奨のため、問題ないとかんがえる
- ドットインストール…スマホでも問題なく使用できるが、動画視聴という形になるため、ハンズオンできない場合、学習効率が低くなるとかんがえる、また継続的な学習意欲を掻き立てる仕組みに乏しいので、こちらがこの部分を強くすれば、差別化は可能

- Codecademy…英語サイト、codeをタイピングする必要があるので、スマホでの学習に向いていない

■ 機能候補
<!-- 現状作ろうと思っている機能、案段階の機能をしっかりと固まっていなくても構わないので MVP リリース時に作っていたいもの、本リリースまでに作っていたいものをそれぞれ分けて教えてください。 -->

現状作ろうと思っている機能
- 認証機能(SNS認証, LINEを優先)
- 問題を解く機能(下記は、問題の種類)
 - SQL
  - DBを確認できる機能
  - SQLの用語学習
  - SQLの基礎的な使い方
  - SQLの組み立て練習
  - 複数のテーブルを使う問題
  - 現場を想定したデータ取得問題(営業成績の可視化など)
 - ORM(ActiveRecord)
  - ActiveRecordの用語学習
  - ActiveRecordの基礎的な使い方
  - リレーション系の問題
  - ActiveRecordの組み立て練習
  - 指定されたSQLをActiveRecordで作る問題
  - 解凍後に作成したActiveRecordをSQLに変換してみせる機能
 - 累計クリア問題数を表示する機能
 - 連続正答数を表示する機能
 - クリアスコアを表示する機能(独自の計算式を用意する)
 - SNSにクリア画面をシェアする機能
 - アプリ内の問題をフィードバックしてもらえる機能
 - 一定時間、問題の解答状況を保存する機能(1ステージ、10個の問題という単位にするので、朝少しプレイ、夜仕事おわってプレイする状況を考慮して)
 - 連続ログイン日数を表示する機能
 - 累計クリアスコアで、レベルが上がる機能
 - ユーザー同士のスコアランキング表示機能
 - 1日のアプリプレイ回数を制限する機能
 - LINEに通知する機能(連続ログイン日数など)

高度な機能
- LINEに通知する機能(連続ログイン日数など)
- 問題の自動生成機能(精度が安定するならば、LLMアプリを開発して問題はここから出力する) 

MVPリリース時に作っていたいもの
- 認証機能
- 問題を解く機能(下記は、問題の種類)
 - SQL
  - DBを確認できる機能
  - SQLの用語学習
  - SQLの基礎的な使い方
 - 累計クリア問題数を表示する機能
 - 連続正答数を表示する機能
 - クリアスコアを表示する機能(独自の計算式を用意する)
 - SNSにクリア画面をシェアする機能
 - アプリ内の問題をフィードバックしてもらえる機能

本リリースまでに作っていたいもの
- 認証機能(SNS認証, LINEを優先)
- 問題を解く機能(下記は、問題の種類)
 - SQL
  - DBを確認できる機能
  - SQLの用語学習
  - SQLの基礎的な使い方
  - SQLの組み立て練習
  - 複数のテーブルを使う問題
  - 現場を想定したデータ取得問題(営業成績の可視化など)
 - ORM(ActiveRecord)
  - ActiveRecordの用語学習
  - ActiveRecordの基礎的な使い方
  - リレーション系の問題
  - ActiveRecordの組み立て練習
  - 指定されたSQLをActiveRecordで作る問題
  - 解凍後に作成したActiveRecordをSQLに変換してみせる機能
 - 累計クリア問題数を表示する機能
 - 連続正答数を表示する機能
 - クリアスコアを表示する機能(独自の計算式を用意する)
 - SNSにクリア画面をシェアする機能
 - アプリ内の問題をフィードバックしてもらえる機能
 - 一定時間、問題の解答状況を保存する機能(1ステージ、10個の問題という単位にするので、朝少しプレイ、夜仕事おわってプレイする状況を考慮して)
 - 連続ログイン日数を表示する機能
 - 累計クリアスコアで、レベルが上がる機能
 - ユーザー同士のスコアランキング表示機能

■ 機能の実装方針予定
<!-- 一般的な CRUD 以外の実装予定の機能についてそれぞれどのようなイメージ(使用する API や)で実装する予定なのか現状考えているもので良いので教えて下さい。 -->

問題を解く機能
- 解答データとユーザーの解答を比較して、正誤判定を行う
- ユーザーが解答する種類を増やすことで、様々なバリエーションが用意できるはず(スマホでの操作しやすさを考慮する)
- ベストはLLMアプリを開発し、問題を自動生成できるようにすること

DBを確認できる機能
- shemasファイルを読み込み、テーブルUIを作成し表示させるまたは、DBの内容をJSON形式で表示させる

SNSシェア機能
- 下記のようなライブラリを使って実装するつもり
(https://github.com/nygardk/react-share?tab=readme-ov-file)
