import React from 'react';
import WidgetContent from "./Widgetcontent";
import "./css/widget.css";

function Feed() {
    return (
        
           <div className="widget">
                <div className="widget-header">
                  <h5>Space to follow</h5>
            </div>
        <div className="widget-contents">
        <WidgetContent />
      </div>
    </div>
        
    )
}

export default Feed;