package com.example.servlet;

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class GetPostDemoServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String name = request.getParameter("username");

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h2>Request Method: GET</h2>");
        out.println("<p>Hello, " + name + "!</p>");
        out.println("<p>This request was sent using HTTP GET method.</p>");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String name = request.getParameter("username");

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h2>Request Method: POST</h2>");
        out.println("<p>Hello, " + name + "!</p>");
        out.println("<p>This request was sent using HTTP POST method.</p>");
    }
}
