$(document).ready(function() {
    $('.account_title').on('click', function() {
        var $account = $(this).closest('.account');
        var $accountList = $account.find('.account_list');
        var $arrow = $(this).find('.arrow');
    
        $accountList.stop().slideToggle();
        $account.toggleClass('on');
        $arrow.toggleClass('on');
    });
});

function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = text;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

function bankInfoclip01() {
    var infoText = '110-331-185-184';
    copyToClipboard(infoText);
    alert("복사되었습니다. 필요하신 곳에 붙여넣기 하세요!");
}

function  bankInfoclip02() {
    var infoText = '422-910185-20507';
    copyToClipboard(infoText);
    alert("복사되었습니다. 필요하신 곳에 붙여넣기 하세요!");
}

function  bankInfoclip03() {
    var infoText = '602-12-767185 ';
    copyToClipboard(infoText);
    alert("복사되었습니다. 필요하신 곳에 붙여넣기 하세요!");
}

function infoClip() {
    var infoText = '2023년 11월 11일 토요일 오후 6시 더 아리엘 6층 스카이가든홀';
    copyToClipboard(infoText);
    alert("예식 정보가 복사되었습니다. 필요하신 곳에 붙여넣기 하세요!");
}

function addressClip() {
    var addressText = '경기 수원시 팔달구 중부대로 181';
    copyToClipboard(addressText);
    alert("예식장 주소가 복사되었습니다. 필요하신 곳에 붙여넣기 하세요!");
}

function urlClip() {
    var url = 'https://yoonena.github.io/wedding/';
    copyToClipboard(url);
    alert("링크가 복사되었습니다. 필요하신 곳에 붙여넣기 하세요!");
}