import ModuleList from "../Modules/List";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ModuleList />
      <div class="flex-grow-0 me-2 d-none d-lg-block" style="width: 250px">
            <h4>Course Status</h4>
            <button class="btn btn-light">Unpublish</button>
            <button class="btn btn-light">Published</button>
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    Import Existing Content
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    Import From Commons
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    Choose Home Page
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    View Course Stream
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    New Announcement
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    New Analytics
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    View Course Notifications
                </a>
            </div>
            <br/>
            
            <h4>
                Coming Up
            </h4>
            <i class="fa fa-calendar"></i> 
            <a href="#">View Calendar</a>
            <!--work on this!!!-->
            <ul class="list-group">
                <li class="list-group-item">
                    <i class="fa fa-calendar-check-o"></i>
                    <a href="#">Lecture</a>
                    CS4550.12631.202310 Sep 7 at 11:45am
                </li>
                <li class="list-group-item">
                    <i class="fa fa-calendar-check-o"></i>
                    <a href="#">Lecture</a>
                    CS4550.12631.202410 Sep 11 at 11:45am
                </li>
                <li class="list-group-item">
                    <i class="fa fa-calendar-check-o"></i>
                    <a href="#">Lecture</a>
                    CS4550.12631.202410 Sep 11 at 6:00pm
                </li>
            </ul>
        </div>
    </div>
  );
}
export default Home;