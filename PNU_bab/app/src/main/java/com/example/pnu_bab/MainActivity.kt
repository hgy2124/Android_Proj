package com.example.pnu_bab

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.widget.AppCompatButton
import com.example.pnu_bab.databinding.ActivityMainBinding
import kotlin.random.Random

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding // 클래스 멤버 변수로 선언했다. 다른 메서드에서도 사용하고 싶어서

    val allSelectedFoods = mutableListOf<String>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val selectedFoods = mutableListOf<String>()

        binding.koreaBtn.setOnClickListener {
            binding.koreaBtn.isSelected = !binding.koreaBtn.isSelected
            updateButtonVisualState(binding.koreaBtn)
        }
        binding.chinaBtn.setOnClickListener {
            binding.chinaBtn.isSelected = !binding.chinaBtn.isSelected
            updateButtonVisualState(binding.chinaBtn)
        }
        binding.japanBtn.setOnClickListener {
            binding.japanBtn.isSelected = !binding.japanBtn.isSelected
            updateButtonVisualState(binding.japanBtn)
        }
        binding.westBtn.setOnClickListener {
            binding.westBtn.isSelected = !binding.westBtn.isSelected
            updateButtonVisualState(binding.westBtn)
        }
        binding.streetFoodBtn.setOnClickListener {
            binding.streetFoodBtn.isSelected = !binding.streetFoodBtn.isSelected
            updateButtonVisualState(binding.streetFoodBtn)
        }
        binding.fastfoodBtn.setOnClickListener {
            binding.fastfoodBtn.isSelected = !binding.fastfoodBtn.isSelected
            updateButtonVisualState(binding.fastfoodBtn)
        }
        binding.meetchickenBtn.setOnClickListener {
            binding.meetchickenBtn.isSelected = !binding.meetchickenBtn.isSelected
            updateButtonVisualState(binding.meetchickenBtn)
        }
        binding.dessertBtn.setOnClickListener {
            binding.dessertBtn.isSelected = !binding.dessertBtn.isSelected
            updateButtonVisualState(binding.dessertBtn)
        }
        binding.etcBtn.setOnClickListener {
            binding.etcBtn.isSelected = !binding.etcBtn.isSelected
            updateButtonVisualState(binding.etcBtn)
        }
        binding.checkBox.setOnCheckedChangeListener { _, isChecked ->
            updateAllButtonsVisualState(isChecked)
        }
        binding.ranBtn.setOnClickListener {
            val selectedFood = getRandomFood()

            if (selectedFood == "NULL") {
                Toast.makeText(this, "하나 이상의 카테고리를 선택하세요!", Toast.LENGTH_SHORT).show()
            } else {
                val intent = Intent(this, ResultActivity::class.java)
                intent.putStringArrayListExtra("allSelectedFoods", ArrayList(allSelectedFoods))
                intent.putExtra("selectedFood", selectedFood)
                startActivity(intent)
            }
        }

    }
    private fun updateButtonVisualState(button: AppCompatButton) {
        val isSelected = button.isSelected

        if (isSelected) {
            button.setBackgroundResource(R.drawable.btn_clicked)
        } else {
            button.setBackgroundResource(R.drawable.btn_normal)
        }
    }

    private fun updateAllButtonsVisualState(isChecked: Boolean) {
        val buttons = listOf(
            binding.koreaBtn,
            binding.chinaBtn,
            binding.japanBtn,
            binding.westBtn,
            binding.streetFoodBtn,
            binding.fastfoodBtn,
            binding.meetchickenBtn,
            binding.dessertBtn,
            binding.etcBtn
        )
        buttons.forEach { button ->
            button.isSelected = isChecked
            updateButtonVisualState(button)
        }
    }

    val koreanRestaurants = arrayOf(
        "도야지면옥",
        "서문국수",
        "솔밭집",
        "맛나감자탕",
        "토비코",
        "부산밀면",
        "대길",
        "전통쑥밀면",
        "오공복이",
        "곁집",
        "등촌샤브칼국수",
        "인안",
        "짠지",
        "한솥",
        "두부마을",
        "오니라식탁",
        "원조밀면",
        "우쭈쭈",
        "박가부대",
        "미미엔",
        "진국명가",
        "정직유부",
        "채선당",
        "샤브올",
        "정성식당"
    )
    val chineseRestaurants = arrayOf(
        "수림식당",
        "일가인 우리집",
        "그집짬뽕0927",
        "만사성",
        "하얼빈",
        "샤오바오",
        "홍콩반점0410",
        "라화공방",
        "짬뽕상회",
        "야미마라탕",
        "홍주방",
        "탕화쿵푸마라탕",
        "마라내음",
        "라메이 사천훠궈",
        "라쿵푸마라탕",
        "웍헤이"
    )
    val japaneseRestaurants = arrayOf(
        "톤쇼우",
        "백소정",
        "코하루",
        "모시모시",
        "나오리쇼쿠",
        "스시심",
        "쿠카이야",
        "카츠안",
        "하나이미",
        "텐동코하루",
        "인자한키친",
        "스나쿠",
        "우마이도",
        "마마도마",
        "수수하지만굉장해",
        "교토밥상",
        "돈부리타쿠미",
        "겐쇼심야라멘",
        "야마벤또",
        "카레모모"
    )
    val westernRestaurants = arrayOf(
        "펠로",
        "호작",
        "비비드드림",
        "브런치앤디너 테라비",
        "델라고",
        "해쉬",
        "키노",
        "밤비노72",
        "부들파이터",
        "리멘시타",
        "나이트폴",
        "우디",
        "리틀프랑",
        "ola",
        "잇쇼우안 스테이크",
        "서양식당",
        "롤링파스타"
    )
    val dessertPlaces = arrayOf(
        "논피니토",
        "에타리",
        "보노베리",
        "의정서",
        "소사베이커리",
        "구디너프",
        "이흥용",
        "블루그로토",
        "모모후",
        "카페호밀",
        "코스피어",
        "스웨터",
        "능선",
        "디프런트데이즈",
        "더하루나",
        "서빙고",
        "비윤",
        "커피어웨이크",
        "라프",
        "케어포커피",
        "하마하마",
        "올베이크",
        "우드로",
        "타타스베이글",
        "와플대학"
    )
    val streetFoodPlaces = arrayOf(
        "진경순 부대꼬마김밥",
        "소다미김밥",
        "온김밥",
        "정문토스트",
        "청년다방",
        "두끼",
        "동대문엽기떡볶이",
        "디델리",
        "두근두근주먹밥",
        "봉구스밥버거",
        "죠스떡볶이",
        "애플꼬마김밥",
        "신전떡볶이",
        "강다짐",
        "든든김밥"
    )
    val meatAndChickenPlaces = arrayOf(
        "뉴숯불통닭",
        "촨촨한양꼬치",
        "시골통돼지볶음",
        "개성상인",
        "곱창이야기",
        "자마미등갈비",
        "신육간",
        "돼지집딸",
        "관계",
        "참우돌양곱창",
        "칠성돌곱창",
        "에픽키친",
        "수림로족발",
        "내가찜한닭",
        "칠칠켄터키",
        "첫눈에찜한닭",
        "신천닭도리",
        "땡삼이닭도리",
        "무봤나촌닭",
        "아웃닭",
        "오늘김해뒷고기",
        "김해원조뒷고기",
        "계성상회"
    )
    val miscellaneousPlaces = arrayOf(
        "포맨티코",
        "미분당",
        "꾸아",
        "엘부리또",
        "4242",
        "홍대쌀국수",
        "4rr사르르",
        "도르샐러드",
        "나우잇",
        "뭄바이",
        "에그드랍",
        "포포포",
        "투고샐러드",
        "인디키친"
    )
    val fastFoodPlaces = arrayOf(
        "맥도날드",
        "버거킹",
        "맘스터치",
        "롯데리아",
        "노브랜드버거",
        "버거스올마이티",
        "피자뿌",
        "피자스쿨",
        "피자몰",
        "파파존스",
        "써브웨이"
    )

    private fun getRandomFood(): String {
        allSelectedFoods.clear()
        if (binding.koreaBtn.isSelected) {
            allSelectedFoods.addAll(koreanRestaurants)
        }
        if (binding.chinaBtn.isSelected) {
            allSelectedFoods.addAll(chineseRestaurants)
        }
        if (binding.japanBtn.isSelected) {
            allSelectedFoods.addAll(japaneseRestaurants)
        }
        if (binding.westBtn.isSelected) {
            allSelectedFoods.addAll(westernRestaurants)
        }
        if (binding.dessertBtn.isSelected) {
            allSelectedFoods.addAll(dessertPlaces)
        }
        if (binding.streetFoodBtn.isSelected) {
            allSelectedFoods.addAll(streetFoodPlaces)
        }
        if (binding.meetchickenBtn.isSelected) {
            allSelectedFoods.addAll(meatAndChickenPlaces)
        }
        if (binding.etcBtn.isSelected) {
            allSelectedFoods.addAll(miscellaneousPlaces)
        }
        if (binding.fastfoodBtn.isSelected) {
            allSelectedFoods.addAll(fastFoodPlaces)
        }

        return allSelectedFoods.shuffled().firstOrNull() ?: "NULL"
    }

}