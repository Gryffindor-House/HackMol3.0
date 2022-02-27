import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div class="container">
        <input type="radio" name="slider" id="item-1" checked />
        <input type="radio" name="slider" id="item-2" />
        <input type="radio" name="slider" id="item-3" />
        <div class="cards">
          <label class="card" for="item-1" id="song-1">
            <img
              src="https://images.newscientist.com/wp-content/uploads/2011/03/dn20253-1_300.jpg?width=1200&enable=upscale"
              alt="song"
            />
          </label>
          <label class="card" for="item-2" id="song-2">
            <img
              src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/6/30/w900X450/floods.jpg?w=400&dpr=2.6"
              alt="song"
            />
          </label>
          <label class="card" for="item-3" id="song-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNc7CQHtJ1ahPzLVdI1LdPuCE1f1QyKr6rLw&usqp=CAU"
              alt="song"
            />
          </label>
        </div>
      </div>
      <div class="player">
        <div class="upper-part">
          <div class="info-area" id="test">
            <label class="song-info" id="song-info-1">
              <div class="title">Tsunami</div>
              <div class="sub-line">
                <div class="subtitle">No alerts </div>
              </div>
            </label>
            <label class="song-info" id="song-info-2">
              <div class="title">Floods</div>
              <div class="sub-line">
                <div class="subtitle">No alerts </div>
              </div>
            </label>
            <label class="song-info" id="song-info-3">
              <div class="title">Storm</div>
              <div class="sub-line">
                <div class="subtitle">No alerts </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
