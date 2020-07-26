import React from 'react';

function Work() {
  return (
    <section id="work" className="about">
      <div class="flex-row">
        <div class="section-title">
          <h2>
            My Work
          </h2>
        </div>
        <div class="content service-grid-wrapper">
          <div class="service-grid-container">
                        <div class="service-grid-item panel-1">
              <a href="https://tech-stop-n-shop.herokuapp.com/">
                <div class="grid-text active">
                  <h3>Tech-Stop-N-Shop</h3>
                  <h4>Node MVC Application</h4>
                </div>
              </a>
            </div>
            <div class="service-grid-item panel-2">
              <a href="https://github.com/aelisker/netflix-movie-picker">
                <div class="grid-text active">
                  <h3>Netflix Movie Picker</h3>
                  <h4>JS w/ API calls, Foundation</h4>
                </div>
              </a>
            </div>
            <div class="service-grid-item panel-3">
              <a href="https://aelisker.github.io/weather-dashboard/">
                <div class="grid-text active">
                  <h3>Weather Dashboard</h3>
                  <h4>JS w/ API call</h4>
                </div>
              </a>
            </div>
            <div class="service-grid-item panel-4">
              <a href="https://aelisker.github.io/workday-scheduler/">
                <div class="grid-text active">
                  <h3>Workday Scheduler</h3>
                  <h4>JS w/ Bootstrap</h4>
                </div>
              </a>
            </div>
            <div class="service-grid-item panel-5">
              <a href="https://aelisker.github.io/coding-quiz/">
                <div class="grid-text active">
                  <h3>Javascript Quiz</h3>
                  <h4>JS w/ Localstorage</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Work;