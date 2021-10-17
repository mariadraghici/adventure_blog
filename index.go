package main

import "github.com/gin-gonic/gin"
import "net/http"


func main(){
	r := gin.Default()
	r.GET("/home", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "home",
		})
	})

	r.GET("/login", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "login",
		})
	})

	r.GET("/register", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "register",
		})
	})






	r.GET("/", func(c *gin.Context) {
	//	name := c.Param("name")
		/*c.JSON(200, gin.H{
			"message": name,
	    })*/
		c.HTML(http.StatusOK, "templates/index.html")//,name)
	//	c.String(http.StatusOK, "Hello %s", name)
	})
	r.Run()
}
