// スクロール機能を追加
const invitation = document.querySelector('.invitation');
const invitationContent = document.querySelector('.invitation-content');
invitation.addEventListener('scroll', function() {
    if (invitation.scrollTop > invitationContent.offsetHeight) {
        document.querySelector('.part2').style.display = 'block';
    } else {
        document.querySelector('.part2').style.display = 'none';
    }
});

// 送信ボタンのイベントリスナーを追加
const attendanceForm = document.getElementById('attendanceForm');
attendanceForm.addEventListener('submit', function(event) {
    event.preventDefault(); // デフォルトの送信を防止
    const formData = new FormData(attendanceForm);
    const name = formData.get('name');
    const attendance = formData.get('attendance');
    const address = formData.get('address');
    const phone = formData.get('phone');
    // ここでフォームデータを処理するか、サーバーに送信するなどの処理を追加
});
