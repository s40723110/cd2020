var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'python 3.8.2', 'text': '', 'tags': '', 'url': 'python 3.8.2.html'}, {'title': 'basic Win10 portable programming', 'text': '在你的可攜下創建一個data子目錄\xa0 :\xa0\xa0 \n \n --everything-is-local\xa0 \xa0 \n https://git-scm.com/download/win \xa0 \xa0 \xa0 \xa0 \xa0 \n 要用git指令要有portablegit 。data下子目錄存取為portablegit(需與啟動檔配合)。 \n start.bat (參考) : \n \n . \n .. \n ... \n ================================================================= \n \n https://www.python.org/downloads/ \n 選取需要的版本(EX : 3.8.2)\xa0 \n 點取執行檔 Windows x86-64 executable installer \n data下子目錄 存取的名稱要跟執行檔相配合(EX : py38) \n \n . \n .. \n ... \n ================================================================= \n \n \n \n \n \n Download Scintilla and SciTE \n \n \n \n 編輯器(用來創建start.bat , stop.bat) https://www.scintilla.org/SciTEDownload.html \n 解開檔案為wscite \n 通過打開SciTE.exe\xa0 \\ Option \\ Open Global Options File \n 找到code.page的部分 , 把code.page=0給註記掉 , 並把code.page=65001取消註記 \n \n \n start.bat\xa0 : \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_mdecourse\nset HomeDrive=%Disk%:\\home_mdecourse\nset Home=%Disk%:\\home_mdecourse\nset USERPROFILE=%Disk%:\\home_mdecourse\n\nREM for putty\nset GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\py38\\DLLs;%Disk%:\\py38\\Lib;%Disk%:\\py38\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py38\n\nset path_python=%Disk%:\\py38;%Disk%:\\py38\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nREM coreutils is for compiling fossil scm\nset path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64;\nset path_tcc=%Disk%:\\tcc;\nset path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin;\nset path_nodejs=Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_xming=%Disk%:\\Xming;\nset path_latex=%%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32;\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite\\SciTE.exe\n\nExit \n \n stop.bat \n @echo off\nset Disk=y\npath=%PATH%;\n\ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM node.exe /F\ntaskkill /IM Range.exe /F\ntaskkill /IM SciTE.exe /F\nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\nEXIT \n - \n 假使要快速比較修改前後 :，可使用一個工具 :\xa0 \n \xa0 KDiff3 - Home \n http://kdiff3.sourceforge.net/ \n \n \n 可即時看到檔案間的差別 \n 也可以用來比較 Tiny C Compiler\xa0\xa0 \n https://directory.fsf.org/wiki/Tiny_C_Compiler \xa0\xa0 檔案編輯前後的差異 \n \n \n https://bellard.org/tcc/ \n . \n .. \n ... \n ================================================================ \n pip \n get-pip.py 頁面存取成data下的get-pip.py \n 再繼續用 : \n python -m pip install flask lxml bs4 flask-cors Markdown pelican leo  \n 下載網際系統相關套件 \n \n ============================================================== \n \n HxD - Freeware Hex Editor and Disk Editor \n \n \n \n \n https://mh-nexus.de/en/hxd/ \xa0 \xa0 \xa0 \n 選取該version區目前適合的版本 \n 利用 HxD 修改 pip.exe 中python.exe 的所在位置(pip.exe是存取在p38的Scripts裡) , HxD 開啟之後搜尋c:\\py38\\python.exe , 然後將滑鼠停在 c 然後輸入y:\\p37\\python.exe, 以便讓可攜系統啟動後, 可以將指令搜尋路徑設到 y:\\p38\\Scripts , 這樣就可以直接以\xa0 "pip install " 指令安裝套件. \n pip install Flask Markdown lxml bs4 flask_cors pelican leo  \n \n . \n .. \n ... \n ================================================================ \n MSYS2 installer \n MSYS2 :\xa0 https://www.msys2.org/ \n \n 接著設定start.bat \n REM 設定 msys2 64 位元的執行路徑\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\n\npath=%Disk%:;%path_python%;%path_git%;%path_msys2%; \n \n . \n .. \n ... \n ================================================================= \n ShareX \n ShareX :\xa0 https://getsharex.com/ \n \n . \n .. \n ... \n ================================================================= \n Tmp (Y\\tmp : git clone .....) \n \n . \n .. \n ... \n ================================================================= \n https://github.com/flutter/flutter \n . \n .. \n ... \n ================================================================= \n Fossil \n \n https://www.fossil-scm.org/index.html/doc/trunk/www/build.wiki \n \n \n . \n .. \n ... \n ================================================================= \n putty\xa0 putty \n \n \n \xa0 \n \xa0================================================================ \n \n \n \n', 'tags': '', 'url': 'basic Win10 portable programming.html'}, {'title': 'Question', 'text': '================================================================= \n 案例1 --- 忘記git pull\xa0 \n \n ================================================================= \n 案例2. --- 沒有裝git (portablegit) \n \n ================================================================= \n 案例3 --- 檔案名跟啟動檔不相配 \n 拿portablegit當例子 :\xa0 \n 執行檔 \n \n 該資料夾 \n \n 出現已知錯誤 : \n \n ================================================================= \n 案例4 ---沒有安裝套件(pip的部分) \n \n pip install lxml \n ================================================================= \n', 'tags': '', 'url': 'Question.html'}, {'title': 'SSH', 'text': 'ssh \n \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'WEEK', 'text': '', 'tags': '', 'url': 'WEEK.html'}, {'title': 'week1', 'text': '', 'tags': '', 'url': 'week1.html'}, {'title': 'week2', 'text': 'week2進度 \n basic Win10 portable programming \n 在你的可攜下創建一個data子目錄\xa0 :\xa0\xa0 \n \n --everything-is-local\xa0 \xa0 \n https://git-scm.com/download/win \xa0 \xa0 \xa0 \xa0 \xa0 \n 要用git指令要有portablegit 。data下子目錄存取為portablegit(需與啟動檔配合)。 \n start.bat (參考) : \n \n . \n .. \n ... \n ================================================================= \n \n https://www.python.org/downloads/ \n 選取需要的版本(EX : 3.8.2)\xa0 \n 點取執行檔 Windows x86-64 executable installer \n data下子目錄存取的名稱要跟執行檔相配合(EX : py38) \n \n . \n .. \n ... \n ================================================================= \n \n \n \n \n \n Download Scintilla and SciTE \n \n \n \n 編輯器(用來創建start.bat , stop.bat) https://www.scintilla.org/SciTEDownload.html \n 解開檔案為wscite \n 通過打開SciTE.exe\xa0 \\ Option \\ Open Global Options File \n 找到code.page的部分 , 把code.page=0給註記掉 , 並把code.page=65001取消註記 \n \n \n start.bat\xa0 : \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_mdecourse\nset HomeDrive=%Disk%:\\home_mdecourse\nset Home=%Disk%:\\home_mdecourse\nset USERPROFILE=%Disk%:\\home_mdecourse\n\nREM for putty\nset GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\py38\\DLLs;%Disk%:\\py38\\Lib;%Disk%:\\py38\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py38\n\nset path_python=%Disk%:\\py38;%Disk%:\\py38\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nREM coreutils is for compiling fossil scm\nset path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64;\nset path_tcc=%Disk%:\\tcc;\nset path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin;\nset path_nodejs=Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_xming=%Disk%:\\Xming;\nset path_latex=%%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32;\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite\\SciTE.exe\n\nExit \n \n stop.bat \n @echo off\nset Disk=y\npath=%PATH%;\n\ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM node.exe /F\ntaskkill /IM Range.exe /F\ntaskkill /IM SciTE.exe /F\nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\nEXIT \n - \n 假使要快速比較修改前後 :，可使用一個工具 :\xa0 \n \xa0 KDiff3 - Home \n http://kdiff3.sourceforge.net/ \n \n \n 可即時看到檔案間的差別 \n 也可以用來比較 Tiny C Compiler\xa0\xa0 \n https://directory.fsf.org/wiki/Tiny_C_Compiler \xa0 \xa0檔案編輯前後的差異 \n \n \n https://bellard.org/tcc/ \n . \n .. \n ... \n ================================================================ \n pip \n get-pip.py 頁面存取成data下的get-pip.py \n 再繼續用 : \n python -m pip install flask lxml bs4 flask-cors Markdown pelican leo  \n 下載網際系統相關套件 \n \n ============================================================== \n \n HxD - Freeware Hex Editor and Disk Editor \n \n \n \n \n https://mh-nexus.de/en/hxd/ \xa0 \xa0 \xa0 \n 選取該version區目前適合的版本 \n 利用 HxD 修改 pip.exe 中python.exe 的所在位置(pip.exe是存取在p38的Scripts裡) , HxD 開啟之後搜尋c:\\py38\\python.exe , 然後將滑鼠停在 c 然後輸入y:\\p37\\python.exe, 以便讓可攜系統啟動後, 可以將指令搜尋路徑設到 y:\\p38\\Scripts , 這樣就可以直接以\xa0"pip install " 指令安裝套件. \n pip install Flask Markdown lxml bs4 flask_cors pelican leo  \n \n . \n .. \n ... \n ================================================================ \n MSYS2 installer \n MSYS2 :\xa0 https://www.msys2.org/ \n \n 接著設定start.bat \n REM 設定 msys2 64 位元的執行路徑\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\n\npath=%Disk%:;%path_python%;%path_git%;%path_msys2%; \n \n . \n .. \n ... \n ================================================================= \n ShareX \n ShareX :\xa0 https://getsharex.com/ \n \n . \n .. \n ... \n ================================================================= \n Tmp  (Y\\tmp : git clone .....) \n \n . \n .. \n ... \n ================================================================= \n https://github.com/flutter/flutter \n . \n .. \n ... \n ================================================================= \n Fossil \n \n https://www.fossil-scm.org/index.html/doc/trunk/www/build.wiki \n \n \n . \n .. \n ... \n ================================================================= \n putty\xa0 putty \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': '◇協同產品設計趨於「非同步」，非同步協同加速創新流程。 \n ◇人很容易犯錯，但電腦是精確的。 \n ◇電腦雖然精確，但不能用電「腦」解決任何事情，但凡遇到衝突時， 還是 需要人的「判斷」。 \n ◇機械產品設計之流程趨於在家即可工作，且如果還能有把多方設計者進行創新設計 \n 時所產生的衝突做到同時兼顧且不失資料的環境的話，那麼就可以實現彼此不受到干擾、方便且快速之創新。 \n ================================================================= \n Reslove confilct \n 點擊command line instruction進入下方指示列修復 \n \n 在該倉儲下暫時切換分支 : \n git checkout -b XXXXX-master master \n 再git pull 該近端 : \n git pull  https://gith ub.c om/ XXXXX /  XXXXX .git master \n 進入近端網頁修改錯誤 : \n 錯誤開始端 : <<<<<<< \n 錯誤結束處 : ======= \n 修改完錯誤後git add，git commit \n 切回分支 : \n git checkout master \n 合併 : \n git merge --no-ff XXXXX-master \n 推送 : \n git push origin master \n', 'tags': '', 'url': 'week3.html'}, {'title': 'week 4', 'text': '◇除了本身的基礎程式能力，還需要有在設計流程裡可以把自己想法呈現，並讓大眾所能理解的能力 \n ================================================================= \n ※如果用Scite開啟PIP.exe，會自動寫入二位元 \n \n . \n \n ================================================================= \n Leo setting \n \n . \n \n . \n \n leo directives reference : \n https://leoeditor.com/directives.html \n', 'tags': '', 'url': 'week 4.html'}, {'title': 'week5', 'text': 'Tomb sweeping day \n', 'tags': '', 'url': 'week5.html'}, {'title': 'week6', 'text': '', 'tags': '', 'url': 'week6.html'}, {'title': 'OBS', 'text': 'Install OBS \n 1.\xa0 https://portableapps.com/apps/music_video/obs-studio-portable \n \xa0 \n \n \xa0 \n setting \n', 'tags': '', 'url': 'OBS.html'}, {'title': 'Google meet', 'text': '', 'tags': '', 'url': 'Google meet.html'}, {'title': 'Planer linkage', 'text': '\n \n \n', 'tags': '', 'url': 'Planer linkage.html'}, {'title': 'TOPIC', 'text': '', 'tags': '', 'url': 'TOPIC.html'}, {'title': 'Topic 0', 'text': '', 'tags': '', 'url': 'Topic 0.html'}, {'title': 'DigitalProductCollaboration', 'text': 'DigitalProductCollaboration \n https://drive.google.com/open?id=1YHQwYduSMisiJQS-Jr_HhJghzIqP_SBc \n \n DigitalProductCollaboration \n P1. \n Digital products are more complex today than ever before. Creating them requires multiple team members, each with their own set of skills and expertise. At Savvy, for example, our customers work closely with: a product manager, UX designer, visual designer, developer(s), content strategist, and a growth specialist. \n 今天，數位產品比以往任何時候都更加複雜。 產出這些產品需要多個團隊，每個團隊成員都有自己的一套技能和專業知識。 例如，在Savvy，我們的客戶與以下人員緊密合作：產品經理，UX(user experience)設計師，視覺設計師，開發人員，內容策略師和成長專家。 \n We use design collaboration to handle this complexity. Done right, design collaboration empowers each of those experts with the mindset, process, and tools to come together and build a better product faster. \n 我們使用設計協作來處理這種複雜性。 如果處理恰當，設計協作將使每位專家都擁有思維方式，過程和工具，進而團結起來，更快地構建更好的產品。 \n We wrote this resource to help other app creators adopt a collaboration culture and process. Read on to learn why design collaboration is important for creating compelling products and experiences. We\'ll also dive into the elements of a design collaboration mindset and culture, tools for effective design collaboration, and a real-world example of design collaboration at work. \n 我們寫這個資源是為了幫助其他應用程序創建者採用協同合作文化和流程。 繼續閱讀以了解為什麼設計協作對於創建引人注目的產品和體驗很重要。 我們還將深入探討設計協同合作思想和文化的原理，有效設計協作的工具，以及工作中設計協作的真實示例。 \n What is "Design" Collaboration? 什麼是“設計”協同合作？ \n Before we jump into it, we need to get on the same page about what design collaboration is... and is not. At its simplest, design collaboration is collaboration in a design-first environment. But, because of the nature of design, especially the design we do at Savvy, design collaboration tends to go beyond what people normally think of as collaboration. 在進入之前，我們需要在同一頁面上了解什麼是設計協同合作，甚麼不是。簡單來說，設計協同合作就是在設計優先的環境中進行協同合作。但是，由於設計的本質，尤其是我們在Savvy所做的設計，設計協同合作往往會超出人們通常認為的協同合作範圍。 \n While collaboration is generally defined as two or more people working together on the same task towards a common goal, design collaboration involves much more. 通常將協同合作定義為兩個或兩個以上的人在共同的目標上共同努力，而設計協同合作則涉及更多。 \n Design collaboration includes more people with different skillsets, tougher challenges, and bigger goals with farther-reaching impacts. 設計協同合作包括更多具有不同技能的人，更艱鉅的挑戰和影響深遠的更大目標。 \n You might think of collaboration as two people hanging a piece of art. It simply requires communication, teamwork, and four hands. Design collaboration is when a team of curators carefully design a visitor\'s experience. They select the art, choose where and how to hang it, which room it lives in (and the room\'s lighting, furniture), even the preceding rooms and the building as a whole. 您可能將協同合作視為兩個人掛在一塊藝術品上。它只需要溝通，團隊合作和四隻手。設計協同合作是指一群策畫者精心去設計顧客的體驗。他們(策畫者)選擇藝術品(兩個人)，選擇在何處以及如何懸掛藝術品，它所居住的房間（以及房間的照明，家具），甚至是先前的房間以及整個建築物。 \n Why Design Collaboration is Important 為什麼設計協作很重要 \n You can design a product without collaboration, but it takes a collaborative design process to make that product great. That\'s why design collaboration is so fundamental. 您可以在沒有協同合作的情況下設計產品，但是要通過協同合作設計過程才能使該產品變得更好。 這就是設計協同合作如此重要的原因。 \n We don\'t just build apps for our customers. Savvy builds multi-platform experiences, complex internal systems, and in some cases, entire brands and businesses. To do so, we leverage expertise across several core disciplines: strategy, design, development, and growth. Each project involves many people, each with their own skillsets and specialties. \n 我們不僅為客戶構建應用程序。 Savvy建立了多平台的體驗，複雜的內部系統，在某些情況下還建立了整個品牌和業務。 為此，我們利用跨多個核心學科的專業知識：策略，設計，開發和成長。 每個項目涉及很多人，每個人都有自己的技能和專長。 \n Design collaboration puts those minds together, combining their separate, specialized expertise to create solutions that tackle all aspects of a shared goal. Instead of coming at a problem from one angle, design collaboration places that problem in front of all experts, forcing them to consider new perspectives and possibilities. 設計協同合作將這些思想融合在一起，結合他們各自的專業知識，共同創建解決方案，以解決共同目標的各個方面。 設計協作不是從一個角度來解決問題，而是將這個問題擺在所有專家面前，迫使他們考慮新的觀點和可能性。 \n', 'tags': '', 'url': 'DigitalProductCollaboration.html'}]};