package com.sonako.snk_api

import cats.effect.IO
import com.twitter.finagle.{Http, Service}
import com.twitter.finagle.http.{Request, Response}
import com.twitter.util.Await
import io.finch._
import io.finch.catsEffect._
import io.finch.circe._
import io.circe.generic.auto._

object Main extends TwitterServer {

  case class Message(hello: String)

  def healthcheck: Endpoint[IO, String] = get(pathEmpty) {
    Ok("OK")
  }

  def helloWorld: Endpoint[IO, Message] = get("hello") {
    Ok(Message("World"))
  }

  def hello: Endpoint[IO, Message] = get("hello" :: path[String]) { s: String =>
    Ok(Message(s))
  }

  def service: Service[Request, Response] = Bootstrap
    .serve[Text.Plain](healthcheck)
    .serve[Application.Json](helloWorld :+: hello)
    .toService

  override def main(args: Array[String]) = {

  }
  Await.ready(Http.server.serve(":8081", service))
}