const options = document.querySelectorAll(".options");
    let pScore = 0;
    let cScore = 0;

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const pInput = this.textContent;

        const cOptions = ["Stein", "Papir", "Saks"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        compareInputs(pInput, cInput);
        updateScore();
        if (checkWinner()) {
          pScore = cScore = 0;
          updateScore();
        }
      });
    });

    function compareInputs(pInput, cInput) {
      const currentMatch = `${pInput} mot ${cInput}`;
      if (pInput === cInput) {
        alert(`${currentMatch} er likt`);
        return;
      }

      if (pInput === "Stein") {
        if (cInput === "Saks") {
          alert(`${currentMatch} = Du vant`);
          pScore++;
        } else {
          alert(`${currentMatch} = Maskinen vant`);
          cScore++;
        }
      }
      //Check for Paper
      else if (pInput === "Papir") {
        if (cInput === "Stein") {
          alert(`${currentMatch} = Du vant`);
          pScore++;
        } else {
          alert(`${currentMatch} = Maskinen vant`);
          cScore++;
        }
      }
      //Check for Scissors
      else {
        if (cInput === "Paper") {
          alert(`${currentMatch} = Du vant`);
          pScore++;
        } else {
          alert(`${currentMatch} = Maskinen vant`);
          cScore++;
        }
      }
    }

    function updateScore() {
      document.getElementById("p-score").textContent = pScore;
      document.getElementById("c-score").textContent = cScore;
    }

    function checkWinner() {
      if (pScore === 5 || cScore === 5) {
        const winner =
          pScore === 5
            ? "Du vant. Gratulerer!"
            : "Maskinen vant. Bedre lykke neste gang!";
        alert(winner);
        return true;
      }
      return false;
    }