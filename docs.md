#  Lời nói đầu

Đây là repo web chính thức của VietCode, và dưới đây là lời tâm sự và nhắn nhủ đến mùa sau, chắp bút bởi Nguyễn Tiểu Phương `@tiuphun` và Nguyễn Mạnh Hùng `@MyNameIsHung`
Ở trong file này các bạn sẽ tìm được quy tắc code và xây dựng web, cũng như nhiều thứ hay ho khác. Chúng tôi thề đây là cái documentation cợt nhả, à nhầm, hài hước nhất quả đất mà bạn sẽ được đọc từ giờ về sau.
# Installation Guide

-> Xem `readme.md`

# Coding Convention

’’Code sạch lên em ơi’’ - Lee Min Duck doanh nhân thành đạt nào đó

Đây là cái guide giúp cho mọi người có thể hiểu season 5 vừa rồi tôi và homies tôi đã đập web của chúng ta như thế nào :(. Guide này bao gồm cả hướng dẫn để mọi người code cho nó được clean chứ đừng như tôi nhé :(.

### 1. **Hệ thống sắp xếp các files:**

Khi clone về, mọi người sẽ thấy các thư mục và files (ở ngoài cùng sau đây):

- Thư mục: .github, node_modules, public, src.
- Tệp: .gitignore, package.json, package-lock.json, README.md.

Chúng ta sẽ chỉ quan tâm chủ yếu đến hai thư mục sau: **public** (thực ra cũng k cần lắm) và **src**.

Trong thư mục **public** chúng ta sẽ chỉ cần quan tâm đến file: **index.html**

Nếu cần `<link />` các thứ vào chúng ta sẽ bỏ vào đó nha.

Trong thư mục **src,** ta sẽ thấy:

**a. Các thư mục:**

- **images, helpers, css**: các thư mục này sẽ không cần quan tâm tới đâu.
- **pages**: Thư mục này sẽ chứa một component bự chảng chính là các pages (home, about, events, news). Và tại đây các components pages sẽ render các components nhỏ hơn (**templates**).
- **templates: Thư mục này sẽ chứa các templates của các pages. Templates ở đây được hiểu là một trang nhỏ của pages đó. Ví dụ trang news sẽ bao gồm các templates: MainNews (trang news chính), Series, Post.**
- **components**: Thư mục này sẽ chứa các components mà không phải là một pages hay templates. Để dễ hiểu mọi người cứ hiểu là các phần nho nhỏ của web sẽ được bỏ vào đây. (Sidebar, Header, Bottombar, Footer, etc.)

Nếu chưa hiểu lắm, mọi người có thể xem qua sơ đồ này:

**Page** news của chúng ta sẽ bao gồm 3 **templates**:

- **Template MainNews:**

    [https://lh3.googleusercontent.com/RhIaiChgKe1e1voVudIICGOEAz-NUKLhj7Ho4P4FoFKO7RIybQc1zyUdHz0MAmCETNVx_ZSAQ83ziMWgwWtzWSut-bjzxQc5Z5bQYQXpIiT3ILb7ukwT-QhxcEBo-dGQWtvH6ay1](https://lh3.googleusercontent.com/RhIaiChgKe1e1voVudIICGOEAz-NUKLhj7Ho4P4FoFKO7RIybQc1zyUdHz0MAmCETNVx_ZSAQ83ziMWgwWtzWSut-bjzxQc5Z5bQYQXpIiT3ILb7ukwT-QhxcEBo-dGQWtvH6ay1)

- **Template Series:**

[https://lh6.googleusercontent.com/hfZ90vxTgzTYDgn6oG0Evz0HamKoKq1wS6YYQQmxKExsrSg8f6b1q5sL5R-8DWu19CNJGAQjqovlvbby0kBr1cwELtkR85jd6vcNBBCBbEMgJzU-MFkvRa5HRXT6gqWqn7tDJVl1](https://lh6.googleusercontent.com/hfZ90vxTgzTYDgn6oG0Evz0HamKoKq1wS6YYQQmxKExsrSg8f6b1q5sL5R-8DWu19CNJGAQjqovlvbby0kBr1cwELtkR85jd6vcNBBCBbEMgJzU-MFkvRa5HRXT6gqWqn7tDJVl1)

- **Template Post:**

[https://lh4.googleusercontent.com/olr2DG2-rzTx0hM1MIYDdBCo8naMNqy_89oiU0VcCDS_VIiRJbIurn36wyuymL8LhEJJ_6w85yTatWstaQxd7sj6qU6Sj4iCgJQ2I5t4PUJB5RDVPXuw-29T0DQF1uiAyPmg7VjE](https://lh4.googleusercontent.com/olr2DG2-rzTx0hM1MIYDdBCo8naMNqy_89oiU0VcCDS_VIiRJbIurn36wyuymL8LhEJJ_6w85yTatWstaQxd7sj6qU6Sj4iCgJQ2I5t4PUJB5RDVPXuw-29T0DQF1uiAyPmg7VjE)

Và ở trong mỗi templates hoặc mỗi pages sẽ được cấu thành từ các phần nhỏ hơn nữa là các files trong thư mục components.

**b. Các files:**

- `index.js`: File này bị bỏ rơi nhé :’(. (Nếu cần biết thì nó chỉ render App ra ‘’root’’ ở index.html thôi)
- `index.css`: nếu mọi người cần style gì đó tổng thể hơn bằng css thì sẽ vào đây.
- `App.js`: File này sẽ chứa các mảng gồm các objects bao gồm các properties của các pages để chúng ta render ra ở Header.js. Đồng thời App.js cũng chịu trách nhiệm render ra tất cả các pages (nó kiểu cái to nhất ấy).
- `theme.js`: theme sẽ chứa các style mặc định của web chúng ta. (màu chữ, màu background, etc.) Nếu muốn sử dụng theme thì nhớ import ở file cần sử dụng rồi gõ đúng theo cú pháp refer đến một properties của một object. Ví dụ cần property main của phần primary ở trong palette (nó là màu chủ đạo của web btw) thì ghi là theme.palette.primary.main (không có ngoặc đơn ngoặc kép nhé).

### **2. Cách để comment :**

Hmmmmmmmmm thực ra comment cũng khá cần thiết nhưng tôi không hay dùng lắm vì hơi bị lười :( .Kiểu thực ra bọn tôi code cũng khá dễ hiểu mà ngồi ‘’wtf’’ khoảng một phút thì mọi người sẽ làm việc mượt ngay thôi ^^.

**Nhưng dù sao thì** mọi người cũng nên biết các comment vì nó sẽ giúp code chúng ta trông neat hơn rất nhiều, nhất là khi đọc hiểu xem các classes được chia phần như nào để dễ định hướng.

Ví dụ: (các đặt chia phần tuyệt đỉnh neat của homie Nguyễn Hoàng) (src/pages/home)

[https://lh5.googleusercontent.com/HQifZJ3PIb_QbpXaypF8rbeNj6Y3YNr5_BC_k_5SR_4Wam-wQ0dzHT13xK7Z7N62q0ys3lsqZsAOL1UtbbcZmTOPaSpkqI8VHpEUDbOqpj7wck--mM-EAKPxaJPfiSPOLS4gsG35](https://lh5.googleusercontent.com/HQifZJ3PIb_QbpXaypF8rbeNj6Y3YNr5_BC_k_5SR_4Wam-wQ0dzHT13xK7Z7N62q0ys3lsqZsAOL1UtbbcZmTOPaSpkqI8VHpEUDbOqpj7wck--mM-EAKPxaJPfiSPOLS4gsG35)

Việc này thực sự là cần thiết với một chỗ có rất nhiều classes và chúng ta cần định vị xem một class	đó là về cái gì hoặc đang ở đâu khi quên béng mất tên nó.

Nói đến đây tôi cũng thấy tội lỗi :((. Đi comment một tí đã.

Oke rồi đây. Nói chung mọi người cần hiểu rằng việc comment thực sự quan trọng hơn bạn tưởng.	Nếu không tin bạn hãy tưởng tượng việc quên mất tên một class nào đó mà style một cái container	nào đó và bạn phải ngồi tìm trong đống hỗn tạp classes loạn hết cả lên. Chính vì vậy việc sắp xếp các classes và comment một cách hợp lí là cần thiết.

### **3. Cách đặt tên hàm biến:**

Đúng vậy đó, đặt tên hàm biến cũng là một việc quan trọng. Nó giúp cho chúng ta định vị được file một cách dễ dàng. Không phải bạn muốn đặt tên file là h, u, a, n, hoahong, etc. hay gì đó là được, mà phải đặt theo mục đích của files, của functions hoặc của variables đó. Hãy tưởng tượng bạn cần tìm file Header (mà nó lại được đặt tên là ‘’hoahong’’) thì ôi thôi bạn phải lục từng files h, u, a, n, .. một để tìm bằng được cái Header yêu quí của bạn.

**Hãy nhớ, tên files, functions, vars phải được đặt theo mục đích và ý nghĩa của chúng. Tên file phải ngắn gọn, súc tích.**

Ví dụ: (Nhân tiện khoe luôn tôi đặt tên mấy cái liền đấy)

[https://lh6.googleusercontent.com/6PxeBWTJ21nJ453SZ5I2rx0E3ypmypVbI5FyYPDIUJl8FY6zdaNjHlNAmbwLZ1uPErQFZyhuc-vzOm09rINWj9QsOa4kBoOyS79qC4WITJer-BSJ1AYTEoer0A4MFzQAmEF7Q938](https://lh6.googleusercontent.com/6PxeBWTJ21nJ453SZ5I2rx0E3ypmypVbI5FyYPDIUJl8FY6zdaNjHlNAmbwLZ1uPErQFZyhuc-vzOm09rINWj9QsOa4kBoOyS79qC4WITJer-BSJ1AYTEoer0A4MFzQAmEF7Q938)

### **4. Note cuối:**

Đây sẽ là 3 tiêu chí mà mọi người cần đạt được:

Điều thứ nhứt, mọi người hãy nhớ rằng **nếu có ý kiến đóng góp, hãy cứ nói nó ra.** Bọn mình đã có trường hợp thành viên rời bỏ nhóm do không đạt được thứ mà bạn ấy mong muốn và bọn mình cũng thực sự không hiểu thứ bạn ấy mong muốn nữa :(. Mọi người sẽ đón nhận ý kiến của bạn nếu như bạn cư xử với một thái độ đúng mực và mang tính xây dựng. Nhớ nhé nhớ nhé việc giao tiếp để hiểu nhau rất là quan trọng.

Điều thứ hai, **việc bạn làm sẽ ảnh hưởng rất nhiều đến tiến độ cả nhóm**. Bạn cần thông báo với mọi người nếu như bạn không thể thực hiện một issue hoặc có việc bận nào đó một thời gian. Bằng không, mọi người sẽ cứ tưởng bạn đang working on một issue nào đó và để yên cho bạn làm và điều này sẽ lãng phí rất nhiều thời gian.

Điều thứ ba, **bạn nên tự mình tìm hiểu kĩ càng một vấn đề trước khi hỏi ai khác**. Bằng cách tự mình giải quyết vấn đề, bạn sẽ học được nhiều hơn và nhớ nó lâu hơn. Tôi thực sự nên khuyên bạn không nên hỏi các cơ quan tối cao ngoại trừ khi bạn thực sự không thể giải quyết vấn đề mà bạn đang đối mặt, bằng không bạn sẽ trở nên lười và dựa dẫm đấy :'(. 

### Tiêu chí đánh giá code
1. Chạy được. Phải chạy được cái đã rồi mới tính đến những cái khác nhe. Bạn viết một thuật toán cao siêu giời ơi đất hỡi mà compile hỏng thì chúng tôi cũng chịu.
2. Sạch. Chạy được xong thì code phải sạch. Code sạch là code tuân thủ tiêu chuẩn trên đây. Đó mới chỉ là bước đầu - nếu bạn muốn nâng tầm sạch sẽ của mình lên tầm cao mới, hãy đón đọc cuốn Clean Code huyền thoại của bác Robert Cecil Martin.
3. Còn một thứ rất quan trọng, mà đột nhiên tôi quên...


# Support & Contact

Web VietCode được xây dựng và phát triển bắt đầu từ VietCode XTeam mùa 5. Nếu có khó khăn, vướng mắc thực sự cần được giải quyết (sau khi đã Gu gồ) vui lòng liên hệ:

1. Lê Minh Đức (Tech Lead): duc20022009@gmail.com
2. Nguyễn Tiểu Phương (Head of Tech): tieuphuongnguyen01631@gmail.com

Team of Programmers:

3. Nguyễn Mạnh Hùng: thefakewarrior123@gmail.com

4. Nguyễn Doãn Hoàng: hoanghohohaha@gmail.com

5. Nguyễn Minh Đức: binbicbang@gmail.com

# Final Message 

Vài dòng nhắn nhủ cho mùa sau. 

- Bên cạnh build web chú ý tới cả những công việc khác xung quanh nó: PR, làm việc với content, họp, viết và update doc.
- Nếu không xây thì vui lòng không phá hoại.
- Nhớ để ý đùn tiền vào domain và update web certificate thường xuyên nhe.
- Yê và chúc may mắn!
