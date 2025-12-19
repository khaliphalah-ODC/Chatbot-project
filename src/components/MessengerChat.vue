<template>

</template>


<script setup>
import { onMounted, } from 'vue'; 
onMounted(() =>{

    (function(d, m){
        var kommunicateSettings = 
            {"appId":"1ef7b722b6fc2d80585518ddc43788c4","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/kommunicate-widget-3.0.min.js";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
})

</script>