var $menubar=function(){var d,c=$('<div class="notepad-menubar"></div>'),o=[],r=-1;function s(){!function(){for(var a=$('<ul class="menu-title"></ul>'),s=0;s<d.length;s++){var n=$('<li class="title"></li>');n.html(d[s].title),n.attr("data-id",s),a.append(n),n.click(function(a){var s=Number(this.dataset.id);r=-1===r?(o[s].css({display:"inline-block"}),s):r!==s?(o[r].css({display:"none"}),o[s].css({display:"inline-block"}),s):(o[r].css({display:"none"}),-1),a.stopPropagation()}),n.hover(function(){if(-1!==r){var a=Number(this.dataset.id);o[r].css({display:"none"}),o[a].css({display:"inline-block"}),r=a}})}c.append(a)}(),function(){for(var a=0;a<d.length;a++){for(var s=$('<ul class="menus"></ul>'),n=d[a].menuItems,e=0;e<n.length;e++)if("hr"!==n[e].title){var t=$('<li class="menu-item"></li>');if(t.html(n[e].title),t.attr("data-x",a),t.attr("data-y",e),""!==n[e].shortcut){var i=$('<span class="shortcut"></span>');i.html(n[e].shortcut),t.append(i)}n[e].enabled||t.addClass("disabled"),s.append(t),t.click(function(a){if(a.stopPropagation(),!$(this).hasClass("disabled")){var s=this.dataset.x,n=this.dataset.y;o[s].css({display:"none"}),r=-1,d[s].menuItems[n].handler()}})}else{var l=$('<li class="menu-hr"></li>');s.append(l)}s.css({width:d[a].width,left:d[a].left,display:"none"}),c.append(s),o.push(s)}}(),$("body").append(c)}return{show:function(a){d=a,s()},checked:function(a,s,n){var e=o[a].find(".menu-item")[s];n?$(e).prepend($('<span class="checked">✓</span>')[0]):$(e).find(".checked").remove()},enabled:function(a,s,n){var e=o[a].find(".menu-item")[s];n?$(e).removeClass("disabled"):$(e).addClass("disabled")},hideMenu:function(){-1!==r&&(o[r].css({display:"none"}),r=-1)}}}();