var tipuesearch = {"pages": [{'title': 'About', 'text': 'Repository ： https://github.com/s40723124/cd2020 \n Group\xa0Repository： https://github.com/s40723138/cd2020ag4 \n Group Website： https://s40723138.github.io/cd2020ag4/content/index.html \n Gitter: \xa0 https://gitter.im/mdecourse/cd2020 \n \n', 'tags': '', 'url': 'About.html'}, {'title': '每周進度', 'text': '\n', 'tags': '', 'url': '每周進度.html'}, {'title': 'Week 1', 'text': '創建cd2020的倉儲 \n 創建個人網站 \n 步驟: \n 1.登入自己的github帳號 \n 2.創建創建新的倉儲，名稱為cd2020 \n 3.接著git clone\xa0 https://github.com/s40723124/cd2020 \xa0 \n 4.執行git submodule add\xa0 https://github.com/mdecourse/cmsimde.git \xa0 \n 5.將cmsimde>up_dir裡的所有項目複製到外面的cd2020資料夾裡面 \n 6.cd cmsimde 輸入python -m pip install flask_cors 更改模組 \n 7.接著就能執行python wsgi.py \n 8.編輯靜態網站，將自己每周的進度記錄在裡面 \n \n', 'tags': '', 'url': 'Week 1.html'}, {'title': 'Week 2', 'text': '將python 3.7.3更新至3.8.2 \n 1. https://www.python.org/downloads/windows/ 下載 \n 2. Windows x86-64 executable installer 安裝至自己可攜系統\xa0 \n 3.把pip去掉 \n 4.用批次檔更改開始路徑，使用 Scite.exe將原本的py373更改成新的3.8.2版本 \n 5.執行get-pip.py \n 6. 執行pip install指令將 \n Flask\xa0 Markdown\xa0 lxml\xa0 bs4\xa0 flask_cors\xa0 pelican\xa0 leo \n 3.8.2版本缺少的模組依照順序安裝 \n', 'tags': '', 'url': 'Week 2.html'}, {'title': 'Week 4', 'text': '分組討論及小組會議 \n \n', 'tags': '', 'url': 'Week 4.html'}, {'title': 'Week 6', 'text': '使用 OBS portable 以及 Youtube 進行串流 \n 接下來使用 Google \xa0 Hangouts Meet 遠距離教學 \n', 'tags': '', 'url': 'Week 6.html'}, {'title': 'Week 7', 'text': '四輪機器人 \n', 'tags': '', 'url': 'Week 7.html'}, {'title': 'Week 8', 'text': '下載 CoppeliaSim ，放到可攜系統。 \n 將 leo 升級到6.2.1 \n', 'tags': '', 'url': 'Week 8.html'}, {'title': 'Week 9', 'text': '', 'tags': '', 'url': 'Week 9.html'}, {'title': 'Week 10', 'text': '直播分配工作 \n', 'tags': '', 'url': 'Week 10.html'}, {'title': 'Week 11', 'text': '', 'tags': '', 'url': 'Week 11.html'}, {'title': 'Week 12', 'text': '', 'tags': '', 'url': 'Week 12.html'}, {'title': 'Week 13', 'text': '', 'tags': '', 'url': 'Week 13.html'}, {'title': '小組分工', 'text': '可移植編程系統創建: \n 40723101 沈易萱 \n 40723111 李其叡 \n 40723121 邱博義 \n 40723138 黃奕慶 \n https://github.com/mdecourse/cd2020/issues/18 \n 四輪機器人: \n 40723102 林昱秀 \n 40723119 林哲緯 \n 40723124 徐敬倫 \n 40723134 陳漢宇 \n https://github.com/mdecourse/cd2020/issues/12 \n https://github.com/mdecourse/cd2020/issues/13 \n https://github.com/mdecourse/cd2020/issues/15 \n 隨機分組: \n 40723106 王昱翔 \n 40423155(學長) \n 40723135 陳藝晉 \n 40723136 彭少鍚\xa0 \n https://github.com/mdecourse/cd2020/issues/9 \n \n', 'tags': '', 'url': '小組分工.html'}, {'title': 'Youtube 直播紀錄', 'text': 'Week2 直播討論 \n \n Week4 直播討論 \n \n Week6 直播討論 \n \n Week7 直播討論 \n \n Week10 直播討論 \n \n Week13 直播討論 \n \n \n', 'tags': '', 'url': 'Youtube 直播紀錄.html'}, {'title': 'VirtualBox', 'text': '第14周與第15周皆被抽到，但都遇到了一些問題，因為時間上的關係所以沒有處理完，還在努力中。 \n \n (IPv6) Setting VirtualBox Network \n 1.將設定 調成NAT Network \n \n 2.打 ifconfig 尋找IPv6網路 \n 3.安裝網路工具，密碼為kmol2020 \n 4.到 /etc/netplan檢查00-installer-config.yaml 檔案內的設定 \n 5.將00-installer-config.yaml 設定改為下圖 \n \n 6.編輯完成後按insert退出編輯>esc>:wq\xa0 跳出編輯並儲存，接著更新netplan設定 \n 7.到 /etc/apt/apt.conf.d 目錄下檢查是否有proxy.conf檔案 \n 8.proxy.conf的檔案內容 (53 or 69)為proxy的port號 \n 9.新增完內容更新apt \n 10.再試一次ifconfig尋找IPv6網路 \n', 'tags': '', 'url': 'VirtualBox.html'}]};