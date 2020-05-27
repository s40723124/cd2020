var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': '每周進度', 'text': '\n', 'tags': '', 'url': '每周進度.html'}, {'title': 'Week 1', 'text': '創建cd2020的倉儲 \n 創建個人網站 \n 步驟: \n 1.登入自己的github帳號 \n 2.創建創建新的倉儲，名稱為cd2020 \n 3.接著git clone\xa0 https://github.com/s40723124/cd2020 \xa0 \n 4.執行git submodule add\xa0 https://github.com/mdecourse/cmsimde.git \xa0 \n 5.將cmsimde>up_dir裡的所有項目複製到外面的cd2020資料夾裡面 \n 6.cd cmsimde 輸入python -m pip install flask_cors 更改模組 \n 7.接著就能執行python wsgi.py \n 8.編輯靜態網站，將自己每周的進度記錄在裡面 \n \n', 'tags': '', 'url': 'Week 1.html'}, {'title': 'Week 2', 'text': '將python 3.7.3更新至3.8.2 \n 1. https://www.python.org/downloads/windows/ 下載 \n 2. Windows x86-64 executable installer 安裝至自己可攜系統\xa0 \n 3.把pip去掉 \n 4.用批次檔更改開始路徑，使用 Scite.exe將原本的py373更改成新的3.8.2版本 \n 5.執行get-pip.py \n 6. 執行pip install指令將 \n Flask\xa0 Markdown\xa0 lxml\xa0 bs4\xa0 flask_cors\xa0 pelican\xa0 leo \n 3.8.2版本缺少的模組依照順序安裝 \n', 'tags': '', 'url': 'Week 2.html'}, {'title': 'Week 4', 'text': '分組討論及小組會議 \n \n', 'tags': '', 'url': 'Week 4.html'}, {'title': 'Week 6', 'text': '使用 OBS portable 以及 Youtube 進行串流 \n 接下來使用 Google \xa0 Hangouts Meet 遠距離教學 \n', 'tags': '', 'url': 'Week 6.html'}, {'title': 'Week 7', 'text': '四輪機器人 \n', 'tags': '', 'url': 'Week 7.html'}, {'title': 'Week 8', 'text': '下載 CoppeliaSim ，放到可攜系統。 \n 將 leo 升級到6.2.1 \n \n', 'tags': '', 'url': 'Week 8.html'}, {'title': 'Youtube 直播紀錄', 'text': 'Week2 直播討論 \n Week4 直播討論 \n Week6 直播討論 \n \n Week7 直播討論 \n \n Week10 直播討論 \n \n Week13 直播討論 \n', 'tags': '', 'url': 'Youtube 直播紀錄.html'}]};