package cn.ws.utils;

import java.sql.*;

@SuppressWarnings("unused")
public class DBUtil {

    public static final String URL="jdbc:mysql://localhost:3306/MYBFQ?useSSL=false&serverTimezone=UTC";
    public static final String USER="root";
    public static final String PASSWORD="mysql";

    protected static Statement s=null;
    protected static ResultSet rs=null;
    protected static Connection conn=null;

    /**
     **创建数据库链接
     * @return
     */
    public static synchronized Connection getConnection(){
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conn=DriverManager.getConnection(URL,USER,PASSWORD);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return conn;
    }

    /**
     **执行insert update delete语句
     * @param sql
     * @return 执行结果 int
     */
    public static int executeUpdate(String sql){
        int result=0;
        try {
            s=getConnection().createStatement();
            result=s.executeUpdate(sql);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return result;
    }

    /**
     **执行select语句
     * @param sql
     * @return result结果集
     */
    public static ResultSet executeQuery(String sql){
        try {
            s=getConnection().createStatement();
            rs=s.executeQuery(sql);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return rs;
    }


    /**
     **执行动态sql语句
     * @param sql
     * @return PreparedStatement
     */
    public static PreparedStatement executePreparedStatment(String sql){
        PreparedStatement ps=null;
        try {
            ps=getConnection().prepareStatement(sql);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return ps;
    }


    /**
     **事务回滚
     */
    public static void rollback(){
        try {
            getConnection().rollback();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    /**
     **关闭连接对象
     */
    public static void close(){
        try {
            if(rs!=null)
                rs.close();
            if(s!=null)
                s.close();
            if(conn!=null)
                conn.close();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    /**
     **检测密码是否正确
     * @param sql sql
     * @return 是否正确
     */
    public static boolean checkPasswd(String sql) {
        ResultSet rs = DBUtil.executeQuery(sql);
        String passwd = null;
        try {
            rs.next();
            passwd = rs.getString("Passwd");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return (passwd != null);
    }

}