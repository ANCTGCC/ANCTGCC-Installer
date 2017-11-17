# ANCTGCC Installer

## インストーラの作り方
1. このリポジトリをcloneする。
2. Visual Studio(2015|2017)に 「Microsoft Visual Studio (2015|2017) Installer Projects」 をインストールする。
  - [VS2015](https://www.ipentec.com/document/document.aspx?page=visual-studio-2015-install-microsoft-visual-studio-2015-installer-projects)
  - [VS2017](https://qiita.com/Kosen-amai/items/44392fdf3bd8b56cfacb)
3. ソリューションエクスプローラーの 「ANCTGCC Installer」 を右クリックし、 [View] -> [ファイル システム] をクリックする。
4. 「Application Folder」 をダブルクリックして、右側の領域(これがフォルダの中を表現している)に展開したいもの(exe・Games/・README/の3つかな)をドラッグアンドドロップする。
5. ソリューションエクスプローラーの 「ANCTGCC Installer」 クリックしてF4キーを押し、プロパティを開く。(右クリックのプロパティではない)
6. [ProductName] にexeファイルから拡張子を除いたものを入力する。
7. [Title] に年度を入れるなどはお好みで。
8. 構成をReleaseにしてビルドする。
9. `(プロジェクトルート)/ANCTGCC Installer/Release` 以下に `setup.exe` とmsiファイルが生成されるので、 `setup.exe` が正常動作するか検証する。
10. `setup.exe` とmsiファイルを `(プロジェクトルート)/Disc` フォルダに入れる。
11. [Imgburn](http://www.imgburn.com/index.php?act=download)でDiscフォルダをisoファイルにする。
  ディスク直下に `autorun.inf` や `setup.exe` などが見えていれば成功です。

### Note
- 8でビルドが失敗するとき
    - `'mscorlib.tlb' should be excluded because...` の場合はこのエラーメッセージの通り
        1. Unity製ゲームのDataフォルダ内のManagedフォルダにある'mscorlib.tlb'をクリックしてF4でプロパティを開く。
        2. [Exclude] にTrueをセットするとインストーラから除外される。
