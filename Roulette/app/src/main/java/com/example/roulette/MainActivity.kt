package com.example.roulette

import android.animation.ObjectAnimator
import android.animation.ValueAnimator
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.animation.AccelerateDecelerateInterpolator
import android.view.animation.Interpolator
import android.view.animation.OvershootInterpolator
import android.widget.Button
import android.widget.ImageView
import com.example.roulette.databinding.ActivityMainBinding


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)


        binding.startbtn.setOnClickListener {

            val end = Math.floor(Math.random()*3600).toFloat()
            val animatorS:ValueAnimator=ObjectAnimator
                .ofFloat(binding.arrow,"rotation",0f,end)
            animatorS.setDuration(2000)
            animatorS.start()
        }

        binding.resetbtn.setOnClickListener {
            binding.green.setText("")
            binding.orange.setText("")
            val animatorS:ValueAnimator=ObjectAnimator
                .ofFloat(binding.arrow,"rotation",0f,0f)
            animatorS.start()
        }
    }

}
