// module Data.BigInt

import bigInt from "big-integer";

function fromBaseImpl(just) {
  return function(nothing) {
    return function(b) {
      return function(s) {
        try {
          var x = bigInt(s, b);
          return just(x);
        } catch (err) {
          return nothing;
        }
      };
    };
  };
}

function truncate(n) {
  if (n > 0) return Math.floor(n);
  return Math.ceil(n);
}

function fromNumberImpl(just) {
  return function(nothing) {
      return function(n) {
        try {
          var x = bigInt(truncate(n));
          return just(x);
        } catch (err) {
          return nothing;
        }
      };
  };
}

function fromInt(n) {
  return bigInt(n);
}

function toBase(base) {
  return function (x) {
    return x.toString(base);
  };
}

function toNumber(x) {
  return x.toJSNumber();
}

function biAdd(x) {
  return function(y) {
    return x.add(y);
  };
}

function biMul(x) {
  return function(y) {
    return x.multiply(y);
  };
}

function biSub(x) {
  return function(y) {
    return x.minus(y);
  };
}

function biMod(x) {
  return function(y) {
    return x.mod(y);
  };
}

function biDiv(x) {
  return function(y) {
    return x.divide(y);
  };
}

function biEquals(x) {
  return function(y) {
    return x.equals(y);
  };
}

function biCompare(x) {
  return function(y) {
    return x.compare(y);
  };
}

function abs(x) {
  return x.abs();
}

function even(x) {
  return x.isEven();
}

function odd(x) {
  return x.isOdd();
}

function prime(x) {
  return x.isPrime();
}

function pow(x) {
  return function(y) {
    return x.pow(y);
  };
}

function not(x) {
  return x.not();
  }

function or(x) {
  return function(y) {
    return x.or(y);
  };
}

function xor(x) {
  return function(y) {
    return x.xor(y);
  };
}

function and(x) {
  return function(y) {
    return x.and(y);
  };
}

function shl(x) {
  return function(n) {
    return x.shiftLeft(n);
  };
}

function shr(x) {
  return function(n) {
    return x.shiftRight(n);
  };
}

function digitsInBase(radix) {
  return function(x) {
    return x.toArray(radix);
  };
}

function modPow(x) {
  return function (exp) {
    return function(mod) {
      return x.modPow(exp, mod);
    }
  }
}

function mod(x) {
	return function(y) {
	  let rem = x.mod(y);
	  let result = rem;
	  if (rem.lesser(0)) {
		  result = (rem.add(y)).mod(y);
	  };
	  return result;
	};
  }

export {
	  fromBaseImpl
	, fromNumberImpl
	, fromInt
	, toBase
	, toNumber
	, biAdd
	, biMul
	, biSub
	, biMod
	, biDiv
	, biEquals
	, biCompare
	, abs
	, even
	, odd
	, prime
	, pow
	, not
	, or
	, xor
	, and
	, shl
	, shr
	, digitsInBase
	, modPow
	, mod
}