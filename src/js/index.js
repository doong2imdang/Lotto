/// Modal창 띄우기(기본세팅) ///
const $showResultButton = document.querySelector('.open-result-modal-button')
const $modalClose = document.querySelector('.modal-close')
const $modal = document.querySelector('.modal')
const $lottoNumbersToggleButton = document.querySelector(
  '.lotto-numbers-toggle-button'
)

const onModalShow = () => {
  $modal.classList.add('open')
}

const onModalClose = () => {
  $modal.classList.remove('open')
}

$showResultButton.addEventListener('click', onModalShow)
$modalClose.addEventListener('click', onModalClose)

/// 구매부분 ///
const purchaseInput = document.querySelector('input[type="number"]');
const confirmButton = document.querySelector('.btn-cyan');
const toggleButton = document.querySelector('.lotto-numbers-toggle-button');
const purchaseNumTxt = document.querySelector('.flex-auto.my-0');
const purchaseNumContainer = document.querySelector('.d-flex.flex-wrap');
const existingSpanCount = purchaseNumContainer.querySelectorAll('span').length;

// 번호 보기 토글 상태 변수
let isToggleOn = false;

// 확인 버튼 클릭 시 이벤트
confirmButton.addEventListener('click', handleConfirmClick);

function handleConfirmClick() {
  const amount = purchaseInput.value;
  const existingLottoCount = parseInt(purchaseNumTxt.textContent.split(' ')[1]);
  const purchaseCount = Math.floor(amount / 1000);
  const remainder = amount % 1000;
  const totalLottoCount = existingLottoCount + purchaseCount;
  // alert 창
  if (amount % 1000 !== 0) {
    alert(`로또 ${purchaseCount}개를 구매하였습니다. 거스름돈은 ${remainder}원입니다.`);
  } else {
    alert(`로또 ${purchaseCount}개를 구매하였습니다.`);
  }
  updateTotalLottoCount(totalLottoCount);
  addNewLottoIcons(purchaseCount);
}

// 구매한 로또 총 개수 
function updateTotalLottoCount(count) {
  purchaseNumTxt.textContent = `총 ${count}개를 구매하였습니다.`;
}

// 로또 아이콘 생성
function createLottoIcon() {
  const ticketSpan = document.createElement('span');
  ticketSpan.className = 'mx-1 text-4xl';
  ticketSpan.textContent = '🎟️';
  return ticketSpan;
}

// 추가 구매인 로또 개수 더해주기
function addNewLottoIcons(count) {
  for (let i = 0; i < count; i++) {
    const ticketSpan = createLottoIcon();
    purchaseNumContainer.appendChild(ticketSpan);
  }
}

// 구매한 로또 개수만큼 랜덤을 숫자 생성

