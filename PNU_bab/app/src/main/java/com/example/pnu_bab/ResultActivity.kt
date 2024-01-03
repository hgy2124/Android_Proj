package com.example.pnu_bab
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import android.widget.Toast
import com.example.pnu_bab.databinding.ActivityResultBinding

class ResultActivity:AppCompatActivity() {

    private lateinit var binding:ActivityResultBinding

    private val allSelectedFoods: ArrayList<String> = ArrayList()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_result)

        binding= ActivityResultBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Intent로 전달된 데이터 받아오기
        allSelectedFoods.addAll(intent.getStringArrayListExtra("allSelectedFoods") ?: emptyList())
        val selectedFood = intent.getStringExtra("selectedFood")
        resultUI(selectedFood)

        binding.ranBtn.setOnClickListener {
            rerunRandomFood(allSelectedFoods)
        }

    }

    private fun resultUI(selectedFood: String?) {
        // UI 업데이트를 위한 코드 작성
        val resultTextView: TextView = findViewById(R.id.resultTextView)

        if (!selectedFood.isNullOrBlank()) {
            resultTextView.text = "$selectedFood"
        }
    }

    private fun rerunRandomFood(allSelectedFoods: List<String>?) {
        // 선택된 음식 목록이 있고 비어있지 않으면 랜덤으로 음식 선택 후 UI 업데이트
        if (allSelectedFoods != null && allSelectedFoods.isNotEmpty()) {
            val selectedFood = getRandomFood(allSelectedFoods)
            resultUI(selectedFood)
        }
    }

    private fun getRandomFood(allSelectedFoods: List<String>): String {
        // 선택된 음식 목록을 사용하여 랜덤으로 음식 선택
        return allSelectedFoods.shuffled().firstOrNull() ?: "NULL"
    }

}