Hướng dẫn cài đặt
======================
###### by @tiuphun
Các bước cài đặt để bắt đầu build và phát triển project.

Clone
-------------------

Cách làm:

1. Đi đến nơi có repo muốn clone trên trình duyệt
Ví dụ: https://github.com/vietcodes5/web

2. Tìm tới nút màu xanh bên phải màn hình "Clone or Download".
Từ đó sẽ có một hộp thoại "Clone with HTTPS" và địa chỉ tương ứng.
Copy địa chỉ đó.

3. Mở terminal (với MacOS và các Linux distro, riêng Windows có tên "Windows PowerShell")
Gõ lệnh:
git clone {paste địa chỉ vừa copy tại đây}

4. Để xem danh sách file đã clone về, gõ lệnh:
ls {tên repo vừa clone}

*Tham khảo: https://opensource.com/article/18/2/how-clone-modify-add-delete-git-files*

Cài Node
--------------------------
Windows: lên trang https://nodejs.org/en/download/ và làm theo hướng dẫn.

MacOS và distro Linux: Sử dụng nvm (Node Version Manager) để cài - Làm theo hướng dẫn tại https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/#install-nodejs-and-npm-1

*Tham khảo: https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/*

Khởi chạy
---------------------------
Mở thư mục chứa repo vừa clone về trong terminal và thực hiện các lệnh:

#### npm start
Mở ứng dụng trong mode phát triển.
Sau đó mở địa chỉ http://localhost:3000/ trong trình duyệt để xem ứng dụng đó.

#### npm test
Khởi chạy test trong mode tương tác.

#### npm run build
Gộp và xây dựng project React vào trong folder 'build'
Ứng dụng khi đó sẽ sẵn sàng để deploy!

#### npm run eject
!! DANGER ZONE !!

Nếu như không hài lòng với toàn bộ tất cả những cài đặt và build, chúng ta có thể xóa nó với lệnh trên. Tuy vậy các cài đặt họ đã để phù hợp hết rồi, vì vậy chúng ta sẽ không bao giờ phải dùng tới lệnh này.

Cài đặt các dependencies
------------------------------
Dependency nói chung là các chức năng dùng chung có tác dụng khởi tạo các object ta muốn.
Phải cài đặt chúng thì ta mới có thể bắt đầu build.

Chạy lệnh:
#### npm install {tên dependency}

Các bước đóng góp code
==============================
*Tuân thủ theo quy tắc GitHub Flow: https://guides.github.com/introduction/flow/*

Dưới đây là tóm tắt:

#### Tạo branch
Khi bắt đầu làm project sẽ có một branch gốc tên 'master'. Đây là branch quan trọng nhất, chỉ được thay đổi khi project đã hoàn thiện một cách đẹp đẽ và sạch sẽ.

Vì thế khi bắt đầu dev chúng ta sẽ tạo một branch khác. Giống như một quyển vở nháp, mọi thứ build sau này chúng ta sẽ đưa lên branch này để kiểm duyệt.

Chỉ tới khi cuối cùng tất cả mọi thứ xong, no bug, lung linh, thì ta mới gộp 2 branch vào với nhau - giống như copy đáp án từ quyển nháp vào tờ giấy trả lời trắc nghiệm vậy.

#### Commits
Commits là những thay đổi mà chúng ta tạo ra trong quá trình build. Nó cũng có thể được lưu lại như là lịch sử xây dựng project. 

Hãy viết commit messages rõ ràng và dễ hiểu để người khác hiểu bạn đang thay đổi cái gì.

#### Pull Request
Pull request là khi bạn muốn đưa thay đổi của mình vào branch thông qua thảo luận với người trong team. Hãy viết code thật chỉn chu rồi mới mở pull request. Viết tin nhắn trong pull request rõ ràng để người khác có thể bàn luận với bạn. 

Hãy bàn thảo và review code kĩ trước khi chấp nhận một pull request nào đó.

#### Deploy
Sau quá trình dài dev, mọi thứ với branch "nháp" mà chúng ta khởi tạo đã xong. Hãy deploy nó để check lỗi và đưa ra thay đổi cần thiết. Phải thật cẩn thận, và chắc chắn là không mắc sai sót gì nữa.

#### Merge và kết thúc
Bây giờ đã xong quá trình build dự án, chúng ta sẽ gộp branch "nháp" với branch master ban đầu, và cho ra sản phẩm cuối cùng.


