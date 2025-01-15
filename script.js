document.addEventListener('DOMContentLoaded', function() {
    // 照片模态框功能
    const directorPhoto = document.getElementById('directorPhoto');
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImage');
    const closeButton = document.querySelector('.close-button');

    directorPhoto.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // 音乐播放控制
    const audio = document.getElementById('birthdaySong');
    const playButton = document.getElementById('playButton');
    const volumeControl = document.getElementById('volumeControl');
    const progress = document.getElementById('progress');

    playButton.onclick = function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = '暂停音乐';
        } else {
            audio.pause();
            playButton.textContent = '播放音乐';
        }
    }

    volumeControl.oninput = function() {
        audio.volume = this.value;
    }

    // 更新进度条
    audio.ontimeupdate = function() {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percentage + '%';
    }

    // 添加员工祝福
    const wishes = [
        "祝刘董生日快乐，永远年轻！",
        "愿刘董事事顺心，万事如意！",
        "祝福刘董身体健康，笑口常开！"
    ];

    const wishesContainer = document.querySelector('.wishes-container');
    wishes.forEach((wish, index) => {
        const wishElement = document.createElement('p');
        wishElement.textContent = wish;
        wishElement.style.animation = `fadeIn 1s ${index * 0.5}s`;
        wishesContainer.appendChild(wishElement);
    });
}); 