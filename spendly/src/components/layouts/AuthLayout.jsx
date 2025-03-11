const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className="w-screen h-screen px-12 pt-8 pb-12">
        <h2 className="text-3xl font-bold text-black">Spendly</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
